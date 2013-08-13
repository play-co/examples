import ui.TextView as TextView;
import plugins.localnotify.localNotify as localNotify;
import ui.widget.ButtonView as ButtonView;
import device;

exports = Class(GC.Application, function () {
	this.makeButton = function(title, onUp) {
		return new ButtonView({
			superview: this.view,
			layout: "box",
			width: device.width * .8,
			height: device.height/10,
			centerX: true,
			images: {
				up: "resources/images/white1.png",
				down: "resources/images/white2.png",
				disabled: "resources/images/blue2.png"
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
			on: {
				up: bind(this, onUp)
			},
			title: title,
			text: {
				color: "#000044",
				size: 16,
				autoFontSize: false,
				autoSize: false
			}
		});
	}

	this.addIt = function(name, secondsAhead, body) {
		localNotify.add({
			name: name,
			number: 1,
			sound: true,
			action: "Respond",
			title: "Stuff Happened",
			body: body,
			delay: {
				seconds: secondsAhead
			},
			icon: "resources/images/custom.png",
			userDefined: {
				extraData: 27
			}
		});
	}

	this.initUI = function () {
		this.view.style.layout = "linear";
		this.view.style.direction = "vertical";

		this.set0 = this.makeButton("Set immediate", function() {
			this.addIt("set0", 0, "Fast notification test");
		});
		this.set10 = this.makeButton("Set 10 seconds ahead", function() {
			this.addIt("set10", 10, "10 second notification test");
		});
		this.set20 = this.makeButton("Set 20 seconds ahead", function() {
			this.addIt("set20", 20, "20 second notification test");
		});
		this.remove10 = this.makeButton("Remove 10 seconds ahead", function() {
			localNotify.remove("set10");
		});
		this.remove20 = this.makeButton("Remove 20 seconds ahead", function() {
			localNotify.remove("set20");
		});
		this.removeAll = this.makeButton("Remove all notifications", function() {
			localNotify.clear();
		});
		this.get20 = this.makeButton("Dump 20 second notify", function() {
			localNotify.get("set20", function(obj) {
				logger.log("{LocalNotify} 20 second event info:", JSON.stringify(obj, undefined, 4));
			});
		});
		this.list = this.makeButton("Dump all", function() {
			localNotify.list(function(objs) {
				logger.log("{LocalNotify} All scheduled events:", JSON.stringify(objs, undefined, 4));
			});
		});
	};
	
	this.launchUI = function () {};
});
