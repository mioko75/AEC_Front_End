/** created by Sophie Bergeron **/

/**
 Créez un tableau nommé tab2Exp avec 16 cases entières. À l’aide d’une boucle et de Math.pow, insérez les bonnes valeurs dans le tableau.
 exp : tab2Exp[0] = 1;    // 20
 ...
 exp : tab2Exp[4] = 16;  // 24
 exp : tab2Exp[5] = 32;  // 25


 */
//Etape 1 trouver les variables

var tab2Exp = [];

//Etape 2 Lecture(demander à l'usager des données)


//Etape La boucle pour l'affichage

for(var i=1; i<=16; i++){
    tab2Exp [i] = Math.pow(2,i);
    document.write("2 Exposant "+ i +"="+ tab2Exp[i]+ "<br>");
}
