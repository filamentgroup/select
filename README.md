:warning: This project is archived and the repository is no longer maintained.

# select

[![Filament Group](http://filamentgroup.com/images/fg-logo-positive-sm-crop.png) ](http://www.filamentgroup.com/)

If you’re looking for the CSS only version of the select plugin, check out [`select-css`](https://github.com/filamentgroup/select-css).

Demo page here: http://filamentgroup.github.com/select/example.html

It's near impossible to style an HTML `select` element with CSS, so we've come up with a simple solution: make it transparent using `opacity` and absolutely position it over an element styled to look like the `select`.  That way the user can still interact with the native element (they'll see the operating system's standard dropdown menu), and enhanced markup/styles are kept to a minimum.

## Basic (required) markup

* a container element
* label text element
* the select

We like to use a `label` around a `span` for the label text followed by the `select`.  This ensures that the `label` is pointing to the correct form field, and neatly contains the text so that we can more easily modify the DOM with enhanced markup and styles.

	<label>
		<span>Shipping method:</span>
		<select name="demo">
			<option>Ground (7-9 days)</option>
			<option>Prioritized (3-5 days)</option>
			<option>2-day</option>
			<option>Next business day</option>
		</select>
	</label>

The basic version of the select is usuable on all devices that can render HTML.

## Required style

The `select` element and the appended button must share the same `width` and `font-size` so that the click/tap area of the `select` matches the visible button.

## Enhancements

When the script loads:
* it adds a class to the container element for scoping styles (`custom-select`)
* appends a "button" element (`span`) to the markup for styling. The script automatically updates this element's text to match the selected option.


