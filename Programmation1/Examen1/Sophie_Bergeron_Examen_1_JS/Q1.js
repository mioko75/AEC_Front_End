/** created by Sophie Bergeron
 5 décembre 2019 - Examen 1**/

/**
 QUESTION 1 (4 points)
 Le prix saisonnier d’un billet pour la ronde est de 50$. Toutefois, il y a des possibilités de rabais
 pour des inscriptions en groupe :
 - Aucun rabais pour moins de 10 personnes.
 - 10 personnes et plus, 5% de rabais.
 - 20 personnes et plus, 10% de rabais.
 - 30 personnes et plus, 15% de rabais.
 - 40 personnes et plus, 20% de rabais.
 Écrivez un programme qui demande, pour une inscription donnée, le nombre de personnes et
 affichera le montant de l’inscription à la fin.

 */

//Etape 1 trouver les variables

var nbpersonne;
var rabais ="";
var coutbillet ;
var total;

//Etape 2 Lecture(demander à l'usager des données)

nbpersonne=Number(prompt("Bonjour, veuillez entrer le nombre de personnes désirant acheter un billet pour la ronde: "));

//Etape 3 Les calcules

coutbillet = (50 - rabais) ;
total = (coutbillet * nbpersonne);

//Calculer le rabais en fonction du nombre de personne

if (nbpersonne >= 10){
    if (nbpersonne >= 10 &&  nbpersonne < 20){
        rabais = (50 * 0.05);
    }
    else if (nbpersonne >= 20 &&  nbpersonne < 30){
        rabais = (50 * 0.1);
    }
    else if (nbpersonne >= 30 &&  nbpersonne < 40){
        rabais = (50 * 0.15);
    }
    else {
        rabais = (50 * 0.2);
    }
    coutbillet = (50 - rabais) ;
    total = (coutbillet * nbpersonne);
    document.write("Vous bénificiez d'un rabais de " + rabais + " $ par personne soit un coût de " + coutbillet + " $ par billet pour un total de " + total + " $ pour le groupe.");
}

else{
    document.write("Désolé, Aucun rabais disponible pour les groupes de moins de 10 personnes.  Il vous en coûteras donc " + coutbillet + "$ par personne, pour un total de " + total + " $ pour le groupe.");
}




