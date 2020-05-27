/** created by Sophie Bergeron
 5 décembre 2019 - Examen 1**/

/**
 QUESTION 4 ( 6 points)
 Vous devez compléter un programme qui permet de calculer l’aire de formes.
 En entrée, l'utilisateur doit entrer la lettre correspondant au type de figure demandé:
 - "O" pour cercle : PI * rayon 2
 - "R" pour rectangle : longueur * largeur
 - "T" pour triangle rectangle : (longueur * largeur) / 2
 - "C" pour carré : côté 2
 L’utilisateur doit pouvoir entrer son choix en lettres minuscules ou en majuscules.
 En fonction de la lettre saisie par le client, votre programme doit demander les renseignements
 nécessaires pour le calcul de l’aire.
 Une fois les informations saisies par l'utilisateur, votre programme doit afficher le type
 sélectionné ainsi que le calcul de l'aire.

 */

//Etape 1 trouver les variables

var forme;
var airecercle;
var airerectangle;
var triangle;
var airetriangle;
var rayon;
var longueur;
var largeur;
var airecarre;
var cote;
var pi=3.14159265359;

//Etape 2 Lecture(demander à l'usager des données)

forme = prompt("Pour quel forme voulez-vous calculer l'aire ?  Entrer O pour Cercle, R pour Rectangle, T pour Triangle ou C pour Carré");

//Calcul des informations selon la lectures recu par l'usager à la premiere étape

if(forme === "o" || forme === "O"){
    rayon= prompt("Quel est le rayon de votre cerlce?");
    airecercle= pi * (rayon*rayon);
    document.write("L'aire de votre cerlce est de " + airecercle.toFixed(2));
}
else if (forme === "r" || forme ===  "R") {
    largeur= prompt("Quel est la largeur de rectangle?");
    longueur= prompt("Quel est la longueur de rectangle?");
    airerectangle=largeur*longueur;
    document.write("l'aire de votre rectangle est de : " + airerectangle);
}
else if (forme === "t" || forme === "T") {
    largeur= prompt("Quel est la largeur de triangle?");
    longueur= prompt("Quel est la longueur de triangle?");
    airetriangle=(largeur*longueur)/2;
    document.write("l'aire de votre triangle est de : " + airetriangle);
}
else if (forme === "c" || forme === "C") {
    cote= prompt("Quel est la largeur d'un des côtés de votre carré?");
    airecarre=cote*cote;
    document.write("l'aire de votre carré est de : " + airecarre);
}
else{
    document.write("Désolé votre choix n'est pas accepté!!!");
}
