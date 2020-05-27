/** created by Sophie Bergeron **/

/**
 Faire un programme qui boucle 10 fois. À toutes les itérations,
 votre programme génère un nombre aléatoire entre 0 et 1 et vous demande aussi de choisir un nombre entre 0 et 1.
 Si le nombre est identique, vous gagnez, si non vous perdez . Vous affichez le pointage à la fin des 10 itérations.


 */

//Etape 1 trouver les variables

var nbaleatoire;
var nbusager ;
var point =0;
var defaite = 0;


//Etape 2 Lecture(demander à l'usager des données)


//Etape 3 La boucle

for (var i=1; i<=10; i++){
    nbaleatoire = Math.floor(Math.random()*2);
    nbusager = Number (prompt("Entrez un nombre entre 0 et 1 svp:"));
    if(nbusager === nbaleatoire ){
        point ++;
    }
    else{
        defaite++;
    }

}

document.write("Vous avez gagner " + point + " fois et perdus  " + defaite + "fois");


