 (function(){
    $._ajaxDelayBk = $.ajax; // save reference to the "real" ajax method

    // override the method with a wrapper
    $.ajax = function(){
        var def = new $.Deferred(),
            delay = typeof $.ajax.delay == 'undefined' ? 500 : $.ajax.delay,
            delayTimeout,
            args = arguments[0];

        // set simulated delay (random) duration
        delayTimeout = setTimeout(function(){
            $._ajaxDelayBk(args)
                .always(def.resolve)
                .done(def.resolve)
                .fail(def.reject)
        }, delay);

        def.abort = function(){
            clearTimeout(delayTimeout);
        };

        return def;
    }
})();