/** created by Sophie Bergeron **/

/**
 Calculer le prix des assurances pour un véhicule.
 Pour un garçon entre 16 et 25 ans, le prix des assurances est de 5 % de la valeur du véhicule.
 S’il est plus vieux, le taux sera de 3 %.
 Pour une fille entre 16 et 25 ans, le taux est de 3 % et de 2% pour une fille plus âgée.

 */

//Etape 1 trouver les variables

var RaspBerryPi = "oui";
var coutPi;
var RaspBerryPiZero = "oui";
var coutPiZero;
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
cam (prompt("Voulez-vous une cam ou non?"));
led (prompt("Voulez-vous une lumi;ere au LEDS pour les yeux ou non?"));

//Etape 3 Les calcules

livraison = total * .15;
totalMoteur =nbMoteur * 5;


//valider les choix

if (RaspBerryPi === "oui" ) {
    if(cam === "oui"){
        coutCam = 10;
    }
    else {
        coutcam = 0;
    }
if (sexe.toUpperCase() === "M") {
    if(age >= 16 && age <= 25){
        prime = (valAuto * .05);
    }
    else {
        prime = (valAuto * .03);
    }
}

else{
    if(age >= 16 && age <= 25){
        prime = (valAuto * .03);
    }
    else {
        prime = (valAuto * .02);
    }
}

document.write("Votre prime est de : " + prime);
