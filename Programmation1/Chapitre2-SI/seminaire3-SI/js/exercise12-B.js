/** created by Sophie Bergeron **/

/**
 Calculer le prix des assurances pour un véhicule.
 Pour un garçon entre 16 et 25 ans, le prix des assurances est de 5 % de la valeur du véhicule.
 S’il est plus vieux, le taux sera de 3 %.
 Pour une fille entre 16 et 25 ans, le taux est de 3 % et de 2% pour une fille plus âgée.

 */

//Etape 1 trouver les variables
var valAuto;
var age;
var sexe;

//Etape 2 Lecture(demander à l'usager des données)

valAuto= Number(prompt("Entrer la valeur de votre voiture"));
age= Number(prompt("Entrer l'age du conducteur a assurer"));
sexe= (prompt("Veuillez entrer F pour Féminin ou M pour Masculin pour selectionner votre sexe:"));

//Etape 3 Les calcules


//Valider le nom d'usager et le mot de passe

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
