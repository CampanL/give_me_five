import {liste_eleve} from './liste_eleve'
import Eleve from './eleve.class';
let classe = 
{
	init: function()
	{
		let eleve = 
		[
		new Eleve('Campan', 'Loan', 10),
		new Eleve('Naon', 'Felix', 10),
		new Eleve('Teboul', 'Clement', 10)
		];
		liste_eleve.init(eleve);
	}
}
export {classe};