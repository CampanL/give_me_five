export default class Eleve
{
	/**
	 * représente les différents élèves de la classe
	 * @param  {string} nom     Nom de l'élève
	 * @param  {string} prenom  Prenom de l'élève
	 * @param  {number} score   Score de l'élève
	 * @param  {string} image   Image de profil de l'élève
	 */
	constructor(nom, prenom, score, image)
	{
		this.nom = nom;
		this.prenom = prenom;
		this.score = score;
		this.image = image || "img/default.jpg";
	}
}