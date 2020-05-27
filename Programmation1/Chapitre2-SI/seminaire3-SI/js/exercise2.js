/** created by Sophie Bergeron **/

/**
 Un marchand décide d’accorder une réduction de 15% à tout acheteur, si le montant total de ses achats est plus grand que 200.00$.
 Écrire un algorithme qui permet de calculer et d’afficher la réduction que chaque acheteur a droit, connaissant le montant total des achats.
 */
//Etape 1 trouver les variables
var achat;
var rabais;

//Etape 2 Lecture(demander à l'usager des données)

achat=Number(prompt("Entrer le montant de l'achat"));

//Etape 3 Les calcules

rabais = ((achat * 15)/100);

//Definir s'il a droit a l'escompte

if (achat >= 200) {
    document.write("votre escompte est de :" +rabais);
}

else {
    document.write("Aucun rabais");
}
