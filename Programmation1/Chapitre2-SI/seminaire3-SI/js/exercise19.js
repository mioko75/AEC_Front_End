/** created by Sophie Bergeron **/

/**
 Lire le montant de vente et afficher le montant d’escompte correspondant sachant que le taux d’escompte est de 12%
 et n’est calculé que sur les montants supérieurs ou égaux à $500.00.



 */

//Etape 1 trouver les variables

var prix = "";
var rabais;
var total = "";


//Etape 2 Lecture(demander à l'usager des données)

prix = prompt("Entrez le prix de ventes");

//Etape 3 Les calcules

rabais =  prix * .12;
total = prix - rabais;

//le if

if (prix >= 500){
    document.write("votre rabais pour une achat de " + prix + "$ est de " + rabais + " pour un total de " +total);
}

else{
    document.write("Désole aucun rabais disponible pour les achats de moins de 500$");
}

