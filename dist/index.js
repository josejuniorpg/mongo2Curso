"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _app = _interopRequireDefault(require("./app"));

require("./database");

var _config = require("./config");

//import './config';
_app["default"].listen(_config.PORT); //Aqui le digo que escuche que quiero correr codigo.


console.log('server listening on port'.green, _config.PORT); //!Este es codigo de aranque!