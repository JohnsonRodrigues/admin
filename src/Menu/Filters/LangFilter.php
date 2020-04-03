<?php

namespace I9code\LaravelMetronic\Menu\Filters;

use I9code\LaravelMetronic\Menu\Builder;
use Illuminate\Translation\Translator;


class LangFilter implements FilterInterface
{
    protected $langGenerator;

    public function __construct(Translator $langGenerator)
    {
        $this->langGenerator = $langGenerator;
    }

    public function transform($item, Builder $builder)
    {
        if (isset($item['header'])) {
            $item['header'] = $this->getTranslation($item['header']) ?? $item['header'];
        }
        if (isset($item['text'])) {
            $item['text'] = $this->getTranslation($item['text']) ?? $item['text'];
        }

        return $item;
    }

    protected function getTranslation($item)
    {
        if ($this->langGenerator->has('menu.'.$item)) {
            return $this->langGenerator->get('menu.'.$item);
        } elseif ($this->langGenerator->has('metronic::menu.'.$item)) {
            return $this->langGenerator->get('metronic::menu.'.$item);
        }

        return $item;
    }
}
