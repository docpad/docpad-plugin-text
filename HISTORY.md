# History

## v2.5.0 2017 April 17
- Updated dependencies

## v2.4.0 2017 April 17
- Updated base files

## v2.3.3 2015 March 5
- Updated dependencies

## v2.3.2 2013 November 7
- Updated dependencies
- Repackaged

## v2.3.1 2013 October 2
- Updated dependencies

## v2.3.0 2013 August 17
- Can now customise the preferred element, and the match element regex string to avoid conflicts with elements
	- Thanks to [ssayan](https://github.com/ssayan) for [issue #4](https://github.com/docpad/docpad-plugin-text/issues/4)

## v2.2.4 2013 April 5
- Updated dependencies
- Repackaged

## v2.2.3 2013 April 5
- Updated dependencies

## v2.2.2 2013 April 1
- Updated dependencies

## v2.2.1 2013 March 7
- Repackaged
- Updated dependencies
	-  `bal-util` ~1.15.3 to ~1.16.8
	-  `coffee-script` 1.4.x to ~1.4.0

## v2.2.0 2012 January 5
- Added support for specifying the render attribute via the `t` template helper. Usage `@t('*markdown*', {render:'markdown'})`.
- Updated [bal-util](https://github.com/bevry/) dependency form v1.13 to v1.15
- Updated [coffee-script](http://coffeescript.org/) dev dependency form v1.3 to v1.4

## v2.1.3 2012 August 19
- Updated [bal-util](https://github.com/balupton/bal-util) dependency from v1.12 to v1.13
	- Fixed an issue where `<title>` elements would be treated as text elements
		- Added tests against this
- Added `t` template helper

## v2.1.2 2012 August 10
- Re-added markdown files to npm distribution as they are required for the npm website
- Updated for DocPad v6.5.4

## v2.1.1 2012 July 8
- Fixed templateData not being accessible

## v2.1.0 2012 July 8
- Rewrote for DocPad 6.1
- Now supports rendering for text elements

## v1.0.0 2012 May 5
- Intial release. It works!
