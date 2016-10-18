/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _index = __webpack_require__(1);

	_index.classe.init(); // yes
	console.log('app loaded');

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.classe = undefined;

	var _liste_eleve = __webpack_require__(2);

	var _eleve = __webpack_require__(3);

	var _eleve2 = _interopRequireDefault(_eleve);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var classe = {
		init: function init() {
			var eleve = [new _eleve2.default('Campan', 'Loan', 10), new _eleve2.default('Naon', 'Felix', 10), new _eleve2.default('Teboul', 'Clement', 10)];
			_liste_eleve.liste_eleve.init(eleve);
		}
	};
	exports.classe = classe;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var liste_eleve = {
		eleves: [],

		init: function init(eleves) {
			this.eleves = eleves;

			var $eleves = $('#class'),
			    $one = $eleves.children('li').detach();

			for (var i = 0; i < eleves.length; i++) {

				var li = $one.clone(),
				    eleve = this.eleves[i];

				eleve.id = i;

				li.attr('id', i);
				$eleves.append(li);
				$('#' + i + ' .nom').append('Nom: ' + eleve.nom);
				$('#' + i + ' .prenom').append('Prenom: ' + eleve.prenom);
				$('#' + i + ' .point').append(eleve.score);
				$('#' + i + ' img').attr('src', eleve.image);
			}
		}
	};

	exports.liste_eleve = liste_eleve;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Eleve =
	/**
	 * représente les différents élèves de la classe
	 * @param  {string} nom     Nom de l'élève
	 * @param  {string} prenom  Prenom de l'élève
	 * @param  {number} score   Score de l'élève
	 * @param  {string} image   Image de profil de l'élève
	 */
	function Eleve(nom, prenom, score, image) {
		_classCallCheck(this, Eleve);

		this.nom = nom;
		this.prenom = prenom;
		this.score = score;
		this.image = image || "img/default.jpg";
	};

	exports.default = Eleve;

/***/ }
/******/ ]);