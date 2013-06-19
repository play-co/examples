import ui.TextView as TextView;
import plugins.geoloc.install;

exports = Class(GC.Application, function () {
	this.initUI = function () {
		this.view.style.layout = "linear";
		this.view.style.direction = "vertical";

		this._button1 = new ButtonView({
			superview: this.view,
			width: 200,
			height: 60,
			x: device.width / 2 - 100,
			y: 150,
			images: {
				up: "resources/images/blue1.png",
				down: "resources/images/blue2.png",
				disabled: "resources/images/white1.png"
			},
			scaleMethod: "9slice",
			sourceSlices: {
				horizontal: {left: 80, center: 116, right: 80},
				vertical: {top: 10, middle: 80, bottom: 10}
			},
			destSlices: {
				horizontal: {left: 40, right: 40},
				vertical: {top: 4, bottom: 4}
			},
			title: "Button",
			text: {
				color: "#000044",
				size: 16,
				autoFontSize: false,
				autoSize: false
			}
		});
	};
	
	this.launchUI = function () {};
});

