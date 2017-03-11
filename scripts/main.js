// Objective, make divs using js/jQuery 
// Find div parent.
// Make a div .row, this will contain all of the columns (.units)
// To duplicate, first the units will duplicate itself inline, \
// The rows will then duplicate the same amount downwards


$(document).ready(function() {

	var rows = 16;
	var units = 16;
	var $rows = $('.rows');
	var $units = $('.units');
	var color = $('.units').css('background-color');

// Units boxes duplication
	for (var i = 0; i < units; i++) {
		$units.clone().insertAfter($units);
	}
	for (var i = 0; i < rows; i++) {
		$rows.clone().insertAfter($rows);
	}

// Hovering class change
	$units.mouseenter(function(){
		$units.addClass("units_enter");
	});
	$units.mouseleave(function(){
		$units.removeClass("units_leave");
	});
});