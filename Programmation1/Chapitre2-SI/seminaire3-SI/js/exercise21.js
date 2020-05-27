/** created by Sophie Bergeron **/

/**
 Calculer et afficher l’impôt provincial à charger selon le revenu imposable :
 revenu > 0 et $7000.00 inclus : 16% du revenu imposable
 > 7000 et $14000.00 inclus : $1120 + 19.5% du reste
 >14000 et $23000.00 inclus : $2485 + 21.5% du reste
 >23000 et $50000.00 inclus : $4420 + 24.5% du reste
 >50000 et + $11035 + 26% du reste.

 */

//Etape 1 trouver les variables

var revenu ;
var taux1 = 0.16;
var taux2 = 0.195;
var taux3 = 0.215;
var taux4 = 0.245;
var taux5 = 0.26;
var impot;

//Etape 2 Lecture(demander à l'usager des données)

revenu = Number(prompt("Entrez votre revenu : "));

//Etape 3 Les calcules


//le if

if (revenu > 0 && revenu <=7000){
    impot = revenu * taux1;
    document.write("Votre impot provinciale à payer est de : " + impot);
}

else if(revenu > 7000 && revenu <=14000){
    impot = 11120 + (revenu * taux2);
    document.write("Votre impot provinciale à payer est de : " + impot);
}

else if(revenu > 14000 && revenu <=23000){
    impot = 2485 + (revenu * taux3);
    document.write("Votre impot provinciale à payer est de : " + impot);
}

else if(revenu > 23000 && revenu <=50000){
    impot = 4420 + (revenu * taux4);
    document.write("Votre impot provinciale à payer est de : " + impot);
}

else{
    impot = 11035 + (revenu * taux5);
    document.write("Votre impot provinciale à payer est de : " + impot);
}

