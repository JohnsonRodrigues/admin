<?php

namespace I9code\LaravelMetronic\Http\ViewComposers;

use I9code\LaravelMetronic\Metronic;
use Illuminate\View\View;


class MetronicComposer
{
    /**
     * @var Metronic
     */
    private $metronic;

    public function __construct(Metronic $metronic)
    {
        $this->metronic = $metronic;
    }

    public function compose(View $view)
    {
        $view->with('metronic', $this->metronic);
    }
}
