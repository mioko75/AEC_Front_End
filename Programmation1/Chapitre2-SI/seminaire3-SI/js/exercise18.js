/** created by Sophie Bergeron **/

/**
 Lire une note d’examen et afficher « Échec » si la note est inférieure à 60 et « Bravo » si la note est supérieure ou égale à 60.


 */

//Etape 1 trouver les variables

var note;


//Etape 2 Lecture(demander à l'usager des données)

note = prompt("Entrez votre note: ");

//Etape 3 Les calcules

//le if

if (note < 60){
    document.write("c'est un echec");
}

else{
    document.write("C'est une réussite");
}

