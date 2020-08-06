/* eslint-disable max-params */
/* eslint-disable class-methods-use-this */
// @ts-nocheck
'use strict'

const balUtil = require('bal-util')
const { TaskGroup } = require('taskgroup')

// Export Plugin
module.exports = function (BasePlugin) {
	// Define Plugin
	return class TextPlugin extends BasePlugin {
		// Plugin name
		get name() {
			return 'text'
		}

		// Plugin config
		get initialConfig() {
			return {
				matchElementRegexString: 't(?:ext)?',
				preferredElement: 't',
			}
		}

		// Get the text
		getText(opts) {
			// Prepare
			// eslint-disable-next-line no-unused-vars
			const { source, store } = opts
			let key = source || ''
			key = 'store.' + key.replace(/[#{(\n]/g, '').trim()
			let result = source

			// Fetch the value
			try {
				// eslint-disable-next-line no-eval
				const e = eval(key)
				if (e != null) {
					result = e
				}
			} catch (err) {}

			// Return
			return result
		}

		// Populate text
		// next(err,result)
		populateText(opts, next) {
			// Prepare
			const me = this
			const { docpad } = this
			const config = this.getConfig()
			const { source, templateData, file } = opts

			// Prepare the replace element
			function replaceElementCallback(
				outerHTML,
				elementName,
				attributes,
				innerHTML,
				replaceElementCompleteCallback
			) {
				// Grab the value
				let result = me.getText({ source: innerHTML, store: templateData })

				// Prepare replace element tasks
				const replaceElementTasks = new TaskGroup().done(function (err) {
					return replaceElementCompleteCallback(err, result)
				})

				// Facilate deep elements
				replaceElementTasks.addTask(function (complete) {
					// Populate the value
					me.populateText({ file, templateData, source: result }, function (
						err,
						populateTextResult
					) {
						if (err) return complete(err)
						result = populateTextResult
						return complete()
					})
				})

				// If we have a type attribute, then perform a render
				const extensions =
					balUtil.getAttribute(attributes, 'type') ||
					balUtil.getAttribute(attributes, 'render') ||
					''
				if (extensions) {
					// Render the text as a document with extensions
					replaceElementTasks.addTask(function (complete) {
						// Generate filename
						let filename = 'docpad-text-plugin'
						const parentExtension =
							file.get('outExtension') || file.get('extensionRendered') // b/c
						const parentFilename = file.get('filename')
						if (
							extensions.includes('.') === false &&
							(parentExtension || parentFilename)
						) {
							filename += '.' + (parentExtension || parentFilename)
						}
						filename += '.' + extensions

						// Prepare options
						const renderTextOpts = {
							filename,
							templateData,
							renderSingleExtensions: 'auto',
							actions: ['renderExtensions'],
						}

						// Render text with options and apply the result
						docpad.renderText(result, renderTextOpts, function (
							err,
							renderTextResult,
							document
						) {
							if (err) return complete(err)
							result = renderTextResult
							return complete()
						})
					})
				}

				// Run tasks in serial
				replaceElementTasks.run()
			}

			// Render the elements
			balUtil.replaceElementAsync(
				source,
				config.matchElementRegexString,
				replaceElementCallback,
				next
			)
		}

		// Extend the Template Data
		extendTemplateData(opts) {
			// Prepare
			const config = this.getConfig()
			const { templateData } = opts

			// Apply
			templateData.t = function (str, opts) {
				const id = Math.random().toString().replace('.', '')
				let attrs = ''
				if (opts.render) {
					opts.render = opts.render.toString().replace(/^['"]+|['"]+$/g, '')
					attrs += ` render="${opts.render}"`
				}
				const text = `<${config.preferredElement}:${id}${attrs}>${str}</${config.preferredElement}:${id}>`
				return text
			}
		}

		// Render the document
		renderDocument(opts, next) {
			// Prepare
			const me = this
			const { templateData, file } = opts

			// Only run on text content
			if (file.isText()) {
				// Populate the file content
				me.populateText({ file, templateData, source: opts.content }, function (
					err,
					result
				) {
					if (err) return next(err)
					opts.content = result
					return next()
				})
			} else {
				return next()
			}
		}
	}
}
