import ui.TextView as TextView;
import ui.widget.Toast as Toast;

exports = Class(GC.Application, function () {
	var posIndex = -1;
	var toastIndex = -1;
	var positions = [
		'top',
		'topright',
		'bottomright',
		'bottom',
		'bottomleft',
		'topleft'
	];
	var toastWords = [
		'something',
		'another thing',
		'good job',
		'you did it'
	];

	this.initUI = function () {
		var textview = new TextView({
			superview: this,
			layout: 'box',
			text: 'Toast?',
			color: 'white'
		});
		var toast = new Toast({
			superview: this,
			images: {
				top: 'resources/images/top.png',
				bottom: 'resources/images/bottom.png',
				topright: 'resources/images/right.png',
				bottomright: 'resources/images/right.png',
				topleft: 'resources/images/left.png',
				bottomleft: 'resources/images/left.png'
			}
		});
		textview.on('InputSelect', function() {
			posIndex = (posIndex + 1) % 6;
			toastIndex = (toastIndex + 1) % 4;
			toast.pop(toastWords[toastIndex], positions[posIndex]);
		});
	};
});
