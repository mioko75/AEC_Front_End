/** created by Sophie Bergeron **/

/**
 Afficher les nombres de 1 à 10 avec le carré et le cube de chacun de ces nombres.

 */
//Etape 1 trouver les variables

var carre;
var cube;


//Etape 2 Lecture(demander à l'usager des données)


//Etape 3 La boucle

for (var i=1; i<=10; i++){
    carre = Math.pow (i,2);
    cube = Math.pow (i,3);
    document.write(i + "au carré égale = "+ carre + " et au cube il égale : " + cube +  "<br>");
}

