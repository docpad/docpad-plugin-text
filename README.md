# Text Plugin for [DocPad](http://docpad.org)

<!-- BADGES/ -->

[![Build Status](http://img.shields.io/travis-ci/bevry/docpad-plugin-text.png?branch=master)](http://travis-ci.org/bevry/docpad-plugin-text "Check this project's build status on TravisCI")
[![NPM version](http://badge.fury.io/js/docpad-plugin-text.png)](https://npmjs.org/package/docpad-plugin-text "View this project on NPM")
[![Gittip donate button](http://img.shields.io/gittip/bevry.png)](https://www.gittip.com/bevry/ "Donate weekly to this project using Gittip")
[![Flattr donate button](http://img.shields.io/flattr/donate.png?color=yellow)](http://flattr.com/thing/344188/balupton-on-Flattr "Donate monthly to this project using Flattr")
[![PayPayl donate button](http://img.shields.io/paypal/donate.png?color=yellow)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QB8GQPZAH84N6 "Donate once-off to this project using Paypal")

<!-- /BADGES -->


This plugin allows you to render variables within `templateData` using text elements


## Install

``` bash
docpad install text
```


## Usage

If you have this in your `docpad.cson`

``` coffeescript
{
	templateData:
		firstname: 'Benjamin'
		lastname: 'Lupton'
		fullname: '<t>firstname</t> <t>lastname</t>'
		markdownExample: '<t render="markdown">this is so **awesome**</t>'
		markdownEcoExample: '<t render="html.md.eco">here is a random number: **<%- Math.random() %>**</t>'
}
```

Doing the following inside a document:

``` html
My creator's firstname is: <t>firstname</t>
My creator's lastname is: <t>lastname</t>
My creator's fullname is: <t>fullname</t>
The markdown example is: <t>markdownExample</t>
The markdown eco example is: <t>markdownEcoExample</t>
```

Will output:

``` html
My creator's firstname is: Benjamin
My creator's lastname is: Lupton
My creator's fullname is: Benjamin Lupton
The markdown example is: this is so <strong>awesome</strong>
The markdown eco example is: here is a random number: <strong>0.5123213213123</strong>
```

Which is incredibly useful for abstracting out common generic pieces of text from your templates and placing them inside your configuration files. A common use case for this is easy configurability of skeletons, as well as easier translation of your website.

If you are embedding a text block into a text block, it is best that you name your text block like so `<t:myName>blah</t:myName>` that way our parser won't get confused as easily :)

To use it with [coffeekup](http://coffeekup.org/) you'll do it like so `tag 'text', {render:"md"}, "your **markdown** content"`. [More info here.](https://github.com/bevry/docpad/issues/194#issuecomment-11363441).

Alternatively, you can use the `t` template helper like so `@t('*markdown*', {render:"markdown"})`


## Configuration

### `matchElementRegexString` defaults to `'t(?:ext)?'`
What regex string should we use to find text elements. The default value will find `<t>` and `<text>` elements. If you use SVG, you may want to change this just to `t` to avoid [conflicts with the `text` element.](https://github.com/docpad/docpad-plugin-text/issues/4)

### `preferredElement` defualts to `'t'`
What element should be preferred when we are inject text elements with the `t` template helper? The default value will inject `<t>` elements.


<!-- HISTORY/ -->

## History
[Discover the change history by heading on over to the `History.md` file.](https://github.com/bevry/docpad-plugin-text/blob/master/History.md#files)

<!-- /HISTORY -->


<!-- CONTRIBUTE/ -->

## Contribute

[Discover how you can contribute by heading on over to the `Contributing.md` file.](https://github.com/bevry/docpad-plugin-text/blob/master/Contributing.md#files)

<!-- /CONTRIBUTE -->


<!-- BACKERS/ -->

## Backers

### Maintainers

These amazing people are maintaining this project:

- Benjamin Lupton <b@lupton.cc> (https://github.com/balupton)

### Sponsors

No sponsors yet! Will you be the first?

[![Gittip donate button](http://img.shields.io/gittip/bevry.png)](https://www.gittip.com/bevry/ "Donate weekly to this project using Gittip")
[![Flattr donate button](http://img.shields.io/flattr/donate.png?color=yellow)](http://flattr.com/thing/344188/balupton-on-Flattr "Donate monthly to this project using Flattr")
[![PayPayl donate button](http://img.shields.io/paypal/donate.png?color=yellow)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QB8GQPZAH84N6 "Donate once-off to this project using Paypal")

### Contributors

No contributors yet! Will you be the first?
[Discover how you can contribute by heading on over to the `Contributing.md` file.](https://github.com/bevry/docpad-plugin-text/blob/master/Contributing.md#files)

<!-- /BACKERS -->


<!-- LICENSE/ -->

## License

Licensed under the incredibly [permissive](http://en.wikipedia.org/wiki/Permissive_free_software_licence) [MIT license](http://creativecommons.org/licenses/MIT/)

Copyright &copy; 2012+ Bevry Pty Ltd <us@bevry.me> (http://bevry.me)

<!-- /LICENSE -->


