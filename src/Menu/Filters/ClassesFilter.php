<?php

namespace I9code\LaravelMetronic\Menu\Filters;

use I9code\LaravelMetronic\Menu\Builder;

class ClassesFilter implements FilterInterface
{
    public function transform($item, Builder $builder)
    {
        if (!isset($item['header'])) {
            $item['classes'] = $this->makeClasses($item);
            $item['class'] = implode(' ', $item['classes']);
            $item['top_nav_classes'] = $this->makeClasses($item, true);
            $item['top_nav_class'] = implode(' ', $item['top_nav_classes']);
        }

        return $item;
    }

    protected function makeClasses($item, $topNav = false)
    {
        $classes = [];


        $classes[] = $topNav ? 'classic-menu-dropdown' : 'nav-item';


        if ($item['active']) {
            $classes[] = 'active';
            $classes[] = $topNav ? '' : 'open';
        }
//
//        if (isset($item['submenu'])) {
//            $classes[] = $topNav ? 'dropdown' : '';
//        }
        return $classes;
    }
}
