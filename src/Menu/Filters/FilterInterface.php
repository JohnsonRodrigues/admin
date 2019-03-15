<?php

namespace I9code\LaravelMetronic\Menu\Filters;

use I9code\LaravelMetronic\Menu\Builder;

interface FilterInterface
{
    public function transform($item, Builder $builder);
}
