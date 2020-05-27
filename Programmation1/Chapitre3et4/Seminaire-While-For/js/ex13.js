/** created by Sophie Bergeron **/

/**
 Afficher les nombres impairs de 1 à 49, et mettre 5 valeurs par ligne.

 */
//Etape 1 trouver les variables

var noimpair = 0;

//Etape 2 Lecture(demander à l'usager des données)


//Etape 3 La boucle

for (var i=1; i<=49; i+=2){
    document.write(i + " ");
    noimpair++;
    if(noimpair === 5){
        document.write ("<br>");
        noimpair = 0;
    }
}


