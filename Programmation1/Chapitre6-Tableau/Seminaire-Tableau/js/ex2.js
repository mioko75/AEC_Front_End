/** created by Sophie Bergeron **/

/**
 Créez un tableau qui contient les 12 mois de l’année en assignant chaque cellule manuellement et affichez-le à l’aide d’une boucle Pour.
 Ex : tabMois[0] = “janvier”;

 */
//Etape 1 trouver les variables

var tabMois = [];

//Etape 2 Lecture(demander à l'usager des données)

//Entré les mois manuellement

tabMois [0]= "Janvier";
tabMois [1]= "Février";
tabMois [2]= "Mars";
tabMois [3]= "Avril";
tabMois [4]= "Mai";
tabMois [5]= "Juin";
tabMois [6]= "Juillet";
tabMois [7]= "Aout";
tabMois [8]= "Sept";
tabMois [9]= "Oct";
tabMois [10]= "Nov";
tabMois [11]= "Dec";


//Etape La boucle pour l'affichage

for(var i=0;i<tabMois.length;i++){
    document.write(tabMois[i] + "<br>");
}

