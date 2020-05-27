/** created by Sophie Bergeron **/

/**
 Demandez un mot à l’usager, bouclez tant que le mot n’est pas patate.
 Comptez et affichez le nombre de mots entrés avant le mot patate.


 */
//Etape 1 trouver les variables

var nbMots = -1;
var mot = "";

//Etape 2 Lecture(demander à l'usager des données)


//Etape 3 La boucle

while (mot != "patate"){
    mot = prompt("Écrivez un mot svp : ");
    nbMots++;
}
document.write("Vous avez entré " + nbMots + " mots avant le mot patate");
