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

	var _index = __webpack_require__(2);

	_index.classe.init(); // yes
	console.log('app loaded');

/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.classe = undefined;

	var _liste_eleve = __webpack_require__(3);

	var _eleve = __webpack_require__(4);

	var _eleve2 = _interopRequireDefault(_eleve);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var classe = {
		init: function init() {
			var eleve = [new _eleve2.default('Alves', 'Joel', 10, 'https://avatars.slack-edge.com/2016-10-06/88162950964_00f73475f63d0f5c30c1_512.jpg'), new _eleve2.default('Campan', 'Loan', 10, 'https://avatars.slack-edge.com/2016-10-18/92775451776_be0301deeac276b996b0_512.png'), new _eleve2.default('Cqn', 'Axel', 10, 'https://avatars.slack-edge.com/2016-10-19/93612329107_db2ee3bbf8bad082a346_512.jpg'), new _eleve2.default('Dussol', 'Clement', 10, 'https://avatars.slack-edge.com/2016-10-04/87094202321_3518be3bda81a857c0b8_72.png'), new _eleve2.default('Gastineau', 'Julien', 10, 'https://avatars.slack-edge.com/2016-10-18/92723059619_939be57f132a6ae4c53f_512.jpg'), new _eleve2.default('Luhaire', 'Bastien', 10, 'https://avatars.slack-edge.com/2016-10-18/92706072978_40587710bc76a24767f4_192.jpg'), new _eleve2.default('Mouton', 'Victor', 10, 'https://avatars.slack-edge.com/2016-10-05/87655982912_65ebf13e858ebff90109_512.jpg'), new _eleve2.default('Nahon', 'Felix', 10, 'https://avatars.slack-edge.com/2016-10-18/92775001280_26eaae08b2bcad50cf3a_512.jpg'), new _eleve2.default('Teboul', 'Clement', 10, 'https://avatars.slack-edge.com/2016-10-18/92730652738_61e3d620eaf3035cfa53_512.jpg'), new _eleve2.default('Saigot', 'Pierre', 10, 'https://avatars.slack-edge.com/2016-10-04/87018456818_cca56ac88ee10569a934_512.png'), new _eleve2.default('Vendeville', 'Mattieu', 10, 'https://avatars.slack-edge.com/2016-10-18/92690535158_7210c0a0fa41bf1125eb_192.jpg'), new _eleve2.default('Xiong', 'Stan', 10, 'https://avatars.slack-edge.com/2016-10-18/92786824401_e7d2e38c61afdbdcf797_512.jpg')];
			_liste_eleve.liste_eleve.init(eleve);
		}
	};
	exports.classe = classe;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var liste_eleve = {
		eleves: [],
		selected: null,

		dive: $('#on').children('li').detach(),

		get_selected: function get_selected() {
			return this.selected;
		},

		select_student: function select_student(eleve) {
			this.selected = eleve;
			$('#class li').removeClass('selected').eq(eleve.id).addClass('selected');
		},
		init: function init(eleves) {
			this.eleves = eleves;
			var on = this.dive.clone();
			$('#on').append(on);
			$('#on li').empty();

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
			var self = this;
			$('#class').on('mousedown', 'li', function () {
				var two = liste_eleve.dive.clone();
				$('#on li').empty();
				$('#on').append(two);
				var index = $('#class li').index(this);
				self.select_student(self.eleves[index]);
				$('#profil img').attr('src', self.eleves[index].image);
				$('#on .nom').append(self.eleves[index].nom);
				$('#on .prenom').append(self.eleves[index].prenom);
				$('#on .point').append(self.eleves[index].score);
				$('#on #nb-p').append(self.eleves[index].presense);
				$('#on #nb-r').append(self.eleves[index].retard);
				$('#on #nb-a').append(self.eleves[index].absent);
				$('#on #nb-oral').append(self.eleves[index].oral);
				$('#on #nb-particip').append(self.eleves[index].participation);
				self.bouton();
			});
		},
		bouton: function bouton(eleves) {
			$('#oral-plus').on('mousedown', function () {
				liste_eleve.get_selected().oral += 1;
				liste_eleve.get_selected().score += 20;
				$('#on .point').empty();
				$('#on #nb-oral').empty();
				$('#on .point').append(liste_eleve.get_selected().score);
				$('#on #nb-oral').append(liste_eleve.get_selected().oral);
				$('#' + liste_eleve.get_selected().id + ' .point').empty();
				$('#' + liste_eleve.get_selected().id + ' .point').append(liste_eleve.get_selected().score);
			});
			$('#oral-moins').on('mousedown', function () {
				if (liste_eleve.get_selected().oral > 0) {
					liste_eleve.get_selected().oral -= 1;
					liste_eleve.get_selected().score -= 20;
					$('#on .point').empty();
					$('#on #nb-oral').empty();
					$('#on .point').append(liste_eleve.get_selected().score);
					$('#on #nb-oral').append(liste_eleve.get_selected().oral);
					$('#' + liste_eleve.get_selected().id + ' .point').empty();
					$('#' + liste_eleve.get_selected().id + ' .point').append(liste_eleve.get_selected().score);
				}
			});
			$('#part-plus').on('mousedown', function () {
				liste_eleve.get_selected().participation += 1;
				liste_eleve.get_selected().score += 15;
				$('#on .point').empty();
				$('#on #nb-particip').empty();
				$('#on .point').append(liste_eleve.get_selected().score);
				$('#on #nb-particip').append(liste_eleve.get_selected().participation);
				$('#' + liste_eleve.get_selected().id + ' .point').empty();
				$('#' + liste_eleve.get_selected().id + ' .point').append(liste_eleve.get_selected().score);
			});
			$('#part-moins').on('mousedown', function () {
				if (liste_eleve.get_selected().participation > 0) {
					liste_eleve.get_selected().participation -= 1;
					liste_eleve.get_selected().score -= 15;
					$('#on .point').empty();
					$('#on #nb-particip').empty();
					$('#on .point').append(liste_eleve.get_selected().score);
					$('#on #nb-particip').append(liste_eleve.get_selected().participation);
					$('#' + liste_eleve.get_selected().id + ' .point').empty();
					$('#' + liste_eleve.get_selected().id + ' .point').append(liste_eleve.get_selected().score);
				}
			});
			$('#on #add-p').on('mousedown', function () {
				liste_eleve.get_selected().presense += 1;
				liste_eleve.get_selected().score += 10;
				$('#on .point').empty();
				$('#on .point').append(liste_eleve.get_selected().score);
				$('#on #nb-p').empty();
				$('#on #nb-p').append(liste_eleve.get_selected().presense);
				$('#' + liste_eleve.get_selected().id + ' .point').empty();
				$('#' + liste_eleve.get_selected().id + ' .point').append(liste_eleve.get_selected().score);
				$('#' + liste_eleve.get_selected().id + ' .addp').css('background-color', '#333');
			});
			$('#on #add-r').on('mousedown', function () {
				liste_eleve.get_selected().retard += 1;
				liste_eleve.get_selected().score -= 5;
				$('#on .point').empty();
				$('#on .point').append(liste_eleve.get_selected().score);
				$('#on #nb-r').empty();
				$('#on #nb-r').append(liste_eleve.get_selected().retard);
				$('#' + liste_eleve.get_selected().id + ' .point').empty();
				$('#' + liste_eleve.get_selected().id + ' .point').append(liste_eleve.get_selected().score);
				$('#' + liste_eleve.get_selected().id + ' .addr').css('background-color', '#333');
			});
			$('#on #add-a').on('mousedown', function () {
				liste_eleve.get_selected().absent += 1;
				liste_eleve.get_selected().score -= 10;
				$('#on .point').empty();
				$('#on .point').append(liste_eleve.get_selected().score);
				$('#on #nb-a').empty();
				$('#on #nb-a').append(liste_eleve.get_selected().absent);
				$('#' + liste_eleve.get_selected().id + ' .point').empty();
				$('#' + liste_eleve.get_selected().id + ' .point').append(liste_eleve.get_selected().score);
				$('#' + liste_eleve.get_selected().id + ' .adda').css('background-color', '#333');
			});
			$('#on #cancel-p').on('mousedown', function () {
				if (liste_eleve.get_selected().presense > 0) {
					liste_eleve.get_selected().presense -= 1;
					liste_eleve.get_selected().score -= 10;
					$('#on .point').empty();
					$('#on .point').append(liste_eleve.get_selected().score);
					$('#on #nb-p').empty();
					$('#on #nb-p').append(liste_eleve.get_selected().presense);
					$('#' + liste_eleve.get_selected().id + ' .point').empty();
					$('#' + liste_eleve.get_selected().id + ' .point').append(liste_eleve.get_selected().score);
					$('#' + liste_eleve.get_selected().id + ' .addp').css('background-color', '#111');
				}
			});
			$('#on #cancel-r').on('mousedown', function () {
				if (liste_eleve.get_selected().retard > 0) {
					liste_eleve.get_selected().retard -= 1;
					liste_eleve.get_selected().score += 5;
					$('#on .point').empty();
					$('#on .point').append(liste_eleve.get_selected().score);
					$('#on #nb-r').empty();
					$('#on #nb-r').append(liste_eleve.get_selected().retard);
					$('#' + liste_eleve.get_selected().id + ' .point').empty();
					$('#' + liste_eleve.get_selected().id + ' .point').append(liste_eleve.get_selected().score);
					$('#' + liste_eleve.get_selected().id + ' .addr').css('background-color', '#111');
				}
			});
			$('#on #cancel-a').on('mousedown', function () {
				if (liste_eleve.get_selected().absent > 0) {
					liste_eleve.get_selected().absent -= 1;
					liste_eleve.get_selected().score += 10;
					$('#on .point').empty();
					$('#on .point').append(liste_eleve.get_selected().score);
					$('#on #nb-a').empty();
					$('#on #nb-a').append(liste_eleve.get_selected().absent);
					$('#' + liste_eleve.get_selected().id + ' .point').empty();
					$('#' + liste_eleve.get_selected().id + ' .point').append(liste_eleve.get_selected().score);
					$('#' + liste_eleve.get_selected().id + ' .adda').css('background-color', '#111');
				}
			});
		}
	};

	exports.liste_eleve = liste_eleve;

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Eleve =
	/**
	 * représente les différents élèves de la classe
	 * @param  {string} nom      Nom de l'élève
	 * @param  {string} prenom   Prenom de l'élève
	 * @param  {number} score    Score de l'élève
	 * @param  {string} image    Image de profil de l'élève
	 * @param  {number} present  nombre de fois présent
	 * @param  {number} retard   nombre de fois en retard
	 * @param  {number} absent   nombre de fois absent
	 */
	function Eleve(nom, prenom, score, image, presense, retard, absent, participation, oral) {
		_classCallCheck(this, Eleve);

		this.nom = nom;
		this.prenom = prenom;
		this.score = score;
		this.image = image || "img/default.jpg";
		this.presense = presense || 0;
		this.retard = retard || 0;
		this.absent = absent || 0;
		this.participation = participation || 0;
		this.oral = oral || 0;
	};

	exports.default = Eleve;

/***/ }
/******/ ]);