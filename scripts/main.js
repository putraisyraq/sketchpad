$(document).ready(function() {

	var rows = 16;
	var units = 16;
	var $rows = $('.rows');
	var $units = $('.units');

// Change units

	$('.pixels').keyup(function(){
		rows = +$("input[name=pixels]").val();
		units = +$("input[name=pixels]").val();
		console.log(rows)
	})

// Units boxes duplication
	for (var i = 0; i < units -1; i++) {
		$units.clone().insertAfter($units);
	}
	for (var i = 0; i < rows -1; i++) {
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

// Clicking Reset
		$(':button').click(function(){
		$units.removeClass("units_leave");
		$units.removeClass("units_enter");
	});

});