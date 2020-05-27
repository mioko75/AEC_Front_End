/** created by Sophie Bergeron **/

/**
 Calculer et afficher la surface d'un rectangle pour seulement ceux ayant un périmètre d'au moins 100.


 */

//Etape 1 trouver les variables

var surface;
var perimetre;
var longueur;
var largeur;

//Etape 2 Lecture(demander à l'usager des données)

longueur = Number(prompt("Entrez la longueur"));
largeur = Number(prompt("Entrez la largeur"));

//Etape 3 Les calcules

perimetre = (longueur +largeur)*2;
surface = longueur*largeur;

//le if

if (perimetre < 100){
    document.write("la surface est : " + surface)
}

else{
    document.write("Le perimetre doit etre inférieur a 100");
}