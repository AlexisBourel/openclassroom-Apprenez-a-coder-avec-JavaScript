var r = Number(prompt("Entrez le rayon d'un cercle :"));

// TODO : ajoutez ici la définition de l'objet cercle
var cercle = {
	rayon: r,
	perimetre : function(){
		return 2 * this.rayon * Math.PI;
	},
	aire : function(){
		return this.rayon * this.rayon * Math.PI;
	}
};

var cercle = {
    rayon: r,

    // Renvoie le périmètre du cercle
    perimetre: function () {
        return 2 * this.rayon * Math.PI;
    },
    // Renvoie l'aire du cercle
    aire: function () {
        return this.rayon * this.rayon * Math.PI;
        // Autre possibilité
        //return Math.pow(this.rayon, 2) * Math.PI;
    }
};
console.log("Son perimetre vaut " + cercle.perimetre());
console.log("Son aire vaut " + cercle.aire());