<?php

namespace App\Filter;

use I9code\LaravelMetronic\Menu\Builder;
use I9code\LaravelMetronic\Menu\Filters\FilterInterface;
use Laratrust;


/**
 * Created by PhpStorm.
 * User: johns
 * Date: 29/06/2018
 * Time: 11:35
 */
class MenuFilter implements FilterInterface
{
    public function transform($item, Builder $builder)
    {
        if (isset($item['permission']) && !Laratrust::can($item['permission'])) {
            return false;
        }

        return $item;
    }
}