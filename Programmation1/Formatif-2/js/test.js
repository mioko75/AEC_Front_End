//Etape 1 trouver les variables

var typeAdeversaire ;
var dommage=0;
var pileface;
var pile;
var face;


//Etape 2 Lecture(Lire le type d'adversaire = demande a l'usager)

typeAdeversaire = prompt("entrez le type d'adversaire :");

//Etape 3 Calculer les dommages de l'attaque en fonction du type


    for (var i = 0; i < 2; i++) {
        pileface = Math.floor(Math.random() * 2);

        if (pileface === 1) {
            dommage += 100;

        } else {
            dommage = 0;
        }
    }

if(typeAdeversaire.toUpperCase()=== "EAU") {
    dommage*2;
}

document.write("Votre Pokemon fait  " + dommage+ " en dommage ");
