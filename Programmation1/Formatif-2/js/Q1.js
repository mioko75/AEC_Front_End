/** created by Sophie Bergeron
 6 Février 2020 - Formatif 2**/

/**
 Question 1 : Chapitre 1 et 2 (opérations lecture/écriture et SI) (10 points)
 Vous devez calculer les dommages de l’attaque Darkest Lariat du pokémon Incineroar.

 Pour cela, il faut lire le type du pokémon adverse. Si c’est de type eau, les dommages seront doublés car les pokémons du type eau ont une faiblesse contre le feu.

 Il faut ensuite faire deux pile ou face. Pour cela, il faut générer un nombre aléatoire entre 0 et 1. Si c’est face (1), l’attaque fait 100 de dégâts. Si c’est faux l’attaque fait 0 dégât. Répétez les opérations pour le second lancé.

 Exemple :
 type = “eau” face face → 400 de dégâts
 type = “ténèbre” pile face → 100 dégâts

 */

//Etape 1 trouver les variables

var typeAdeversaire ;
var dommage=0;
var pileface;
var pile;
var face;


//Etape 2 Lecture(Lire le type d'adversaire = demande a l'usager)

typeAdeversaire = prompt("entrez le type d'adversaire :");

//Etape 3 Calculer les dommages de l'attaque en fonction du type

if(typeAdeversaire.toUpperCase()=== "EAU") {

    for (var i = 0; i < 2; i++) {
        pileface = Math.floor(Math.random() * 2);

        if (pileface === 1) {
            dommage += 200;

        } else {
            dommage = 0;
        }
    }
}
else {
    for (var x = 0; x < 2; x++) {
        pileface = Math.floor(Math.random() * 2);
        if (pileface === 1) {
            dommage += 100;

        } else {
            dommage = 0;
        }
    }
}

document.write("Votre Pokemon fait  " + dommage+ " en dommage ");
