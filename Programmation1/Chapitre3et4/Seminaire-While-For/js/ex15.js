/** created by Sophie Bergeron **/

/**
 Lire une série de nombres fournis par l’usager (l’usager transmet le nombre 0 pour terminer).
 Afficher combien de nombres positifs ont été entrés ainsi que combien de nombres négatifs ont été entrés.

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
        positif++;
    }
    else if(nombre < 0){
        negatif++;
    }

}

document.write("Vous avez entrer " + positif + " nombres positifs et <br> " + negatif + " nombres négatifs");


