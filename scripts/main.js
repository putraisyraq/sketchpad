
$(document).ready(function() {
	drawUnits();
	hover();
	reset();
	gridSize();
});

var units = 16;
var $units = $('.units');
var $unitsCode = $('<div class="units"></div>');

// Units boxes duplication
function drawUnits () {
	var wrapperHeight = $('#wrapper').height();
	var wrapperWidth = $('#wrapper').width();
	var unitsHeight = wrapperHeight / units;
	var unitsWidth = wrapperWidth / units;
	
	for (var i = 0; i < units * units; i++) {
		$unitsCode.clone().appendTo($('#wrapper'));
	}

	$('.units').css({'height': unitsHeight + "px", 
					'width': unitsWidth + "px"});
}

// Hover
function hover(){
	$units = $('.units');
	$units.mouseover(function(){
		$(this).addClass('units_enter');
	});
}

// Clicking Reset
function reset(){
		$('.resetBtn').click(function(){
		$units.removeClass('units_leave');
		$units.removeClass('units_enter');
	});
}

// Setting Grid
function gridSize() {
	$('.gridBtn').on('click', function(){
		var gridInput = +$('.gridText').val();
		units = parseInt(gridInput);
		console.log(units);
		$units.remove();
		drawUnits();
		reset();
	});

}

