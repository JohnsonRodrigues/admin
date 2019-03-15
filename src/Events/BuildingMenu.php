<?php

namespace I9code\LaravelMetronic\Events;


use I9code\LaravelMetronic\Menu\Builder;

class BuildingMenu
{
    public $menu;

    public function __construct(Builder $menu)
    {
        $this->menu = $menu;
    }
}
