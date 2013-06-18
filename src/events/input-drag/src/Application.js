import ui.TextView as TextView;
import device;
import animate;

exports = Class(GC.Application, function () {
	this.makeRotor = function(x, y, r, dr, bgColor) {
		var textview = new TextView({
			superview: this.view,
			text: "DRAG ME",
			layout: "box", // It's a box
			color: "white",
			backgroundColor: bgColor, // Make edges clearly visible
			width: device.width/3, // Scale with screen
			height: device.height/3,
			x: x, // Position box to center initially
			y: y,
			r: r, // Some rotation (in radians) to add a little twist
			centerAnchor: true // Center rotation anchor
		});

		textview.on("InputStart", bind(textview, function (evt) {
			this.startDrag({
				inputStartEvt: evt,
				radius: 10 
			});
		}));

		// Note: 'this' is automatically bound for you to the view..

		textview.on("DragStart", function (dragEvt) {
			// You can just subtract this.style.width/2 and this.style.height/2
			// if you want to drag by the center of the object.  But this is
			// way cooler!

			this.dragOffset = {
				x: dragEvt.srcPt.x - this.style.x,
				y: dragEvt.srcPt.y - this.style.y
			};
		});

		textview.on("Drag", function (startEvt, dragEvt, delta) {
			this.style.x = dragEvt.srcPt.x - this.dragOffset.x;
			this.style.y = dragEvt.srcPt.y - this.dragOffset.y;
		});

		textview.on("DragStop", function (startEvt, dragEvt) {
			this.style.x = dragEvt.srcPt.x - this.dragOffset.x;
			this.style.y = dragEvt.srcPt.y - this.dragOffset.y;
		});

		// Fancy: It rotates too! (Why not?)
		textview.rotate = function() {
			animate(textview).now({
				dr: dr
			}, 1000, animate.linear).then(bind(this, 'rotate'));
		};

		textview.rotate();
	}

	this.initUI = function () {
		// Make a bunch of rotors to drag around
		this.makeRotor(0, 0, 1, 2, 'red');
		this.makeRotor(device.width/3, device.height/3, 2, 1, 'blue');
		this.makeRotor(2*device.width/3, device.height/3, 3, -1, 'green');
		this.makeRotor(device.width/3, 2*device.height/3, 4, 0.5, 'yellow');
		this.makeRotor(2*device.width/3, 2*device.height/3, 5, -0.5, 'orange');
	};
	
	this.launchUI = function () {};
});

