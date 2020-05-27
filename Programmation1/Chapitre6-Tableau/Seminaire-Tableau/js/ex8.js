/** created by Sophie Bergeron **/

/**
 Lire les noms et notes d’examen d’une classe de 5 élèves. Afficher ceux (noms et notes) qui ont une note supérieure à la moyenne.

 */
//Etape 1 trouver les variables

var Moyenne ;
var TabNom = [];
var TabNote = [];

//Etape 2 Lecture(demander les données à l'usager )

for(i=0; i<5; i++){
    TabNom[i] = prompt("Quel est votre nom?");
    TabNote[i] = Number (prompt("Quelle est votre note ?"));
 }

//Afficher le tableau
document.write(TabNom[0]+ " " + TabNote[0] + "<br>");
document.write(TabNom[1]+ " " + TabNote[1] + "<br>");
document.write(TabNom[2]+ " " + TabNote[2] + "<br>");
document.write(TabNom[3]+ " " + TabNote[3] + "<br>");
document.write(TabNom[4]+ " " + TabNote[4] + "<br>");

//Etape 3 Faire le calcul des la moyenne

Moyenne = (TabNote[0]+TabNote[1]+TabNote[2]+TabNote[3]+TabNote[4])/5;

//Afficher le résultat de la moyenne

document.write("La moyenne du groupe est " + Moyenne +"<br>");

//Etape 4 Tableau qui affiche les résultat au dessus de la moyenne

for(i = 0; i < 5; i++) {
    document.write("voici ceux qui sont au dessus de la moyenne <br>");
    if (TabNote[i] > Moyenne){
        document.write(TabNom[i] + " " +TabNote[i] );
    }
}