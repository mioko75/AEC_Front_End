/** created by Sophie Bergeron **/

/**
 Lire un nombre au clavier. Afficher la catégorie (Positif, Négatif ou Zéro à l’écran)

 */

//Etape 1 trouver les variables
var nb;

//Etape 2 Lecture(demander à l'usager des données)

nb=Number(prompt("Entrer un nombre : "));

//Etape 3 Les calcules


//Classer la note reçu

if (nb === 0) {
    document.write("Zéro");
}
else if (nb < 0 ){
    document.write("Négatif");
}
else{
    document.write("Positif");
}
