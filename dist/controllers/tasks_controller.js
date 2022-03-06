"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toogleTask = exports.renderTasks = exports.renderTaskEdit = exports.editTask = exports.deleteTask = exports.createTask = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Task = _interopRequireDefault(require("../models/Task"));

var renderTasks = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var tasks;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _Task["default"].find().lean();

          case 2:
            tasks = _context.sent;
            //Busca objetos de la coleccion
            //le agregue la propiedad extra.  Para que devuelva objetos tipicos. Es lean
            //Antes de que se muestre la pagina
            //Es consulta asique es asincrono
            //console.log(tasks);
            res.render('index.hbs', {
              tasks: tasks
            }); //
            //Le paso el objeto con la propiedades tareas. Y con valor de tareas, mando las que obtengo de la base de datos

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function renderTasks(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.renderTasks = renderTasks;

var createTask = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var task;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            //console.log(req.body) //recibo el objeto
            task = (0, _Task["default"])(req.body); //Aqui recibo el modelo task. Recibo los datos que se envian
            //console.log(task)
            //const taskSaved= await task.save() //Save permite anñadir a mongodb
            //sabe es asicrono. Asique lleva await
            //al guardarse debuelve el onjeto que se guarda en mongo db.

            _context2.next = 4;
            return task.save();

          case 4:
            //Save permite anñadir a mongodb
            res.redirect("/"); //Con esto digo que me redireccione a la pagina proncopal
            //console.log(taskSaved);
            //res.send("add task")

            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            console.error(_context2.t0);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));

  return function createTask(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.createTask = createTask;

var renderTaskEdit = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var task;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _Task["default"].findById(req.params.id).lean();

          case 3:
            task = _context3.sent;
            //Esto es una consulta del modelo de tareas.
            //Es objeto de mongo asique lo trasformo a java
            //console.log(req.params.id)
            res.render('edit', {
              task: task
            });
            _context3.next = 10;
            break;

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            console.error(_context3.t0);

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 7]]);
  }));

  return function renderTaskEdit(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.renderTaskEdit = renderTaskEdit;

var editTask = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            //Edit recibe de parametro el id del objeto. Un parametro es algo que puede cambiar
            id = req.params.id;
            _context4.next = 3;
            return _Task["default"].findByIdAndUpdate(id, req.body);

          case 3:
            //llamdo el id de parametros, y llamo el body, para actualizar
            //como no quiero usar la tarea solo dejo el await
            console.log(req.body);
            console.log(req.params);
            res.redirect("/");

          case 6:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function editTask(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.editTask = editTask;

var deleteTask = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            //Este id esta porque es el nombre que le asigno al parametro
            id = req.params.id; //Aqui digo que lea el id de req.para

            _context5.next = 3;
            return _Task["default"].findByIdAndDelete(id);

          case 3:
            res.redirect("/");

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function deleteTask(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteTask = deleteTask;

var toogleTask = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var id, task;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = req.params.id;
            _context6.next = 3;
            return _Task["default"].findById(id);

          case 3:
            task = _context6.sent;
            task.done = !task.done; //Esto cambia true por false y viceversa

            _context6.next = 7;
            return task.save();

          case 7:
            //console.log(task);
            res.redirect('/');

          case 8:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function toogleTask(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.toogleTask = toogleTask;