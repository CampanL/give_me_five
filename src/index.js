import {liste_eleve} from './liste_eleve'
import Eleve from './eleve.class';
let classe = 
{
	init: function()
	{
		let eleve = 
		[
		new Eleve('Alves', 'Joel', 10, 'https://avatars.slack-edge.com/2016-10-06/88162950964_00f73475f63d0f5c30c1_512.jpg'),
		new Eleve('Campan', 'Loan', 10, 'https://avatars.slack-edge.com/2016-10-18/92775451776_be0301deeac276b996b0_512.png'),
		new Eleve('Cqn', 'Axel', 10, 'https://avatars.slack-edge.com/2016-10-19/93612329107_db2ee3bbf8bad082a346_512.jpg'),
		new Eleve('Dussol', 'Clement', 10, 'https://avatars.slack-edge.com/2016-10-04/87094202321_3518be3bda81a857c0b8_72.png'),
		new Eleve('Gastineau', 'Julien', 10, 'https://avatars.slack-edge.com/2016-10-18/92723059619_939be57f132a6ae4c53f_512.jpg'),
		new Eleve('Luhaire', 'Bastien', 10, 'https://avatars.slack-edge.com/2016-10-18/92706072978_40587710bc76a24767f4_192.jpg'),
		new Eleve('Mouton', 'Victor', 10, 'https://avatars.slack-edge.com/2016-10-05/87655982912_65ebf13e858ebff90109_512.jpg'),
		new Eleve('Nahon', 'Felix', 10, 'https://avatars.slack-edge.com/2016-10-18/92775001280_26eaae08b2bcad50cf3a_512.jpg'),
		new Eleve('Teboul', 'Clement', 10, 'https://avatars.slack-edge.com/2016-10-18/92730652738_61e3d620eaf3035cfa53_512.jpg'),
		new Eleve('Saigot', 'Pierre', 10, 'https://avatars.slack-edge.com/2016-10-04/87018456818_cca56ac88ee10569a934_512.png'),
		new Eleve('Vendeville', 'Mattieu', 10, 'https://avatars.slack-edge.com/2016-10-18/92690535158_7210c0a0fa41bf1125eb_192.jpg'),
		new Eleve('Xiong', 'Stan', 10, 'https://avatars.slack-edge.com/2016-10-18/92786824401_e7d2e38c61afdbdcf797_512.jpg')
		];
		liste_eleve.init(eleve);
	}
}
export {classe};