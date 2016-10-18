let liste_eleve =
{
	eleves : [],

	init: function(eleves)
	{
		this.eleves = eleves;

		let $eleves = $('#class'),
			$one = $eleves.children('li').detach();

		for (var i = 0; i < eleves.length; i++) {

			let li = $one.clone(),
				eleve = this.eleves[i];

			eleve.id = i

			li.attr('id',i);
			$eleves.append(li);
			$('#'+i+' .nom').append('Nom: '+eleve.nom);
			$('#'+i+' .prenom').append('Prenom: '+eleve.prenom);
			$('#'+i+' .point').append(eleve.score);
			$('#'+i+' img').attr('src', eleve.image);
		}
	}
}

export {liste_eleve}