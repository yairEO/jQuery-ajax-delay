jQuery-ajax-delay
========

Custom delay on-top of the default $.ajax method. This is a way to have (on all jQuery ajax calls) a delay, throughout your entire app.
Very handy in simulating real-life random latency.

## Can set a random delay for each request:

    $.ajax.delay = Math.floor(Math.random() * 5000) + 1000;

## Request example:
```javascript
var myAjax = $.ajax({url:'http://whatever.com/API/1', timeout:5000})
  .done(function(){ console.log('done', arguments) })
  .fail(function(){ console.log('fail', arguments) })
  .always(function(){ console.log('always', arguments) })
```

## Can abort the ajax call like a regular one:

    myAjax.abort();