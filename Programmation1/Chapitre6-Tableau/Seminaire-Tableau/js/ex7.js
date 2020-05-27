/** created by Sophie Bergeron **/

/**
 À l’aide d’une boucle, créez un tableau de 1000 valeurs contenant vrai ou faux (boolean). Ces valeurs doivent être aléatoires.
 Ensuite, à l’aide d’une autre boucle, comptez le nombre de vrai et de faux et faites-les afficher.

 */
//Etape 1 trouver les variables

var tabVF = [];
var nbV = 0;
var nbF = 0;

//Etape 2 Lecture(demander à l'usager des données)

//Etape 3 La boucle de 1000 valeurs

for(var i=0; i<1000; i++){
    tabVF[i] = Boolean(Math.floor(Math.random() * 2));
    if (tabVF[i] === true) {
        nbV++;
    }
    else {
        nbF++;
    }
}

//Etape 4 Afficher la compilation des valeurs

document.write("Il y a "+nbV +" de vrais et " +nbF +" de faux");

