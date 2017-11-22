var compte = {
	titulaire : "Alex",
	solde : 0,
	
	//credite le compte d'une certaine somme
	crediter : function (montant) {
        this.solde = this.solde + montant;
    },
	//debite le compte
	debiter : function(debit){
		this.solde = this.solde - debit;
	},
	//decrit l'etat du compte
	decrire : function(){
		var description = "Titulaire : " + this.titulaire + ", solde : " + this.solde + " euros";
		return description;
	}
	
}

//voyons l'etat initial du compte
console.log(compte.decrire());
//ajoutons 200 euros
compte.crediter(200);
console.log(compte.decrire())
//retirons 150
compte.debiter(150);
//affichons de nouveau l'etat du compte
console.log(compte.decrire())

console.log("--------VERSION 2--------");
var compte2 = {
    titulaire: "Alex",
    solde: 0,

    // Crédite le compte d'un certain montant
    crediter: function (montant) {
        this.solde = this.solde + montant;
    },
    // Débite le compte d'un certain montant
    debiter: function (montant) {
        this.solde = this.solde - montant;
    },
    // Renvoie la description du compte
    decrire: function () {
        var description = "Titulaire : " + this.titulaire +
            ", solde : " + this.solde + " euros";
        return description;
    }
};

console.log(compte2.decrire());
var credit = Number(prompt("Entrez le montant à créditer :"));
compte2.crediter(credit);
console.log(compte2.decrire());
var debit = Number(prompt("Entrez le montant à débiter :"));
compte2.debiter(debit);
console.log(compte2.decrire());