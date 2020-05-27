/** created by Sophie Bergeron **/

/**
 Modifiez le numéro précédent pour trouver le plus grand nombre possible en JavaScript.

 */
//Etape 1 trouver les variables

var tab2Exp = [];

//Etape 2 Lecture(demander à l'usager des données)


//Etape La boucle pour l'affichage

for(var i=1; i<=1024; i++){
    tab2Exp [i] = Math.pow(2,i);
    document.write("2 Exposant "+ i +"="+ tab2Exp[i]+ "<br>");
}

//1024 étant devenu l'infiny et plus loin encore...
