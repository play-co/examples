import ui.TextView as TextView;
import ui.widget.Toast as Toast;

exports = Class(GC.Application, function () {
	var posIndex = -1;
	var toastIndex = -1;
	var positions = [
		'bottom',
		'topright',
		'bottomright'
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
			debug: true,
			images: {
				bottom: 'resources/images/big.png',
				topright: 'resources/images/small.png',
				bottomright: 'resources/images/small.png'
			}
		});
		textview.on('InputSelect', function() {
			posIndex = (posIndex + 1) % 3;
			toastIndex = (toastIndex + 1) % 4;
			toast.pop(toastWords[toastIndex], positions[posIndex]);
		});
	};
});
