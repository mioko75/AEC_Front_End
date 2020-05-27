/** created by Sophie Bergeron **/

/**
 Lire une lettre de l'alphabet. Afficher le mot voyelle (pour : a, e, i, o, u, y) ou
 le mot consonne (pour les autres) selon la lettre lue.
 Assurez-vous que l'utilisateur puisse entrer les lettres en minuscules ou en majuscules.

 */

//Etape 1 trouver les variables

var lettre;


//Etape 2 Lecture(demander à l'usager des données)

lettre = prompt("Entrez une lettre : ");

//Etape 3 Les calcules


//le if

if (lettre.toUpperCase() === "A" || lettre.toUpperCase() === "E" || lettre.toUpperCase() ===  "I" || lettre.toUpperCase() === "O" || lettre.toUpperCase() === "U" || lettre.toUpperCase() === "Y"){
    document.write("c'est une voyelle");
}

else{
    document.write("C'est une consonne");
}

