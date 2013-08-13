import ui.TextView as TextView;
import plugins.localnotify.localNotify as localNotify;

exports = Class(GC.Application, function () {

	this.addIt = function(name, secondsAhead, body) {
		localNotify.add({
			name: name,
			badgeIncrement: true,
			playSound: true,
			customSound: "custom.wav",
			action: "Respond",
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

		this.set0 = new TextView({
			superview: this.view,
			layout: "box",
			text: "Set immediate",
			color: "white"
		});
		this.set10 = new TextView({
			superview: this.view,
			layout: "box",
			text: "Set 10 seconds ahead",
			color: "white"
		});
		this.set20 = new TextView({
			superview: this.view,
			layout: "box",
			text: "Set 20 seconds ahead",
			color: "white"
		});
		this.remove10 = new TextView({
			superview: this.view,
			layout: "box",
			text: "Remove 10 second notify",
			color: "white"
		});
		this.remove20 = new TextView({
			superview: this.view,
			layout: "box",
			text: "Remove 20 second notify",
			color: "white"
		});
		this.removeAll = new TextView({
			superview: this.view,
			layout: "box",
			text: "Remove all notifications",
			color: "white"
		});
		this.get20 = new TextView({
			superview: this.view,
			layout: "box",
			text: "Dump 20 second notify",
			color: "white"
		});
		this.list = new TextView({
			superview: this.view,
			layout: "box",
			text: "Dump all notifications",
			color: "white"
		});

		this.set0.on('InputSelect', bind(this, function (evt, pt) {
			this.addIt("set0", 0, "Fast notification test");
		}));

		this.set10.on('InputSelect', bind(this, function (evt, pt) {
			this.addIt("set10", 10, "10 second notification test");
		}));

		this.set20.on('InputSelect', bind(this, function (evt, pt) {
			this.addIt("set20", 20, "20 second notification test");
		}));

		this.remove10.on('InputSelect', bind(this, function (evt, pt) {
			localNotify.remove("set10");
		}));

		this.remove20.on('InputSelect', bind(this, function (evt, pt) {
			localNotify.remove("set20");
		}));

		this.removeAll.on('InputSelect', bind(this, function (evt, pt) {
			localNotify.removeAll();
		}));

		this.get20.on('InputSelect', bind(this, function (evt, pt) {
			localNotify.get("set20", function(obj) {
				logger.log("{LocalNotify} 20 second event info:", JSON.stringify(obj, undefined, 4));
			});
		}));

		this.list.on('InputSelect', bind(this, function (evt, pt) {
			localNotify.list(function(objs) {
				logger.log("{LocalNotify} All scheduled events:", JSON.stringify(objs, undefined, 4));
			});
		}));
	};
	
	this.launchUI = function () {};
});
