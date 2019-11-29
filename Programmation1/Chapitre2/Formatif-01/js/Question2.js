/** created by Sophie Bergeron **/

/**
 Vous devez calculer le nombre de points de dommages de l’attaque Mad Bull GX de Tauros. L’attaque fait :

 100 points de dommages si l’adversaire a moins de 60 points de vie (hp).
 150 points de dommages si l’adversaire a entre 60 et 79 hp.
 200 points de dommages si l’adversaire a entre 80 et 99 hp.
 250 points si l’adversaire a 100 hp et plus.

 Écrire un algorithme le code qui permet de :

 Calculer et d’afficher les points de dommages de l’attaque Mad Bull GX à partir des points de vie d’un Pokémon adversaire.


 */

//Etape 1 trouver les variables
var HPadversaire;

//Etape 2 Lecture(demander à l'usager des données)

HPadversaire=Number(prompt("Entrer le nombre D'HP du pokemon attaquant : "));


//Etape 3 Les calcules



//Classer la note reçu

if (HPadversaire < 60) {
    document.write("vous venez de faire 100 points de dommage au Pokemon adverse");
}
else if (HPadversaire >= 60 &&  HPadversaire < 79){
    document.write("vous venez de faire 150 points de dommage au Pokemon adverse");
}
else if (HPadversaire >= 80 &&  HPadversaire < 99){
    document.write("vous venez de faire 200 points de dommage au Pokemon adverse");
}
else{
    document.write("vous venez de faire 250 points de dommage au Pokemon adverse");
}
