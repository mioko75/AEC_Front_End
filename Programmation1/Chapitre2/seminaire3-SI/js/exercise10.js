/** created by Sophie Bergeron **/

/**
 Lire un nombre entier au clavier et afficher le nom du mois correspondant. Si le nombre saisi ne correspond pas à un mois,
 affichez le message suivant : « Mois invalide ».

 */

//Etape 1 trouver les variables
var nb;

//Etape 2 Lecture(demander à l'usager des données)

nb=Number(prompt("Entrer le mois en chiffre"));

//Etape 3 Les calcules


//Valider le nom d'usager et le mot de passe

if (nb === 1) {
    document.write(nb + " est le mois de janvier");
}
else if (nb === 2) {
    document.write(nb + " est le mois de Février");
}
else if (nb === 3) {
    document.write(nb + " est le mois de Mars");
}
else if (nb === 4) {
    document.write(nb + " est le mois d'Avril");
}
else if (nb === 5) {
    document.write(nb + " est le mois de Mai");
}
else if (nb === 6) {
    document.write(nb + " est le mois de Juin");
}
else if (nb === 7) {
    document.write(nb + " est le mois de Juillet");
}
else if (nb === 8) {
    document.write(nb + " est le mois d'Août");
}
else if (nb === 9) {
    document.write(nb + " est le mois de Septembre");
}
else if (nb === 10) {
    document.write(nb + " est le mois d'Octobre");
}
else if (nb === 11) {
    document.write(nb + " est le mois de Novembre");
}
else if (nb === 12) {
    document.write(nb + " est le mois de Décembre");
}
else{
    document.write("Mois invalide");
}
