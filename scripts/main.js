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

// Units boxes duplication
	for (var i = 0; i < units; i++) {
		$units.clone().insertAfter($units);
	}
	for (var i = 0; i < rows; i++) {
		$rows.clone().insertAfter($rows);
	}

// Requerrying for $units and $rows
	$rows = $('.rows');
	$units = $('.units');

// Hovering class change
	$units.mouseenter(function(){
		$(this).addClass("units_enter");
	});
	$units.mouseleave(function(){
		$(this).addClass("units_leave");
	});
});

// Clicking Reset
		$units.click(function(){
		$units.removeClass("units_enter");
		$units.removeClass("units_enter");
	});