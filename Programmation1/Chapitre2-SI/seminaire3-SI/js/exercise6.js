/** created by Sophie Bergeron **/

/**
 Lire une note au clavier et afficher la lettre correspondante.
 90 et plus : A
 Entre 80 et 90 : B
 Entre 70 et 80 : C
 Entre 60 et 70 : D
 Moins de 60 : E

 * Codez l’exercice #6 2 fois, une fois en débutant le IF par la cote A et une fois par la cote E
 (en sens inverse).


 */

//Etape 1 trouver les variables
var note;

//Etape 2 Lecture(demander à l'usager des données)

note=Number(prompt("Entrer la note reçu : "));

//Etape 3 Les calcules


//Classer la note reçu

if (note >= 90) {
    document.write("A");
}
else if (note >= 80 && note < 90){
    document.write("B");
}
else if (note >= 70 && note < 80){
    document.write("C");
}
else if (note >= 60 && note < 70){
    document.write("D");
}
else{
    document.write("E");
}
