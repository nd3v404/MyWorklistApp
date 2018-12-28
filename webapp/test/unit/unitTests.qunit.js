/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"evia/nd3v/myapp/MyWorklistApp/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
