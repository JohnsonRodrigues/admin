@extends('metronic::master')

@section('metronic_css')

    <!-- BEGIN THEME LAYOUT STYLES -->
    <link href="{{asset('vendor/metronic/layouts/layout/css/layout.min.css')}}" rel="stylesheet" type="text/css"/>
    <link href="{{asset('vendor/metronic/layouts/layout/css/themes/'.config('metronic.skin', 'default').'.min.css')}}"
          rel="stylesheet" type="text/css"/>
    <link href="{{asset('vendor/metronic/layouts/layout/css/custom.min.css')}}" rel="stylesheet" type="text/css"/>
    <!-- END THEME LAYOUT STYLES -->

    @stack('css')
    @yield('css')
@stop

@section('body_class', 'page-sidebar-closed-hide-logo page-content-white '.
                       config('metronic.header', ' ').
                       config('metronic.layout',' ').
                       config('metronic.sidebar_closed',' ').
                       config('metronic.page_full_width',' ').
                       config('metronic.sidebar_position',' '))

@section('body')
    <!-- BEGIN WRAPPER -->
    <div class="page-wrapper">
        <!-- BEGIN HEADER -->
        <div class="page-header navbar {{(((config('metronic.header') == '') || (config('metronic.page_full_width') == 'page_full_width'))) ? ' navbar-static-top' : ' navbar-fixed-top'}}">
            <!-- BEGIN HEADER INNER -->
            <div class="page-header-inner ">

                <!-- BEGIN LOGO -->
                <div class="page-logo">
                    <a href="{{ url(config('metronic.dashboard_url', 'home')) }}">
                        <img src="{{asset(config('metronic.logo', '../assets/layouts/layout/img/logo.png'))}}" alt="logo"
                             class="logo-default"/> </a>
                    @if(config('metronic.page_full_width')!='page-full-width')
                        <div class="menu-toggler sidebar-toggler">
                            <span></span>
                        </div>
                    @endif
                </div>
                <!-- END LOGO -->

            @if(config('metronic.page_full_width')=='page-full-width')
                <!-- BEGIN MEGA MENU -->
                    <div class="hor-menu hidden-sm hidden-xs">
                        <ul class="nav navbar-nav">
                            @each('metronic::partials.menu-item-top-nav', $metronic->menu(), 'item')
                        </ul>
                    </div>
                    <!-- END MEGA MENU -->
            @endif

            <!-- BEGIN RESPONSIVE MENU TOGGLER -->
                <a href="javascript:;" class="menu-toggler responsive-toggler" data-toggle="collapse"
                   data-target=".navbar-collapse">
                    <span></span>
                </a>
                <!-- END RESPONSIVE MENU TOGGLER -->


                <!-- BEGIN TOP NAVIGATION MENU -->
            @include('metronic::partials.top-menu-nav')
            <!-- END TOP NAVIGATION MENU -->

            </div>
            <!-- END HEADER INNER -->
        </div>
        <!-- END HEADER -->

        <!-- BEGIN HEADER & CONTENT DIVIDER -->
        <div class="clearfix"></div>
        <!-- END HEADER & CONTENT DIVIDER -->


        <!-- BEGIN CONTAINER -->
        <div class="page-container">

            <!-- BEGIN SIDEBAR -->
            <div class="page-sidebar-wrapper">
                <!-- BEGIN SIDEBAR -->
                <div class="page-sidebar navbar-collapse collapse">
                    <!-- BEGIN SIDEBAR MENU -->
                    <ul class="page-sidebar-menu  page-header-fixed {{config('metronic.sidebar_menu', ' ').config('metronic.sidebar_style', ' ')}}"
                        data-keep-expanded="false"
                        data-auto-scroll="true" data-slide-speed="200" style="padding-top: 20px">
                        <!-- BEGIN SIDEBAR TOGGLER BUTTON -->
                        <li class="sidebar-toggler-wrapper hide">
                            <div class="sidebar-toggler">
                                <span></span>
                            </div>
                        </li>
                        {{--<li class="sidebar-search-wrapper">--}}
                        {{--<!-- BEGIN RESPONSIVE QUICK SEARCH FORM -->--}}
                        {{--<!-- DOC: Apply "sidebar-search-bordered" class the below search form to have bordered search box -->--}}
                        {{--<!-- DOC: Apply "sidebar-search-bordered sidebar-search-solid" class the below search form to have bordered & solid search box -->--}}
                        {{--<form class="sidebar-search  sidebar-search-bordered" action="page_general_search_3.html"--}}
                        {{--method="POST">--}}
                        {{--<a href="javascript:;" class="remove">--}}
                        {{--<i class="icon-close"></i>--}}
                        {{--</a>--}}
                        {{--<div class="input-group">--}}
                        {{--<input type="text" class="form-control" placeholder="Search...">--}}
                        {{--<span class="input-group-btn">--}}
                        {{--<a href="javascript:;" class="btn submit">--}}
                        {{--<i class="icon-magnifier"></i>--}}
                        {{--</a>--}}
                        {{--</span>--}}
                        {{--</div>--}}
                        {{--</form>--}}
                        {{--<!-- END RESPONSIVE QUICK SEARCH FORM -->--}}
                        {{--</li>--}}

                        @each('metronic::partials.menu-item', $metronic->menu(), 'item')

                    </ul>
                    <!-- END SIDEBAR MENU -->
                </div>
                <!-- END SIDEBAR -->
            </div>
            <!-- END SIDEBAR -->


            <!-- BEGIN CONTENT -->
            <div class="page-content-wrapper">
                <!-- BEGIN CONTENT BODY -->
                <div class="page-content">
                    <!-- BEGIN PAGE HEADER-->

                    <!-- BEGIN PAGE BAR -->
                @include('metronic::partials.page-bar')
                <!-- END PAGE BAR -->


                    <!-- BEGIN PAGE TITLE-->
                    <h1 class="page-title">
                        @yield('content_header')
                    </h1>
                    <!-- END PAGE TITLE-->
                    <!-- END PAGE HEADER-->
                    @yield('content')
                </div>
                <!-- END CONTENT BODY -->
            </div>
            <!-- END CONTENT -->
        </div>
        <!-- END CONTAINER -->


        <!-- BEGIN FOOTER -->
    @include('metronic::partials.footer')
    <!-- END FOOTER -->

    </div>
    <!-- END WRAPPER -->

@stop

@section('metronic_js')
    @stack('js')
    @yield('js')
@stop
