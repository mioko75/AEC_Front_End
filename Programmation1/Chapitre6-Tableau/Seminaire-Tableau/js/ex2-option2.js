/** created by Sophie Bergeron **/

/**
 Créez un tableau qui contient les 12 mois de l’année en assignant chaque cellule manuellement et affichez-le à l’aide d’une boucle Pour.
 Ex : tabMois[0] = “janvier”;

 */
//Etape 1 trouver les variables

var tabMois = [];

//Etape 2 Lecture(demander à l'usager des données)

//Entré les mois manuellement

tabMois.push("Janvier");
tabMois.push("Fevrier");
tabMois.push("Mars");
tabMois.push("Avril");
tabMois.push("Mai");
tabMois.push("Juin");
tabMois.push("Juillet");
tabMois.push("Aout");
tabMois.push("Septembre");
tabMois.push("Octobre");
tabMois.push("Novembre");
tabMois.push("Décembre");

//Etape La boucle pour l'affichage

for(var i=0;i<tabMois.length;i++){
    document.write(tabMois[i] + "<br>");
}

