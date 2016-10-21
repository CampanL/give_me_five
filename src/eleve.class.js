export default class Eleve
{
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
	constructor(nom, prenom, score, image, presense, retard, absent, participation, oral)
	{
		this.nom = nom;
		this.prenom = prenom;
		this.score = score;
		this.image = image || "img/default.jpg";
		this.presense = presense || 0;
		this.retard = retard || 0;
		this.absent = absent || 0;
		this.participation = participation || 0;
		this.oral = oral || 0;
	}
}