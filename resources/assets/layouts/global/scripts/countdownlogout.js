var CountDownLogout = function () {

    return {
        init: function () {
            $('#timer_timeout').backward_timer({
                seconds: 3600,
                format: 'm%:s% min',
                on_exhausted: function() {
                    document.getElementById('logout-form').submit();
                }
            }).backward_timer('start');
        }
    };
}();

CountDownLogout.init(); // init metronic core componets