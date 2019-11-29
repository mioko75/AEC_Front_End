/** created by Sophie Bergeron **/

/**
 Lire deux nombres. Vous devez diviser le premier nombre par le deuxième seulement si le deuxième nombre est différent
 de zéro. Par contre si ce nombre est zéro inscrivez le message suivant :‘Division par zéro interdite.’, si ce nombre
 n’est pas zéro vous devez afficher le résultat.
 */

//Etape 1 trouver les variables
var nb1;
var nb2;
var result;

//Etape 2 Lecture(demander à l'usager des données)

nb1=Number(prompt("Entrer le nombre 1"));
nb2=Number(prompt("Entrer le nombre 2"));

//Etape 3 Les calcules

result=nb1/nb2

//Feectuer la divsion lorsque le nombre deux n'egale pas 0

if (nb2 != 0) {
    document.write(+result);
}

else {
    document.write("Division par zéro interdite");
}
