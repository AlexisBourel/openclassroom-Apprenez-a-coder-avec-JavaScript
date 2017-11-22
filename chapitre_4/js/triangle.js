var ligne = "";

for (var i=0; i<7; i++) {
	ligne = ligne + "#";
	console.log(ligne);
}

var x = Number(prompt("Entrez une valeur :"));
 
if (x <= 10) {
   if (x >= 5) {
       console.log("A");
   }
   console.log("B");
} else {
   console.log("C");
}