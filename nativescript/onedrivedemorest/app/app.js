"use strict";
var applicationModule = require('application');
var navigationModule = require('./shared/navigation');
applicationModule.mainModule = navigationModule.loginPage();
applicationModule.start();
//# sourceMappingURL=app.js.map