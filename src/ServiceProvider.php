<?php

namespace I9code\LaravelMetronic;

use I9code\LaravelMetronic\Console\MakeMetronicCommand;
use I9code\LaravelMetronic\Console\MetronicMakeCommand;
use I9code\LaravelMetronic\Events\BuildingMenu;
use I9code\LaravelMetronic\Http\ViewComposers\MetronicComposer;
use Illuminate\Contracts\Config\Repository;
use Illuminate\Contracts\Container\Container;
use Illuminate\Contracts\Events\Dispatcher;
use Illuminate\Contracts\View\Factory;
use Illuminate\Support\ServiceProvider as BaseServiceProvider;

class ServiceProvider extends BaseServiceProvider
{
    public function register()
    {
        $this->app->singleton(Metronic::class, function (Container $app) {
            return new Metronic(
                $app['config']['metronic.filters'],
                $app['events'],
                $app
            );
        });
    }

    public function boot(
        Factory $view,
        Dispatcher $events,
        Repository $config
    )
    {
        $this->loadViews();

        $this->loadTranslations();

        $this->publishConfig();

        $this->publishAssets();

        $this->registerCommands();

        $this->registerViewComposers($view);

        static::registerMenu($events, $config);
    }

    private function loadViews()
    {
        $viewsPath = $this->packagePath('resources/views');

        $this->loadViewsFrom($viewsPath, 'metronic');

        $this->publishes([
            $viewsPath => base_path('resources/views/vendor/metronic'),
        ], 'views');
    }

    private function loadTranslations()
    {
        $translationsPath = $this->packagePath('resources/lang');

        $this->loadTranslationsFrom($translationsPath, 'metronic');

        $this->publishes([
            $translationsPath => base_path('resources/lang/vendor/metronic'),
        ], 'translations');
    }

    private function publishConfig()
    {
        $configPath = $this->packagePath('config/metronic.php');

        $this->publishes([
            $configPath => config_path('metronic.php'),
        ], 'config');

        $this->mergeConfigFrom($configPath, 'metronic');
    }

    private function publishAssets()
    {
        $this->publishes([
            $this->packagePath('resources/assets') => public_path('vendor/metronic'),
        ], 'assets');
    }

    private function packagePath($path)
    {
        return __DIR__ . "/../$path";
    }

    private function registerCommands()
    {
        // Laravel >=5.2 only
        if (class_exists('Illuminate\\Auth\\Console\\MakeAuthCommand')) {
            $this->commands(MakeMetronicCommand::class);
        } elseif (class_exists('Illuminate\\Auth\\Console\\AuthMakeCommand')) {
            $this->commands(MetronicMakeCommand::class);
        }
    }

    private function registerViewComposers(Factory $view)
    {
        $view->composer('metronic::page', MetronicComposer::class);
    }

    public static function registerMenu(Dispatcher $events, Repository $config)
    {
        $events->listen(BuildingMenu::class, function (BuildingMenu $event) use ($config) {
            $menu = $config->get('metronic.menu');
            call_user_func_array([$event->menu, 'add'], $menu);
        });
    }
}
