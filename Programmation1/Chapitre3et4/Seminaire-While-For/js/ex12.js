/** created by Sophie Bergeron **/

/**
 Le premier jour de l'ouverture de votre compte, vous déposez .01 .
 À chaque jour pendant 10 jours, vous déposez le double de la veille. Affichez pour chaque jour, le numéro du jour,
 le montant déposé et le solde de votre compte.

 */
//Etape 1 trouver les variables

var depot = 0.01;
var total = 0;


//Etape 2 Lecture(demander à l'usager des données)


//Etape 3 La boucle

for (var i=1; i<=10; i++){
    total += depot;
    document.write("Jour no " + i + " dépôt de :  "+ depot + " pour un total actuel de : " + total.toFixed(2) +  "<br>");
    depot=depot*2
}
