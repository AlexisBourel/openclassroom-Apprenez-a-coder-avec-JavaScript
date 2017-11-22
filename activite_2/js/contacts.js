/* 
Activité : gestion des contacts
Chaque contact a un nom et un prénom. Le programme gère un tableau de contacts 
et offre à l’utilisateur le choix entre les fonctionnalités suivantes :
	Afficher chaque contact du tableau.
	Quitter.
	
Le programme doit “boucler” jusqu’à ce que l’utilisateur choisisse de quitter. 
Il doit également utiliser des objets pour gérer les contacts.
Les deux contacts à insérer initialement dans le tableau sont :
	Carole Lévisse
	Mélodie Nelsonne

Pour obtenir le maximum de points possibles, ajoutez la possibilité 
pour l’utilisateur de saisir un nouveau contact qui sera inséré dans le tableau.
*/

// TODO : complétez le programme

//creons la classe Contact qui permettra d'instancier de nouveau contact
var Contact = {
	
	init : function (nom, prenom) {
		this.prenom = prenom;
		this.nom = nom;
	},
	
	decrire : function () {
		var description = "Nom : " + this.nom + ", Prenom : " + this.prenom;
		return description;
	}
};

//initilisons nos deux premiers contacts
var contact1 = Object.create(Contact);
contact1.init("Lévisse", "Carole");
var contact2 = Object.create(Contact);
contact2.init("Nelsonne", "Mélodie");
//entrons les dans un tableau
var contacts =[];
contacts.push(contact1);
contacts.push(contact2);
//definissons une méthode affin de parcourir tous le tableau
function listerContacts() {
	contacts.forEach(function(contact){
		console.log(contact.decrire());
	});
};
//prochaine ligne a décommenter pour tester la fonction
//listerContacts();
//creons une méthode pour insérer un nouveau contact
function ajouterContact() {
	var newContact = Object.create(Contact);
	newContact.init(prompt("saisissez son nom"), prompt("saisissez son prenom"));
	contacts.push(newContact);
};
//prochaines lignes a décommenter pour tester la fonction
//ajouterContact();
//listerContacts();
//maintenant la méthode pour faire choisir l'utilisateur
function choisirOption() {
	//listons la liste des choix
	console.log("\n1 : Lister les contacts \n2 : Ajouter un contact \n0 : Quitter");
	choixU = Number(prompt("choisissez une option:"));
	return choixU;
}
//nous avons nos méthodes, mettons tout ca en forme
//D'abord le message d'accueil
console.log("Bienvenue dans le gestionnaire de contacts !");
//ajoutons la boucle tant que l'utilisateur ne quitte pas le programme
//pour ca l'utilisateur doit déja faire un choix :)
console.log("\n1 : Lister les contacts \n2 : Ajouter un contact \n0 : Quitter");
var choixU = Number(prompt("choisissez une option:"));
while (choixU !== 0){
	
	switch(choixU){
		case 1 : {
			listerContacts();
			// ne pas oublier de modifier le choixU 
			choisirOption();
		}
			break;
		case 2 : {
			ajouterContact();
			choisirOption();
		}
			break;
		default : 
			choisirOption();
			break;
	}
}
//et le message de fin
console.log("Au revoir !");
	