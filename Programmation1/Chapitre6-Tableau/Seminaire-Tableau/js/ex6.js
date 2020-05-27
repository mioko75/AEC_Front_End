/** created by Sophie Bergeron **/

/**
 Créez un tableau de 10 cellules qui contient une chaîne de caractères à deux valeurs (Pile ou Face).
 Vous décidez manuellement des valeurs qui seront dans le tableau (ce n’est pas random)
 et affichez ces valeurs à l’aide d’une boucle Pour.

 */
//Etape 1 trouver les variables

var tabPF = ["Pile", "Face","Face","Pile","Face","Face","Pile","Pile","Pile","Face"];
//Etape 2 Lecture(demander à l'usager des données)


//Etape 3 La boucle

for(var i=0; i<tabPF.length; i++){
    document.write(tabPF[i] + "<br>");
}
//Afficher le tableau En Javascript, c'est un des seuls langages où l'on peut faire +br :

