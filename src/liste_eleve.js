let liste_eleve =
{
	eleves : [],
	selected: null,

	dive: $('#on').children('li').detach(),

	get_selected: function()
	{
		return this.selected
	},

	select_student: function(eleve)
	{
		this.selected = eleve;
		$('#class li').removeClass('selected')
						.eq(eleve.id)
						.addClass('selected');
	},
	init: function(eleves)
	{
		this.eleves = eleves;
		let on = this.dive.clone();
		$('#on').append(on)

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
		var self = this
		$('#class').on('mousedown', 'li', function()
		{
			let two = liste_eleve.dive.clone();
			$('#on li').empty();
			$('#on').append(two);
			let index = $('#class li').index(this);
			self.select_student(self.eleves[index]);
			$('#on img').attr('src', self.eleves[index].image);
			$('#on .nom').append(self.eleves[index].nom);
			$('#on .prenom').append(self.eleves[index].prenom);
			$('#on .point').append(self.eleves[index].score);
			$('#on #nb-p').append(self.eleves[index].present);
			$('#on #nb-r').append(self.eleves[index].retard);
			$('#on #nb-a').append(self.eleves[index].absent);
			$('#on #nb-oral').append(self.eleves[index].oral);
			$('#on #nb-particip').append(self.eleves[index].participation);
		})
	}
};

export {liste_eleve}