/** créé par Sophie Bergeron
    15 février 2020 - Examen 2**/

/**
 QUESTION 1 (5 points)
 ●	Vous demandez au client le type de Jeep
        - Sport 33290$
        - SportS 37240$
        - Havane 39235).
 ●	Vous demandez ensuite le terme (24, 48, 60 ou 84) mois.
 ●	Vous demandez la couleur, si c’est rouge ou vert, ajoutez 1399$ au prix du véhicule.
 ●	Vous demandez si la transmission est manuelle (0$), automatique (1500$) ou automatique 8 vitesses (2400$).

 ●	Calculez une taxe de 15%.
 ●	Le taux d’intérêt est toujours 0%
 ●	Affichez le paiement mensuel incluant la taxe et un résumé de la transaction.


 */

//Etape 1 trouver les variables

var type;
var terme ;
var couleur ;
var transmission;
var stotal = 0;
var taxe ;
var msgtype;
var msgterme;
var msgcouleur;
var msgtransmission;
var total;
var mensualite;

//Etape 2 Lecture(demander à l'usager de faire des choix sur son achat)

type=prompt("Bonjour, veuillez entrer le type de Jeep que vous souhaité Sport, SportS ou Havane : ");
terme=Number(prompt("maintenant, veuillez entrer le nombre de mois que vous désirer faire les versements (24, 48, 60 ou 84) : "));
couleur=prompt("Veuillez entrer la coueleur choisis à noter qu'il y a une surchanrge pour le rouge et le vert de 1399 $ : ");
transmission=prompt("Et finalement, veuillez entrer le type de transmission soit manuelle (0$), automatique (+ 1500$) ou automatique 8 vitesses (+ 2400$): ");

//Calculer le prix du véhicule en fonction des options choisies

//le type si l'usager choisis rien ou inscrit une niaiserie... le vehicule de base sera imposé!


if(type.toUpperCase()=== "SPORTS"){
    stotal += 37240;
    msgtype = "Vous avez choisi le Jeep Wrangler SportS au coût de 37240 $";
}
else if(type.toUpperCase()=== "HAVANE"){
    stotal += 39235;
    msgtype = "Vous avez choisi le Jeep Wrangler Havane ED. Noir au coût de 39235 $";
}
else{
    stotal += 33290;
    msgtype = "Vous avez choisi le Jeep Wrangler Sport de base au coût de 33290 $";
}

//la couleur

if(couleur.toUpperCase() === "ROUGE" || couleur.toUpperCase() === "VERT"){
    stotal += 1399;
    msgcouleur = "Vous avez choisi le vert ou le rouge avec un frais de 1399 $";
}
else{
    msgcouleur = "Vous avez choisi une couleur standard sans frais supplémentaire";
}

//la transmission ... si l'usager choisis rien... l'automatique de base lui sera imposé!

if(transmission.toUpperCase() === "AUTOMATIQUE"){
    stotal += 1500;
    msgtransmission = "Vous avez choisis la transmission automatique avec un frais de 1500 $";
}
else if(transmission.toUpperCase()=== "AUTOMATIQUE 8 VITESSES"){
    stotal += 2400;
    msgtransmission = "Vous avez choisis la transmission automatique 8 vitesses avec un frais de 2400 $";
}
else{
    msgtransmission  = " Vous avez choisi la transmission manuelle sans frais supplémentaire";
}

//le terme

if(terme === 24){
    terme = 24;
    msgterme = "24 mois";
}
else if(terme === 48){
    terme = 48;
    msgterme = "48 mois";

}
else if(terme === 60){
    terme = 60;
    msgterme = "60 mois";

}
else if(terme === 84){
    terme = 84;
    msgterme = "84 mois";

}
else{
    terme = 0;
    msgterme = "vous payer en un seul versement";
}

//Calcul des taxes

taxe = stotal * 0.15;

//calcul total

total = stotal + taxe;

//calcul mensualité

mensualite = total / terme;

//Affichage de la facture à l'écran

document.write( "Le total de votre achat est de : " + stotal +" + " +taxe.toFixed(2) + " pour un grand total de " + total.toFixed(2));

document.write( "<br> Votre versement mensuelle est de: " +mensualite.toFixed(2) + " $ par mois pendant " +msgterme+ "<br> Ci-joint, le détail de votre achat:");

document.write( "<br> " + msgtype + "<br> "+ msgcouleur +"<br> "+ msgtransmission);



