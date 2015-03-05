# Text Plugin for [DocPad](http://docpad.org)

<!-- BADGES/ -->

[![Build Status](https://img.shields.io/travis/docpad/docpad-plugin-text/master.svg)](http://travis-ci.org/docpad/docpad-plugin-text "Check this project's build status on TravisCI")
[![NPM version](https://img.shields.io/npm/v/docpad-plugin-text.svg)](https://npmjs.org/package/docpad-plugin-text "View this project on NPM")
[![NPM downloads](https://img.shields.io/npm/dm/docpad-plugin-text.svg)](https://npmjs.org/package/docpad-plugin-text "View this project on NPM")
[![Dependency Status](https://img.shields.io/david/docpad/docpad-plugin-text.svg)](https://david-dm.org/docpad/docpad-plugin-text)
[![Dev Dependency Status](https://img.shields.io/david/dev/docpad/docpad-plugin-text.svg)](https://david-dm.org/docpad/docpad-plugin-text#info=devDependencies)<br/>
[![Gratipay donate button](https://img.shields.io/gratipay/docpad.svg)](https://www.gratipay.com/docpad/ "Donate weekly to this project using Gratipay")
[![Flattr donate button](https://img.shields.io/badge/flattr-donate-yellow.svg)](http://flattr.com/thing/344188/balupton-on-Flattr "Donate monthly to this project using Flattr")
[![PayPayl donate button](https://img.shields.io/badge/paypal-donate-yellow.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QB8GQPZAH84N6 "Donate once-off to this project using Paypal")
[![BitCoin donate button](https://img.shields.io/badge/bitcoin-donate-yellow.svg)](https://coinbase.com/checkouts/9ef59f5479eec1d97d63382c9ebcb93a "Donate once-off to this project using BitCoin")
[![Wishlist browse button](https://img.shields.io/badge/wishlist-donate-yellow.svg)](http://amzn.com/w/2F8TXKSNAFG4V "Buy an item on our wishlist for us")

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
[Discover the change history by heading on over to the `HISTORY.md` file.](https://github.com/docpad/docpad-plugin-text/blob/master/HISTORY.md#files)

<!-- /HISTORY -->


<!-- CONTRIBUTE/ -->

## Contribute

[Discover how you can contribute by heading on over to the `CONTRIBUTING.md` file.](https://github.com/docpad/docpad-plugin-text/blob/master/CONTRIBUTING.md#files)

<!-- /CONTRIBUTE -->


<!-- BACKERS/ -->

## Backers

### Maintainers

These amazing people are maintaining this project:

- Benjamin Lupton <b@lupton.cc> (https://github.com/balupton)

### Sponsors

No sponsors yet! Will you be the first?

[![Gratipay donate button](https://img.shields.io/gratipay/docpad.svg)](https://www.gratipay.com/docpad/ "Donate weekly to this project using Gratipay")
[![Flattr donate button](https://img.shields.io/badge/flattr-donate-yellow.svg)](http://flattr.com/thing/344188/balupton-on-Flattr "Donate monthly to this project using Flattr")
[![PayPayl donate button](https://img.shields.io/badge/paypal-donate-yellow.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QB8GQPZAH84N6 "Donate once-off to this project using Paypal")
[![BitCoin donate button](https://img.shields.io/badge/bitcoin-donate-yellow.svg)](https://coinbase.com/checkouts/9ef59f5479eec1d97d63382c9ebcb93a "Donate once-off to this project using BitCoin")
[![Wishlist browse button](https://img.shields.io/badge/wishlist-donate-yellow.svg)](http://amzn.com/w/2F8TXKSNAFG4V "Buy an item on our wishlist for us")

### Contributors

These amazing people have contributed code to this project:

- [Benjamin Lupton](https://github.com/balupton) <b@lupton.cc> — [view contributions](https://github.com/docpad/docpad-plugin-text/commits?author=balupton)
- [jeffbski](https://github.com/jeffbski) — [view contributions](https://github.com/docpad/docpad-plugin-text/commits?author=jeffbski)

[Become a contributor!](https://github.com/docpad/docpad-plugin-text/blob/master/CONTRIBUTING.md#files)

<!-- /BACKERS -->


<!-- LICENSE/ -->

## License

Unless stated otherwise all works are:

- Copyright &copy; 2012+ Bevry Pty Ltd <us@bevry.me> (http://bevry.me)

and licensed under:

- The incredibly [permissive](http://en.wikipedia.org/wiki/Permissive_free_software_licence) [MIT License](http://opensource.org/licenses/mit-license.php)

<!-- /LICENSE -->


