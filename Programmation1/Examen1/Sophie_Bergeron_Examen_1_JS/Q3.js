/** created by Sophie Bergeron
 5 décembre 2019 - Examen 1**/

/**
 QUESTION 3 (6 points)
 Vous devez compléter un programme qui permet de calculer une facture pour l’achat d’une
 grande Pizza.
 1. Le prix de base de la Pizza au fromage est de 10$.
 2. Si on veut des légumes, il faut ajouter 5$ au prix initial.
 3. Si on veut du pepperoni, il faut ajouter 8$ au prix initial.
 4. Si on veut de la sauce, il faut ajouter 1$ par personnes.
 5. Le TPS s’élève à 5% du prix sans les taxes.
 6. Le TVQ s’élève à 9,975% du prix sans les taxes.
 ● Produisez une facture qui résume l’achat, le prix avant et après les taxes.
 */

//Etape 1 Trouver les variables

var nbpers;
var legumes;
var legumesTexte;
var pepperoni;
var pepTexte;
var sauce;
var sauceTexte;
var tps;
var tvq;
var stotal=10;
var Total;

//Etape 2 Lecture(demander à l'usager de faire des choix)

legumes = prompt("Voulez vous des légumes sur votre pizza ? OUI ou NON :");
pepperoni = prompt("Voulez vous des pepperoni sur votre pizza ? OUI ou NON :");
sauce = prompt("Voulez vous de la sauce sur votre pizza ? OUI ou NON :");
nbpers = Number(prompt("Vous voulez de la sauce pour combien de personnes? "));

//Etape 3 Calcul des informations reçu par le client

if(legumes.toUpperCase() === "OUI"){
    stotal+=5;
    legumesTexte = "Avec légumes";
}
else{
    legumesTexte = "Sans légumes";
}

if(pepperoni.toUpperCase() === "OUI"){
    stotal+=8;
    pepTexte = "Avec pepperoni";
}
else{
    pepTexte = "Sans pepperoni";
}

if(sauce.toUpperCase() === "OUI"){
    stotal+=(+1*nbpers);
    sauceTexte = "Avec sauce";
}
else{
    sauceTexte = "Sans sauce";
}

//Calcul des taxes

tps = stotal * 0.05;
tvq = stotal * 0.0975;
Total = stotal+tps+tvq;

//Affichage de la facture à l'écran

document.write( "Résumé de votre commande: " +legumesTexte +" , "+ pepTexte + " , "+ sauceTexte +" Le prix est de : " + stotal + "  Plus la TPS " + tps.toFixed(2) + " Plus la TVQ " + tvq.toFixed(2)+ "  Pour un total de  " + Total.toFixed(2));
