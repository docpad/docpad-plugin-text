## History

- v2.2.0 January 5, 2012
	- Added support for specifying the render attribute via the `t` template helper. Usage `@t('*markdown*', {render:'markdown'})`.
	- Updated [bal-util](https://github.com/bevry/) dependency form v1.13 to v1.15
	- Updated [coffee-script](http://coffeescript.org/) dev dependency form v1.3 to v1.4

- v2.1.3 August 19, 2012
	- Updated [bal-util](https://github.com/balupton/bal-util) dependency from v1.12 to v1.13
		- Fixed an issue where `<title>` elements would be treated as text elements
			- Added tests against this
	- Added `t` template helper

- v2.1.2 August 10, 2012
	- Re-added markdown files to npm distribution as they are required for the npm website
	- Updated for DocPad v6.5.4

- v2.1.1 July 8, 2012
	- Fixed templateData not being accessible

- v2.1.0 July 8, 2012
	- Rewrote for DocPad 6.1
	- Now supports rendering for text elements

- v1.0.0 May 5, 2012
	- Intial release. It works!