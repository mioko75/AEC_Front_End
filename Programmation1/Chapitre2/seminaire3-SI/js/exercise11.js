/** created by Sophie Bergeron **/

/**
 Lire une lettre au clavier.
 Si la lettre est 'w', écrire Avancer.
 Si la lettre est 'a', écrire Gauche.
 Ajouter 's' et 'd'.
 Si c'est autre chose, écrire un message d'erreur.


 */

//Etape 1 trouver les variables
var lettre;

//Etape 2 Lecture(demander à l'usager des données)

lettre=(prompt("Entrer une lettre pour connaitre ca fonction"));

//Etape 3 Les calcules


//Valider le nom d'usager et le mot de passe

if (lettre === "w") {
    document.write(lettre + " pour Avancer");
}
else if (lettre === "a") {
    document.write(lettre + " pour Gauche");
}
else if (lettre === "s") {
    document.write(lettre + " Pour Descendre");
}
else if (lettre === "d") {
    document.write(lettre + " Pour Droite");
}
else{
    document.write("ERREUR");
}
