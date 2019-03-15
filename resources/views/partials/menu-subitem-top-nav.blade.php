@if (is_array($item))
    <li class="{{isset($item['submenu'])?'dropdown-submenu':''}}  {{Str::contains($item['top_nav_class'], ['active'])?'active':'' }}">
        <a href="{{ $item['href'] }}"
           @if (isset($item['target'])) target="{{ $item['target'] }}" @endif
        >
            <i class="fa fa-fw fa-{{ isset($item['icon']) ? $item['icon'] : 'circle-o' }} {{ isset($item['icon_color']) ? 'text-' . $item['icon_color'] : '' }}"></i>
            {{ $item['text'] }}
            @if (isset($item['label']))
                <span class="label label-{{ isset($item['label_color']) ? $item['label_color'] : 'primary' }}">{{ $item['label'] }}</span>
            @endif
        </a>
        @if (isset($item['submenu']))
            <ul class="dropdown-menu">
                @each('metronic::partials.menu-subitem-top-nav', $item['submenu'], 'item')
            </ul>
        @endif
    </li>
@endif