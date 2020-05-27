/** created by Sophie Bergeron **/

/**
 Afficher le montant et la taxe de 9% pour les montants de $5.00 à $100.00 par tranche de $5.00.

 */
//Etape 1 trouver les variables

var mnt;

//Etape 2 Lecture(demander à l'usager des données)


//Etape 3 La boucle

for (var i=5; i<=100; i+=5){
    mnt = ((i *9)/100);
    document.write("Pour le montant de "+ i + " la taxes de 9% est de (" + mnt + " ) ce qui egale a "+(mnt+i )+ "<br>");
}

