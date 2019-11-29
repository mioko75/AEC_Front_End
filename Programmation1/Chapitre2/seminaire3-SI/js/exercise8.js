/** created by Sophie Bergeron **/

/**
 Faire un programme qui lit le taux horaire et le nombre d’heures travaillées d’un employé. Affichez son salaire.
 (Attention, il est payé le double de son taux horaire pour toutes les heures supplémentaires travaillées.
 Une semaine de travail normale est de 40 heures.

 */

//Etape 1 trouver les variables
var nbhr;
var taux;
var dbl;
var hrsupp;
var salreg;
var salsupp;

//Etape 2 Lecture(demander à l'usager des données)

nbhr=Number(prompt("Entrer le nombre d'heure travailler cette semaine : "));
taux=Number(prompt("Entrer votre taux horaire :"));

//Etape 3 Les calcules

salreg=(taux*40);
dbl=(taux*2);
hrsupp=(nbhr-40);
salsupp=(hrsupp*dbl);

//Classer la note reçu

if (nbhr >0 && nbhr<=40) {
    document.write("votre salaire brute cette semaine est de : " + salreg);
}
else if (nbhr > 40 ){
    document.write("votre salaire brute cette semaine est de : " + (salreg+salsupp));
}
else{
    document.write("pas de paie cette semaine");
}
