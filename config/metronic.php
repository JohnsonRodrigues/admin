<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Title
    |--------------------------------------------------------------------------
    |
    | The default title of your admin panel, this goes into the title tag
    | of your page. You can override it per page with the title section.
    | You can optionally also specify a title prefix and/or postfix.
    |
    */

    'title' => 'Metronic',
    'version' => 'v0001',
    'developer' => '#',

    /*
   |--------------------------------------------------------------------------
   | Logo
   |--------------------------------------------------------------------------
   |
   | This logo is displayed at the upper left corner of your admin panel.
   | You can use basic HTML here if you want. The logo has also a mini
   | variant, used for the mini side bar. Make it 3 letters or so
   |
   */

    'logo' => 'vendor/metronic/pages/img/logo-big.png',
    'logo_home' => 'vendor/metronic/pages/img/logo.png',
    'favicon' => 'vendor/metronic/pages/img/favicon.ico',


    //default components-square | Square == 'components-square' | Rounded == 'components-rounded'
    'theme_style' => 'components-rounded',

    //default '' | full width(fluid)  == '' | boxed == 'page-boxed'
    'layout' => '',

    //default 'navbar-static-top' && '' | default(fluid page) && ''  == 'navbar-static-top' | fixed top == 'navbar-fixed-top' && 'page-header-fixed'
    'header' => '',

    //default '' | accordion  == '' | Menu Hover == 'page-sidebar-menu-hover-submenu'
    'sidebar_menu' => '',

    //default '' | default(background-color)  == '' | light == 'page-sidebar-menu-light'
    'sidebar_style' => '',

    //default '' | default(left)  == '' | right == 'page-sidebar-reversed'
    'sidebar_position' => '',

    //default '' | default(fixed bottom)  == '' | fixed page(fluid) == 'page-footer-fixed'
    'footer' => '',

    //default '' | default(sidebar open)  == '' | sidebar closed == 'page-sidebar-closed'
    'sidebar_closed' => '',

    //default '' | default(sidebar and page)  == '' | page_full_width == 'page-full-width'
    'page_full_width' => '',

    //default '' | default(full width white)  == '' | page_content(com sidebar) == 'page-container-bg-solid'
    'page_content' => 'page-container-bg-solid',


    /*
    |--------------------------------------------------------------------------
    | Skin Color
    |--------------------------------------------------------------------------
    |
    | Choose a skin color for your admin panel. The available skin colors:
    |default, darkblue, blue, grey, light, light2.
    */

    'skin' => 'darkblue',

    /*
    |--------------------------------------------------------------------------
    | Layout
    |--------------------------------------------------------------------------
    |
    | Choose a layout for your admin panel. The available layout options:
    | null, 'boxed', 'fixed', 'top-nav'. null is the default, top-nav
    | removes the sidebar and places your menu in the top navbar
    |
    */

    'layout' => null,

    /*
    |--------------------------------------------------------------------------
    | Collapse Sidebar
    |--------------------------------------------------------------------------
    |
    | Here we choose and option to be able to start with a collapsed side
    | bar. To adjust your sidebar layout simply set this  either true
    | this is compatible with layouts except top-nav layout option
    |
    */

    'collapse_sidebar' => false,

    /*
    |--------------------------------------------------------------------------
    | URLs
    |--------------------------------------------------------------------------
    |
    | Register here your dashboard, logout, login and register URLs. The
    | logout URL automatically sends a POST request in Laravel 5.3 or higher.
    | You can set the request to a GET or POST with logout_method.
    | Set register_url to null if you don't want a register link.
    |
    */

    'dashboard_url' => 'home',

    'logout_url' => 'logout',

    'logout_method' => null,

    'login_url' => 'login',

    'register_url' => 'register',

    'password_reset_url' => 'password/reset',

    /*
    |--------------------------------------------------------------------------
    | Menu Items
    |--------------------------------------------------------------------------
    |
    | Specify your menu items to display in the left sidebar. Each menu item
    | should have a text and and a URL. You can also specify an icon from
    | Font Awesome. A string instead of an array represents a header in sidebar
    | layout. The 'can' is a filter on Laravel's built in Gate functionality.
    |
    */

    'menu' => [
        'MAIN NAVIGATION2',
        [
            'text' => 'Blog',
            'url' => 'gfdgdfgdf',
        ],
        [
            'text' => 'Pages',
            'url' => 'admin/pages',
            'icon' => 'file',
            'label' => 4,
            'label_color' => 'success',
        ],
        'ACCOUNT SETTINGS',
        [
            'text' => 'Profile',
            'url' => 'admin/settings',
            'icon' => 'user',
        ],
        [
            'text' => 'Change Password',
            'url' => 'admin/settings',
            'icon' => 'lock',
        ],
        [
            'text' => 'Multilevel',
            'icon' => 'share',
            'url' => '#',
            'submenu' => [
                [
                    'text' => 'Level One',
                    'url' => '#',
                ],
                [
                    'text' => 'Level One',
                    'url' => '#',
                    'submenu' => [
                        [
                            'text' => 'Level Two',
                            'url' => '/',
                        ],
                        [
                            'text' => 'Level Two',
                            'url' => '#',
                            'submenu' => [
                                [
                                    'text' => 'Level Three',
                                    'url' => '#',
                                ],
                                [
                                    'text' => 'Level Three',
                                    'url' => '#',
                                ],
                            ],
                        ],
                    ],
                ],
                [
                    'text' => 'Level One',
                    'url' => '#',
                ],
            ],
        ],
        'LABELS',
        [
            'text' => 'Important',
            'icon_color' => 'red',
        ],
        [
            'text' => 'Warning',
            'icon_color' => 'yellow',
        ],
        [
            'text' => 'Information',
            'icon_color' => 'aqua',
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Menu Filters
    |--------------------------------------------------------------------------
    |
    | Choose what filters you want to include for rendering the menu.
    | You can add your own filters to this array after you've created them.
    | You can comment out the GateFilter if you don't want to use Laravel's
    | built in Gate functionality
    |
    */

    'filters' => [
        I9code\LaravelMetronic\Menu\Filters\HrefFilter::class,
        I9code\LaravelMetronic\Menu\Filters\ActiveFilter::class,
        I9code\LaravelMetronic\Menu\Filters\SubmenuFilter::class,
        I9code\LaravelMetronic\Menu\Filters\ClassesFilter::class,
        I9code\LaravelMetronic\Menu\Filters\GateFilter::class,
    ],

    /*
    |--------------------------------------------------------------------------
    | Plugins Initialization
    |--------------------------------------------------------------------------
    |
    | Choose which JavaScript plugins should be included. At this moment,
    | only DataTables is supported as a plugin. Set the value to true
    | to include the JavaScript file from a CDN via a script tag.
    |
    */

    'plugins' => [
        'datatables' => true,
        'select2' => true,
        'chartjs' => true,
    ],
];
