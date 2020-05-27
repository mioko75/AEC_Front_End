/** created by Sophie Bergeron **/

/**
 Faire afficher 1 3 5 7 9 11 13 sur 13 lignes

 */

//Etape 1 trouver les variables



//Etape 2 Lecture(demander à l'usager des données)


//Etape 3 La boucle

for(var ligne = 0;ligne<13;ligne++){
    for(var i =1;i<=13;i+= 2){
        document.write(i + " ");
    }
    document.write("<br>");
}