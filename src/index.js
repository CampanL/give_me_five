import {liste_eleve} from './liste_eleve'
import Eleve from './eleve.class';
let classe = 
{
	init: function()
	{
		let eleve = 
		[
		new Eleve('Campan', 'Loan', 10, 'https://avatars.slack-edge.com/2016-10-18/92775451776_be0301deeac276b996b0_512.png'),
		new Eleve('Nahon', 'Felix', 10, 'https://avatars.slack-edge.com/2016-10-18/92775001280_26eaae08b2bcad50cf3a_512.jpg'),
		new Eleve('Teboul', 'Clement', 10, 'https://avatars.slack-edge.com/2016-10-18/92730652738_61e3d620eaf3035cfa53_512.jpg')
		];
		liste_eleve.init(eleve);
	}
}
export {classe};