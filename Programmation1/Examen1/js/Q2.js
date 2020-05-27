/** created by Sophie Bergeron
    5 décembre 2019 - Examen 1**/

/**
 QUESTION 2 (4 points)
 Faire le code qui permet de lire au clavier la valeur de la variable âge et afficher tranche d'âge
 en fonction de l'âge. Pour faire ce choix, utiliser la table suivante :
 tranche à afficher age
 enfant 0 <= age <= 12
 adolescent 13 <= age <= 17
 adulte 18 <= age <= 54
 senior 55 et plus
 Si note ne contient aucune de ces valeurs, alors affichez ″Pas encore né.″.

 */

//Etape 1 trouver les variables

var age;

//Etape 2 Lecture(demander à l'usager des données)

age=Number(prompt("Entrer votre âge pour savoir à quel tranche d'âge vous appartenez : "));

//Classer l'âge

if (age => 0 && age <= 12 ) {
    document.write("Vous faites parti du groupe ENFANT");
}
else if (age >= 13 &&  age <= 17){
    document.write("Vous faites parti du groupe ADOLESCENT");
}
else if (age >= 18 &&  age < 54){
    document.write("Vous faites parti du groupe ADULTE");
}
else if (age >= 55 ){
    document.write("Vous faites parti du groupe SENIOR");
}
else{
    document.write("Pas encore né!");
}