## History

## v2.3.3 March 5, 2015
- Updated dependencies

## v2.3.2 November 7, 2013
- Updated dependencies
- Repackaged

## v2.3.1 October 2, 2013
- Updated dependencies

## v2.3.0 August 17, 2013
- Can now customise the preferred element, and the match element regex string to avoid conflicts with elements
	- Thanks to [ssayan](https://github.com/ssayan) for [issue #4](https://github.com/docpad/docpad-plugin-text/issues/4)

## v2.2.4 April 5, 2013
- Updated dependencies
- Repackaged

## v2.2.3 April 5, 2013
- Updated dependencies

## v2.2.2 April 1, 2013
- Updated dependencies

## v2.2.1 March 7, 2013
- Repackaged
- Updated dependencies
	-  `bal-util` ~1.15.3 to ~1.16.8
	-  `coffee-script` 1.4.x to ~1.4.0

## v2.2.0 January 5, 2012
- Added support for specifying the render attribute via the `t` template helper. Usage `@t('*markdown*', {render:'markdown'})`.
- Updated [bal-util](https://github.com/bevry/) dependency form v1.13 to v1.15
- Updated [coffee-script](http://coffeescript.org/) dev dependency form v1.3 to v1.4

## v2.1.3 August 19, 2012
- Updated [bal-util](https://github.com/balupton/bal-util) dependency from v1.12 to v1.13
	- Fixed an issue where `<title>` elements would be treated as text elements
		- Added tests against this
- Added `t` template helper

## v2.1.2 August 10, 2012
- Re-added markdown files to npm distribution as they are required for the npm website
- Updated for DocPad v6.5.4

## v2.1.1 July 8, 2012
- Fixed templateData not being accessible

## v2.1.0 July 8, 2012
- Rewrote for DocPad 6.1
- Now supports rendering for text elements

## v1.0.0 May 5, 2012
- Intial release. It works!