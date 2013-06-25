import ui.View as View;
import ui.GestureView as GestureView;

exports = Class(GC.Application, function () {
	this.initUI = function () {
		var gview = new GestureView({
			superview: this.view,
			layout: 'box',
			backgroundColor: 'blue'
		});
		gview.on('Pinch', bind(this, 'pinch'));
		gview.on('Rotate', bind(this, 'rotate'));
		gview.on('Drag', bind(this, 'drag'));
		gview.on('Swipe', bind(this, 'swipe'));
		this.demoView = new View({
			superview: this.view,
			width: 100,
			height: 100,
			x: 100,
			y: 200,
			canHandleEvents: false,
			blockEvents: true,
			backgroundColor: 'red'
		});
	};

	this.pinch = function (d) {
		this.demoView.style.scale = d;
	};

	this.rotate = function (r) {
		this.demoView.style.r = r;
	};

	this.drag = function(startEvent, endEvent, delta) {
		logger.log('drag', delta.x, delta.y);
		this.demoView.style.x += delta.x;
		this.demoView.style.y += delta.y;
	};

	this.swipe = function (dir) {
		logger.log('swipe', dir);
	};
});
