/** created by Sophie Bergeron **/

/**
 Lire une série de nombres fournis par l’usager
 (l’usager transmet le nombre 0 pour terminer).
 Afficher la somme des nombres positifs ainsi que la somme des nombres négatifs.

 */
//Etape 1 trouver les variables

var nombre =1;
var positif =0;
var negatif =0;


//Etape 2 Lecture(demander à l'usager des données)


//Etape 3 La boucle

while (nombre !== 0){
    nombre= Number (prompt("Entrez un nombre (positif ou negatif) svp et faire le 0 pour quitter :"));
    if(nombre > 0){
        positif+=nombre;
    }
    else{
        negatif+=nombre;
    }

}
 document.write("Vous avez entrer une somme de  " + positif + " en nombre positif et <br> de " + negatif + " en nombre négatif");

