/////////////////////////////////////
/////////////////////////////////////
//// /!\ WARNING CANCER CODE /!\ ////
////   Attention ce code peut	 ////
////     ou va vous donner       ////
////     un cancer oculair       ////
/////////////////////////////////////
/////////////////////////////////////



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
		$('#on li').empty();

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
		})
	},
	bouton: function(eleves)
	{
		$('#oral-plus').on('mousedown', function()
		{
			liste_eleve.get_selected().oral += 1;
			liste_eleve.get_selected().score +=20;
			$('#on .point').empty();
			$('#on #nb-oral').empty();
			$('#on .point').append(liste_eleve.get_selected().score);
			$('#on #nb-oral').append(liste_eleve.get_selected().oral);
			$('#'+liste_eleve.get_selected().id+' .point').empty();
			$('#'+liste_eleve.get_selected().id+' .point').append(liste_eleve.get_selected().score);
		})
		$('#oral-moins').on('mousedown', function()
		{
			if (liste_eleve.get_selected().oral>0) 
			{
			liste_eleve.get_selected().oral -= 1;
			liste_eleve.get_selected().score -=20;
			$('#on .point').empty();
			$('#on #nb-oral').empty();
			$('#on .point').append(liste_eleve.get_selected().score);
			$('#on #nb-oral').append(liste_eleve.get_selected().oral);
			$('#'+liste_eleve.get_selected().id+' .point').empty();
			$('#'+liste_eleve.get_selected().id+' .point').append(liste_eleve.get_selected().score);
			}
		})
		$('#part-plus').on('mousedown', function()
		{
			liste_eleve.get_selected().participation += 1;
			liste_eleve.get_selected().score +=15;
			$('#on .point').empty();
			$('#on #nb-particip').empty();
			$('#on .point').append(liste_eleve.get_selected().score);
			$('#on #nb-particip').append(liste_eleve.get_selected().participation);
			$('#'+liste_eleve.get_selected().id+' .point').empty();
			$('#'+liste_eleve.get_selected().id+' .point').append(liste_eleve.get_selected().score);
		})
		$('#part-moins').on('mousedown', function()
		{
			if (liste_eleve.get_selected().participation>0) 
			{
			liste_eleve.get_selected().participation -= 1;
			liste_eleve.get_selected().score -=15;
			$('#on .point').empty();
			$('#on #nb-particip').empty();
			$('#on .point').append(liste_eleve.get_selected().score);
			$('#on #nb-particip').append(liste_eleve.get_selected().participation);
			$('#'+liste_eleve.get_selected().id+' .point').empty();
			$('#'+liste_eleve.get_selected().id+' .point').append(liste_eleve.get_selected().score);
			}
		})
		$('#on #add-p').on('mousedown', function()
		{
			liste_eleve.get_selected().presense += 1;
			liste_eleve.get_selected().score += 10;
			$('#on .point').empty();
			$('#on .point').append(liste_eleve.get_selected().score);
			$('#on #nb-p').empty();
			$('#on #nb-p').append(liste_eleve.get_selected().presense);
			$('#'+liste_eleve.get_selected().id+' .point').empty();
			$('#'+liste_eleve.get_selected().id+' .point').append(liste_eleve.get_selected().score);
			$('#'+liste_eleve.get_selected().id+' .addp').css('background-color', '#333');
		})
		$('#on #add-r').on('mousedown', function()
		{
			liste_eleve.get_selected().retard += 1;
			liste_eleve.get_selected().score -= 5;
			$('#on .point').empty();
			$('#on .point').append(liste_eleve.get_selected().score);
			$('#on #nb-r').empty();
			$('#on #nb-r').append(liste_eleve.get_selected().retard);
			$('#'+liste_eleve.get_selected().id+' .point').empty();
			$('#'+liste_eleve.get_selected().id+' .point').append(liste_eleve.get_selected().score);
			$('#'+liste_eleve.get_selected().id+' .addr').css('background-color', '#333');
		})
		$('#on #add-a').on('mousedown', function()
		{
			liste_eleve.get_selected().absent += 1;
			liste_eleve.get_selected().score -= 10;
			$('#on .point').empty();
			$('#on .point').append(liste_eleve.get_selected().score);
			$('#on #nb-a').empty();
			$('#on #nb-a').append(liste_eleve.get_selected().absent);
			$('#'+liste_eleve.get_selected().id+' .point').empty();
			$('#'+liste_eleve.get_selected().id+' .point').append(liste_eleve.get_selected().score);
			$('#'+liste_eleve.get_selected().id+' .adda').css('background-color', '#333');
		})
		$('#on #cancel-p').on('mousedown', function()
		{
			if (liste_eleve.get_selected().presense>0)
			{
				liste_eleve.get_selected().presense -= 1;
				liste_eleve.get_selected().score -= 10;
				$('#on .point').empty();
				$('#on .point').append(liste_eleve.get_selected().score);
				$('#on #nb-p').empty();
				$('#on #nb-p').append(liste_eleve.get_selected().presense);
				$('#'+liste_eleve.get_selected().id+' .point').empty();
				$('#'+liste_eleve.get_selected().id+' .point').append(liste_eleve.get_selected().score);
				$('#'+liste_eleve.get_selected().id+' .addp').css('background-color', '#111');
			}
		})
		$('#on #cancel-r').on('mousedown', function()
		{
			if (liste_eleve.get_selected().retard>0) 
			{
				liste_eleve.get_selected().retard -= 1;
				liste_eleve.get_selected().score += 5;
				$('#on .point').empty();
				$('#on .point').append(liste_eleve.get_selected().score);
				$('#on #nb-r').empty();
				$('#on #nb-r').append(liste_eleve.get_selected().retard);
				$('#'+liste_eleve.get_selected().id+' .point').empty();
				$('#'+liste_eleve.get_selected().id+' .point').append(liste_eleve.get_selected().score);
				$('#'+liste_eleve.get_selected().id+' .addr').css('background-color', '#111');
			}
		})	
		$('#on #cancel-a').on('mousedown', function()
		{
			if (liste_eleve.get_selected().absent>0) 
			{
				liste_eleve.get_selected().absent -= 1;
				liste_eleve.get_selected().score += 10;
				$('#on .point').empty();
				$('#on .point').append(liste_eleve.get_selected().score);
				$('#on #nb-a').empty();
				$('#on #nb-a').append(liste_eleve.get_selected().absent);
				$('#'+liste_eleve.get_selected().id+' .point').empty();
				$('#'+liste_eleve.get_selected().id+' .point').append(liste_eleve.get_selected().score);
				$('#'+liste_eleve.get_selected().id+' .adda').css('background-color', '#111');
			}
		})
	}
};

export {liste_eleve}