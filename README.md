# parrot-module-ajax <a href="http://bower.io/search/?q=parrot-module-ajax"><img src="http://benschwarz.github.io/bower-badges/badge@2x.png" width="130" height="30"></a>

[![Dependency status](http://img.shields.io/david/parrotjs/parrot-module-ajax.svg?style=flat)](https://david-dm.org/parrotjs/parrot-module-ajax)
[![Dev Dependencies Status](http://img.shields.io/david/dev/parrotjs/parrot-module-ajax.svg?style=flat)](https://david-dm.org/parrotjs/parrot-module-ajax#info=devDependencies)

> Make easy do AJAX petitions with different backend. Using with URL module for better experience.

## Browser Compatibility

[![browser support](https://ci.testling.com/parrotjs/parrot-module-ajax.png)](https://ci.testling.com/parrotjs/parrotjs)

## Install

```bash
npm install myModule --save
```

## Get Started

This module makes easier to use an AJAX handler.

## Documentation

### parrot

#### .ajax(&lt;Object&gt; or &lt;String&gt;)

Returns the result of AJAX request.

The default options for any ajax request are:

```coffee
method       : 'get'
send         : {}
headers      : {}
async        : true
datatype     : 'json'
content_type : 'application/x-www-form-urlencoded'
```

**Using URL Objects**

There are different ways to provide the URL of the AJAX request, but the most common pattern is to give a `parrot.url` object:

```coffee
parrot.url.ajax parrot.url.login(), (err, result) ->
```

If you want to write less code:

```coffee
parrot.url.ajax 'login', (err, result) ->
```

You may need to modify the settings of the URL Object before the ajax request:

```coffee
parrot.url.ajax parrot.url.login(send:user), (err, result) ->
```

A short version could be:

```coffee
parrot.url.ajax 'login', send:user, (err, result) ->
```

**Using simple URL's**

Also, you can provide a URL that you are not registering but that follows a `parrot.url` similar interface (extra field for the `url` because it is not calculated based on the `parrot.environment`).

```coffee
object = url: 'http://echo.jsontest.com/key/value/one/two', method: 'GET'
parrot.url.ajax object, (err, result) ->
```

Is it possible a shorter version of this piece of code? Of course!

```coffee
parrot.url.ajax 'http://echo.jsontest.com/key/value/one/two', (err, result) ->
```

There is no problem if you need to specify another options of the AJAX or as URL Object:

```coffee
parrot.url.ajax 'http://echo.jsontest.com/key/value/one/two', async:false, send:user (err, result) ->
```

## License

MIT © ParrotJS
