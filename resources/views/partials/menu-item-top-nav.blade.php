@if (is_array($item))
    <li class="{{ $item['top_nav_class'] }}" aria-haspopup="true">
        <a href="{{ $item['href'] }}"
           @if (isset($item['submenu'])) data-hover="megamenu-dropdown" data-close-others="true" @endif
           @if (isset($item['target'])) target="{{ $item['target'] }}" @endif
        >
            @if (isset($item['top_nav_class'])== 'classic-menu-dropdown active ')
                <span class="selected"> </span>
            @endif
            <i class="fa fa-fw fa-{{ isset($item['icon']) ? $item['icon'] : 'circle-o' }} {{ isset($item['icon_color']) ? 'text-' . $item['icon_color'] : '' }}"></i>
            {{ $item['text'] }}
            @if (isset($item['label']))
                <span class="label label-{{ isset($item['label_color']) ? $item['label_color'] : 'primary' }}">{{ $item['label'] }}</span>
            @elseif (isset($item['submenu']))
                <i class="fa fa-angle-down"></i>
            @endif
        </a>
        @if (isset($item['submenu']))
            <ul class="dropdown-menu pull-left">
                @each('metronic::partials.menu-subitem-top-nav', $item['submenu'], 'item')
            </ul>
        @endif
    </li>
@endif