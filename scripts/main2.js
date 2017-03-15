$(document).ready(function() {
	drawUnits();
	hover();
	reset();
	gridSize();
}

var units = 16;
var $units = $('<div class="units"></div>');

// Units boxes duplication
function drawUnits () {
	var wrapperHeight = $('#wrapper').height();
	var wrapperWidth = $('#wrapper').width();
	var unitsHeight = wrapperHeight / units;
	var unitsWidth = wrapperWidth / units;

	for (var i = 0; i < units * units; i++) {
		$('.box').append($units);
	}

}