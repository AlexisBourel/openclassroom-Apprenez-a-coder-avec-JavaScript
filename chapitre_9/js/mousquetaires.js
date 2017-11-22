//1 crée un tableau contenant les noms des trois mousquetaires, Athos, Porthos et Aramis ;
var mousquetaires = ["Athos", "Porthos", "Aramis"]; 
//2 affiche le nom de chaque mousquetaire à l'aide d'une bouclefor ;
console.log("---- affiche le nom de chaque mousquetaire à l'aide d'une bouclefor ----");
for ( var i = 0; i < mousquetaires.length; i++ ) {
	console.log(mousquetaires[i]);
};
//3 ajoute au tableau le mousquetaire d'Artagnan ;
mousquetaires.push("d'Artagnan");
//4 affiche de nouveau le nom de chaque mousquetaire, cette fois à l'aide de la méthodeforEach().
console.log("---- affiche de nouveau le nom de chaque mousquetaire, cette fois à l'aide de la méthodeforEach() ----");
mousquetaires.forEach(function (i) {
    console.log(i);
});