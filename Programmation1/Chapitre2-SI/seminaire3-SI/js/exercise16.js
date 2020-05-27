/** created by Sophie Bergeron **/

/**
 Lire 2 nombres au clavier.
 Si ces 2 nombres sont :
 supérieurs ou égaux à 10, affichez leur somme
 inférieurs à 10, affichez leur produit
 Si l'un des deux nombres est supérieur ou égal à 10 et l'autre inférieur à 10, affichez la différence entre les deux nombres.

 */

//Etape 1 trouver les variables

var nb1;
var nb2;
var somme;
var produit;
var diff;

//Etape 2 Lecture(demander à l'usager des données)

nb1 = Number(prompt("Entrez le premier nombre : "));
nb2 = Number(prompt("Entrez le second nombre : "));

//Etape 3 Les calcules

somme = nb2 +nb1;
produit = nb2 * nb1;
diff = nb2 - nb1;

//le if

if (nb1 >= 10 && nb2 >= 10){
    document.write("la somme de ces nombres est  : " + somme)
}

else if(nb1 < 10 && nb2 < 10){
    document.write("Le produit de ces 2 nombres est : " + produit);
}
else{
    document.write("La différence de ces 2 nombres est : " + diff);
}

