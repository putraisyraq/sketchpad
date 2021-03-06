
$(document).ready(function() {
	drawUnits(16);
	gridSize();
});

var $units = $('.units');
var $unitsCode = $('<div class="units"></div>');

// Units boxes duplication
function drawUnits (number) {
	$('#wrapper').children().remove();
	var wrapperHeight = $('#wrapper').height();
	var wrapperWidth = $('#wrapper').width();
	var unitsHeight = wrapperHeight / number;
	var unitsWidth = wrapperWidth / number;
	
	for (var i = 0; i < number * number; i++) {
		$unitsCode.clone().appendTo($('#wrapper'));
	}

	$('.units').css({'height': unitsHeight + "px", 
					'width': unitsWidth + "px"});
	hover();
	reset();
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
		$units.removeClass('units_enter');
	});
}

// Setting Grid
function gridSize() {
	$('.gridBtn').on('click', function(){
		var gridInput = +$('.gridText').val();
		drawUnits(gridInput);
	});

}

