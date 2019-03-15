<?php

namespace I9code\LaravelMetronic\Menu\Filters;

use I9code\LaravelMetronic\Menu\Builder;
use Illuminate\Contracts\Routing\UrlGenerator;

class HrefFilter implements FilterInterface
{
    protected $urlGenerator;

    public function __construct(UrlGenerator $urlGenerator)
    {
        $this->urlGenerator = $urlGenerator;
    }

    public function transform($item, Builder $builder)
    {
        if (! isset($item['header'])) {
            $item['href'] = $this->makeHref($item);
        }

        return $item;
    }

    protected function makeHref($item)
    {
        if (isset($item['url'])) {
            return $this->urlGenerator->to($item['url']);
        }

        if (isset($item['route'])) {
            return $this->urlGenerator->route($item['route']);
        }

        return '#';
    }
}
