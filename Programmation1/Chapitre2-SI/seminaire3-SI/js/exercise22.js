/** created by Sophie Bergeron **/

/**
 Créez un programme permettant de changer la couleur du texte de la console.
 Offrez trois choix de couleurs de fond et de texte à l'utilisateur
 Affichez une ligne de texte de la couleur de fond et de texte choisis par l'utilisateur


 */

//Etape 1 trouver les variables

var texte;
var bgColor;

//Etape 2 Lecture(demander à l'usager des données)

texte = prompt("Veuillez choisir une couleur de texte parmi bleu, orange et gris : ");
bgColor = prompt("Veuillez entrer une couleur d'arrière-plan parmi blanc, mauve et jaune : ");

//Etape 3 Les calcules


//le if

if (texte === "bleu"){
    console.log("%cBleu", "color:blue");
}
else if (texte === "orange"){
    console.log("%cOrange", "color:orange");
}
else if (texte === "gris"){
    console.log("%cGris", "color:gray");
}

if (bgColor === "blanc"){
    console.log("%cBlanc", "background:white");
}
else if (bgColor === "mauve"){
    console.log("%cMauve", "background:purple");
}
else if (bgColor === "jaune"){
    console.log("%cJaune", "background:yellow");
}
