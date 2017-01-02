/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _createjs = __webpack_require__(1);
	
	var _createjs2 = _interopRequireDefault(_createjs);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Game = function () {
	  function Game() {
	    _classCallCheck(this, Game);
	
	    this.stage = new _createjs2.default.Stage('mainCanvas');
	    this.body = document.getElementById('mainCanvas');
	    this.rectangle = new _createjs2.default.Shape();
	    this.player = new _createjs2.default.Shape();
	    this.ground = new _createjs2.default.Shape();
	    this.playerGoing = 'nowhere';
	    this.paused = false;
	    this.obstacles = [];
	    this.score = 0;
	    this.rectangle.graphics.beginFill('rgba(179, 0, 53, 0.83)').drawRect(0, 0, this.body.width, this.body.height);
	    this.rectangle.x = 0;
	    this.rectangle.y = 0;
	    this.paused = false;
	
	    this.player.graphics.beginFill('rgb(0, 186, 255)').drawRect(0, 0, 20, 20);
	    this.player.x = 40;
	    this.player.y = 100;
	    this.player.setBounds(0, 0, 20, 20);
	
	    this.ground.graphics.beginFill('rgb(72, 99, 108)').drawRect(0, 0, this.body.width + 4, 115);
	    this.ground.x = 0;
	    this.ground.y = 120;
	
	    this.stage.addChild(this.rectangle);
	    this.stage.addChild(this.player);
	    this.stage.addChild(this.ground);
	    this.stage.update();
	
	    this.tickHandler = this.tickHandler.bind(this);
	    this.keyPress = this.keyPress.bind(this);
	    this.playerJump = this.playerJump.bind(this);
	    this.moveObjects = this.moveObjects.bind(this);
	    this.resetHandler = this.resetHandler.bind(this);
	    this.resetHandler = this.resetHandler.bind(this);
	    this.pauseHandler = this.pauseHandler.bind(this);
	    this.moveObstacles = this.moveObstacles.bind(this);
	    this.updateScore = this.updateScore.bind(this);
	  }
	
	  _createClass(Game, [{
	    key: 'resetHandler',
	    value: function resetHandler() {}
	  }, {
	    key: 'pauseHandler',
	    value: function pauseHandler() {}
	  }, {
	    key: 'start',
	    value: function start() {
	      document.onkeydown = this.keyPress;
	      _createjs2.default.Ticker.timingMode = _createjs2.default.Ticker.RAF_SYNCHED;
	      _createjs2.default.Ticker.setFPS(60);
	      _createjs2.default.Ticker.on('tick', this.tickHandler);
	    }
	  }, {
	    key: 'playerJump',
	    value: function playerJump() {
	      if (this.playerGoing == 'nowhere') {
	        this.playerGoing = 'up';
	      }
	    }
	  }, {
	    key: 'moveObjects',
	    value: function moveObjects() {
	      if (this.playerGoing == 'up') {
	        if (this.player.y > 60) {
	          this.player.y -= 1;
	        } else {
	          this.playerGoing = 'down';
	        }
	      } else {
	        if (this.player.y == 100) {
	          this.playerGoing = 'nowhere';
	        } else {
	          this.player.y += 1;
	        }
	      }
	      if (_createjs2.default.Ticker.getTicks() % 100 == 0) {
	        this.generateObstacle();
	      }
	      this.moveObstacles();
	    }
	  }, {
	    key: 'moveObstacles',
	    value: function moveObstacles() {
	      var that = this;
	      this.obstacles.forEach(function (obstacle) {
	        obstacle.x -= 1;
	        if (obstacle.x > 30 && obstacle.x < 60) {
	          if (that.player.y >= 100) {
	            debugger;
	            console.log('hit');
	          }
	        }
	
	        if (obstacle.x == -10) {
	          that.obstacles.unshift;
	          that.score += 1;
	        }
	      });
	    }
	  }, {
	    key: 'generateObstacle',
	    value: function generateObstacle() {
	      var x = new _createjs2.default.Shape();
	      x.graphics.beginFill('black').drawRect(0, 0, 10, 10);
	      x.x = this.body.width;
	      x.y = 110;
	      x.setBounds(0, 0, 10, 10);
	      this.obstacles.push(x);
	      this.stage.addChild(x);
	      this.stage.update();
	    }
	  }, {
	    key: 'pauseHandler',
	    value: function pauseHandler() {
	      this.paused = !this.paused;
	    }
	  }, {
	    key: 'keyPress',
	    value: function keyPress(e) {
	      var jump = 32,
	          pause = 80,
	          reset = 82;
	      switch (e.keyCode) {
	        case pause:
	          this.pauseHandler();
	          break;
	
	        case jump:
	          this.playerJump();
	          break;
	
	        case reset:
	          this.resetHandler();
	          break;
	      }
	    }
	  }, {
	    key: 'updateScore',
	    value: function updateScore() {
	      var board = document.getElementById('score-indicator');
	      board.innerHTML = this.score;
	    }
	  }, {
	    key: 'tickHandler',
	    value: function tickHandler() {
	      this.updateScore();
	      if (!this.paused) {
	        this.moveObjects();
	      }
	      this.stage.update();
	    }
	  }]);
	
	  return Game;
	}();
	
	document.addEventListener('DOMContentLoaded', function () {
	  var game = new Game();
	  game.start();
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = createjs;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map