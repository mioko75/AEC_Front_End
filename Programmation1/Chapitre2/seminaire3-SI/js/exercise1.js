/** created by Sophie Bergeron **/

/**
 Lire deux nombres et afficher le plus grand des deux.
 */
//Etape 1 trouver les variables
var nomb1;
var nomb2;

//Etape 2 Lecture(demander à l'usager des données)

nomb1=Number(prompt("Entrer le premier nombre"));
nomb2=Number(prompt("Entrer le deuxieme nombre"));

//Etape 3 Les calcules



//Trouver le plus grand

if (nomb1 > nomb2) {
    document.write("Le nombre 1 est plus grand : " +nomb1);
}
else if (nomb2 > nomb1){
    document.write("Le nombre 2 est plus grand : " +nomb2);
}
else {
    document.write("Les nombres sont égaux");
}
