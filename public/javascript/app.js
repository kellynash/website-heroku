$(window).load(function() {

	$.getJSON( "/api/blogs", function( data ) {
  		var items = [];
  		$.each( data, function( key, val ) {
    		items.push( "<article class=\"panel panel-default\"><div class=\"panel-heading\"><h3>" + val.title
    			+ "</h3></div><div class=\"panel-body\">"
    			+ val.body + "</div></article>" );
  		});
  		$( "<div/>", {
    		"class": "my-new-list",
   			html: items.join( "" )
  		}).appendTo( "#blog-list" );
	});
});