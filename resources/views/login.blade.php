@extends('metronic::master')

@section('metronic_css')
    <!-- BEGIN PAGE LEVEL STYLES -->
    <link href="{{ asset('vendor/metronic/pages/css/login.css')}}" rel="stylesheet" type="text/css"/>
    <!-- END PAGE LEVEL STYLES -->
    @yield('css')
@stop

@section('body_class', 'login')

@section('body')
    <!-- BEGIN LOGO -->
    <div class="logo">
        <a href="{{ url(config('metronic.dashboard_url', 'home')) }}">
            <img src="{!! config('metronic.logo', '<b>Admin</b>LTE') !!}" alt=""/>
        </a>
    </div>
    <!-- END LOGO -->
    <!-- BEGIN LOGIN -->
    <div class="content">
        <!-- BEGIN LOGIN FORM -->
        <form class="login-form" action="{{ url(config('metronic.login_url', 'login')) }}" method="post">
            {!! csrf_field() !!}
            <h3 class="form-title font-green">{{ trans('metronic::metronic.sign_in_title') }}</h3>
            <div class="alert alert-danger display-hide">
                <button class="close" data-close="alert"></button>
                <span> {{ trans('metronic::metronic.login_message') }} </span>
            </div>
            <div class="form-group has-feedback {{ $errors->has('email') ? 'has-error' : '' }}">
                <label class="control-label visible-ie8 visible-ie9">{{ trans('metronic::metronic.email') }}</label>
                <input class="form-control" type="text" autocomplete="off"
                       placeholder="{{ trans('metronic::metronic.email') }}" name="email"
                       value="{{ old('email') }}"/>
                @if ($errors->has('email'))
                    <span class="help-block">
                <strong>{{ $errors->first('email') }}</strong>
            </span>
                @endif
            </div>
            <div class="form-group has-feedback {{ $errors->has('password') ? 'has-error' : '' }}">
                <label class="control-label visible-ie8 visible-ie9">{{ trans('metronic::metronic.password') }}</label>
                <input class="form-control form-control-solid placeholder-no-fix" type="password" autocomplete="off"
                       placeholder="{{ trans('metronic::metronic.password') }}" name="password"/>
                @if ($errors->has('password'))
                    <span class="help-block">
                        <strong>{{ $errors->first('password') }}</strong>
                    </span>
                @endif
            </div>
            <div class="form-group">
                <button type="submit"
                        class="btn green btn-lg btn-block uppercase">{{ trans('metronic::metronic.sign_in') }}</button>
            </div>
            <div class="form-actions">
                <label class="rememberme check mt-checkbox mt-checkbox-outline">
                    <input type="checkbox" name="remember"> {{ trans('metronic::metronic.remember_me') }}
                    <span></span>
                </label>
                <a href="{{ url(config('metronic.password_reset_url', 'password/reset')) }}"
                   id="forget-password" class="text-center forget-password"
                >{{ trans('metronic::metronic.i_forgot_my_password') }}</a>

            </div>
            {{--<div class="login-options">--}}
            {{--<h4>Or login with</h4>--}}
            {{--<ul class="social-icons">--}}
            {{--<li>--}}
            {{--<a class="social-icon-color facebook" data-original-title="facebook" href="javascript:;"></a>--}}
            {{--</li>--}}
            {{--<li>--}}
            {{--<a class="social-icon-color twitter" data-original-title="Twitter" href="javascript:;"></a>--}}
            {{--</li>--}}
            {{--<li>--}}
            {{--<a class="social-icon-color googleplus" data-original-title="Goole Plus"--}}
            {{--href="javascript:;"></a>--}}
            {{--</li>--}}
            {{--<li>--}}
            {{--<a class="social-icon-color linkedin" data-original-title="Linkedin" href="javascript:;"></a>--}}
            {{--</li>--}}
            {{--</ul>--}}
            {{--</div>--}}
            @if (config('metronic.register_url', 'register'))
                <div class="create-account">
                    <p>
                        <a href="{{ url(config('metronic.register_url', 'register')) }}"
                           id="register-btn" class=" text-center uppercase"
                        >{{ trans('metronic::metronic.register_a_new_membership') }}</a>
                    </p>
                </div>
            @endif

        </form>
        <!-- END LOGIN FORM -->
    </div>
    <div class="copyright"> {{date("Y")}} &copy; {{ config('metronic.title', 'Metronic')  }}
        {{ config('metronic.version', 'V0001')}}
        <a target="_blank" href="{{ config('metronic.developer', '#')}}">{{ config('metronic.title', 'Metronic')  }}</a>
    </div>



@stop

@section('metronic_js')
    <!-- BEGIN PAGE LEVEL PLUGINS -->
    <script src="{{asset('vendor/metronic/global/plugins/jquery-validation/js/jquery.validate.min.js')}}"
            type="text/javascript"></script>
    <script src="{{asset('vendor/metronic/global/plugins/jquery-validation/js/additional-methods.min.js')}}"
            type="text/javascript"></script>
    <script src="{{asset('vendor/metronic/global/plugins/jquery-validation/js/localization/messages_pt_BR.min.js')}}"
            type="text/javascript"></script>
    <!-- END PAGE LEVEL PLUGINS -->

    <!-- BEGIN PAGE LEVEL SCRIPTS -->
    <script src="{{ asset('vendor/metronic/pages/scripts/login.js')}}" type="text/javascript"></script>
    <!-- END PAGE LEVEL SCRIPTS -->
    @yield('js')
@stop
