/** created by Sophie Bergeron **/

/**
 Lire les noms et notes d’examen d’une classe de 5 élèves. Afficher ceux (noms et notes) qui ont une note supérieure à la moyenne.

 */
//Etape 1 trouver les variables

var noteMoyenne;
var tabNoms = [];
var tabNotes = [];

//Etape 2 Lecture(demander les données à l'usager )


for(i = 0; i < 5; i++){
    tabNoms[i] = prompt("Quel est votre nom?");
    tabNotes[i] = Number(prompt("Quelle note avez-vous obtenu?"));
}
//On pourrait calculer la moyenne dans la boucle du haut aussi et //ne faire que la division en sortant de la boucle
noteMoyenne = (tabNotes[0] + tabNotes[1] + tabNotes[2] + tabNotes[3] + tabNotes[4]) / 5;

for(i = 0; i < 5; i++) {
    if (tabNotes[i] > noteMoyenne){
        document.write(tabNoms[i] + tabNotes[i]);
    }
}

