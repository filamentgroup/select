/*
 * select plugin
 *
 * Copyright (c) 2013 Filament Group, Inc.
 * Licensed under MIT
 */

(function( w, $ ) {

	var pluginName = "select",
		initSelector = "select",
		omitSelector = "",
		cl = {
			select: "custom-" + pluginName,
			text: "label-text",
			btn: "btn-" + pluginName
		};

	$.fn[ pluginName ] = function(){
		
		return this.each(function(){
			var $s = $( this ),
				$p = $s.parent().addClass( cl.select );

			/* check if opacity value matches what's in the CSS to limit the enhancement to browsers that support opacity in the same way (otherwise the select may only partially enhance and be unusable) */
			if ( $s.css( "opacity" ) >= 0.001 ) { 
				var $l = $s.prev().addClass( cl.text ),				
					getSelectValue = function(){
						return $s[ 0 ].options[ $s[ 0 ].selectedIndex ].value;
					},
					$btn = $( "<span class='"+ cl.btn +"'>" + getSelectValue() + "</span>" );

				$s
					.before( $btn )
					.bind( "change", function(){
						$btn.html( getSelectValue() );
					})
					.bind( "focus", function(){
						$btn.addClass( "btn-focus" );
					})
					.bind( "blur", function(){
						$btn.removeClass( "btn-focus" );
					});

			}
			else {
				$s.css( "opacity", "1" );
			};			
		});
	};

	// auto-init
	$(function(){
		$( initSelector )[ pluginName ]();
	});

}( this, jQuery ));

