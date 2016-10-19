import {liste_eleve} from './liste_eleve'
import Eleve from './eleve.class';
let classe = 
{
	init: function()
	{
		let eleve = 
		[
		new Eleve('Campan', 'Loan', 10, 'https://avatars.slack-edge.com/2016-10-18/92775451776_be0301deeac276b996b0_512.png')
		];
		liste_eleve.init(eleve);
	}
}
export {classe};