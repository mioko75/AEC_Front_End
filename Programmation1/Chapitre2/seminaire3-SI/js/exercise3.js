/** created by Sophie Bergeron **/

/**
 Lire deux nombres, si les deux nombres sont plus grands que 9 écrire le mot « BONJOUR » et si tel n’est pas le cas écrire « BONSOIR ».
 */
//Etape 1 trouver les variables
var nb1;
var nb1;

//Etape 2 Lecture(demander à l'usager des données)

nb1=Number(prompt("Entrer le nombre 1"));
nb2=Number(prompt("Entrer le nombre 2"));

//Etape 3 Les calcules



//Regarder s'ils sont plus grand que 9

if (nb1 > 9  && nb2 > 9) {
    document.write("BONJOUR");
}

else {
    document.write("BONSOIR");
}
