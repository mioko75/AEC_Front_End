/** created by Sophie Bergeron **/

/**
 Lire 2 nombres A et B différents. Trouver et afficher le plus petit et le plus grand.
 Si les deux nombres sont identiques, affichez un message d'erreur à l'utilisateur.

 */

//Etape 1 trouver les variables
var nba;
var nbb;


//Etape 2 Lecture(demander à l'usager des données)

nba = Number(prompt("Entrer la valeur du nombre A"));
nbb = Number(prompt("Entrer la valeur du nombre B"));

//Etape 3 Les calcules


//Valider le nom d'usager et le mot de passe

if (nba < nbb) {
    document.write("le nombre A ( " + nba + " ) est plus petit");
}
else if (nbb < nba) {
    document.write("le nombre B ( " + nbb + " ) est plus petit");
}

else{
    document.write("ERREUR");
}
