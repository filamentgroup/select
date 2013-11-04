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
			var $s = $( this );

			if ( $s.css().opacity >= 0.001 ) {
				var $p = $s.parent().addClass( cl.select ),
					$l = $s.prev().addClass( cl.text ),				
					getSelectValue = function(){
						return $s[ 0 ].options[ $s[ 0 ].selectedIndex ].value;
					},
					$btn = $( "<span class='"+ cl.btn +"'>" + getSelectValue() + "</span>" );

				// btn and native select widths should match; using % so that both are stretchy if needed
				$btn.css({
					width: $s.width() / $p.width() * 100 + "%"
				});

				$s
					.before( $btn )
					.bind( "change", function(){
						$btn.html( getSelectValue() );
					});

			}
			else {
				$s.css( "opacity", "1" );
			}					
			
		});
	};

	// auto-init on enhance (which is called on domready)
	$( document ).bind( "enhance", function( e ){
		$( initSelector, e.target )[ pluginName ]();
	});

}( this, jQuery ));

