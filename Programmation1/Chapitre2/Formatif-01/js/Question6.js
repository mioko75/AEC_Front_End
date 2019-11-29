/** created by Sophie Bergeron **/

/**
 Vous devez compléter un programme qui permet de calculer la facture pour l’achat d’un robot imprimable en 3 dimensions.

 L’usager doit sélectionner le contrôleur
 55$ pour un RaspBerry Pi
 15$ pour un Raspberry Pi Zero

 L’usager doit décider du nombre de moteurs entre 2 et 24.
 Un moteur coûte 5$

 L’usager décide s’il veut une caméra USB ou non
 La caméra coûte 35$

 L’usager décide s’il veut une matrice de LEDS pour les yeux
 La matrice coûte 10$ pour les deux yeux.

 Il faut ensuite ajouter 20$ pour le filament 3D.
 Il faut ajouter 15$ pour la batterie USB.

 RasPiBot aimerait que votre programme affiche

 un résumé de l’achat
 ex: “Robot avec Raspberry Pi Zero, 10 moteurs, pas de caméra, pas de matrice de LEDS.”
 le prix
 le prix avec la livraison de 15%.


 */

//Etape 1 trouver les variables

var RaspBerryPi = "oui";
var coutPi = 55;
var NomPi = "RaspBerry Pi";
var RaspBerryPiZero = "oui";
var coutPiZero = 15;
var PiZero = "Raspberry Pi Zero";
var nbMoteur;
var coutMoteur;
var cam = "oui";
var coutCam;
var led = "oui";
var coutLed;
var coutfilament = 20;
var coutbatterie = 15;
var total;
var livraison;


//Etape 2 Lecture(demande à l'usager)

RaspBerryPi= (prompt("Voulez-vous le controleur RaspBerry Pi ou non?"));
RaspBerryPiZero= (prompt("Voulez-vous le controleur RaspBerry Pi Zero ou non?"));
nbMoteur= Number(prompt("Entrer le nombre de moteur désirer entre 2 et 24"));
cam (prompt("Voulez-vous une cam oui ou non?"));
led (prompt("Voulez-vous une lumi;ere au LEDS pour les yeux oui ou non?"));

//Etape 3 Les calcules

livraison = total * .15;
totalMoteur =nbMoteur * 5;


//valider les choix

if (RaspBerryPi === "oui" ) {
    if(cam === "oui"){
        coutCam = 35;
        if(led === "oui"){
            coutLed = 10;
        }
        else {
            coutLed = 0;
        }
    }
}

else {
    if(cam === "oui"){
        coutCam = 35;
        if(led === "oui"){
            coutLed = 10;
        }
        else {
            coutLed = 0;
        }
    }
}

document.write("Alors pour votre Robot le coût est de " + (RaspBerryPi + coutCam + coutbatterie + coutfilament + coutLed + coutMoteur ));
