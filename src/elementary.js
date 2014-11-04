/* Elementary. A CSS workflow for mimicking element queries. [c]2014 @scottjehl, @filamentgroup. MIT license. */
(function( w ){

	w.elementary = function( options ){
		if( !( "querySelector" in w.document ) || !( "getComputedStyle" in w ) ){
			return;
		}
		var selector = options && options.selector || ".mod";
		var mods = w.document.querySelectorAll( selector );
		for( var m = 0; m < mods.length; m++ ){
			var mod = mods[ m ],
				breakpoints = w.getComputedStyle( mod, ":before" ).getPropertyValue( "content" ),
				widths = breakpoints.replace(/[^\d ]/g,"").split( " "),
				modWidth = mod.clientWidth,
				minWidths = [];

			for( var i = 0; i < widths.length; i++ ){
				if( w.parseFloat( widths[ i ] ) <= modWidth ){
					minWidths.push( widths[ i ] );
				}
			}
			mod.setAttribute( "data-minwidth", minWidths.join( " " ) );
		}
	};

})( this );