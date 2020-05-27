/** created by Sophie Bergeron
 6 Février 2020 - Formatif 2**/

/**
 Question 2 : Chapitre 3-4 (les boucles) (10 points)

 Utilisez une variable nommée nb et 2 boucles for imbriquées pour produire le résultat suivant à l’aide  d’un document.write.

 */

//Etape 1 trouver les variables

var conteur = 0;

//Etape 2 Lecture(demander à l'usager des données)

//Faire la boucle

for(var i=0;i<=995;i+=5){
    document.write(i + " ");
    conteur++;
    if(conteur === 20){
        document.write("<br>");
        conteur = 0;
    }
}

