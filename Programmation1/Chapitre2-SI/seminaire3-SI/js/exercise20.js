/** created by Sophie Bergeron **/

/**
 Lire l’âge d’un individu et afficher le mot :
 « Adulte » si l’âge est >= 18 ans
 « Adolescent » si l’âge est compris entre 12 et 17 ans inclusivement
 « Enfant » si l’âge est < 12 ans.

 */

//Etape 1 trouver les variables

var age ;

//Etape 2 Lecture(demander à l'usager des données)

 age = prompt("Entrez votre age : ");

//Etape 3 Les calcules


//le if

if (age >= 18){
    document.write("vous etes un adulte");
}

else if( age >= 12 && age < 18){
    document.write("Vous êtes une Ado...rable :) ")
}

else{
    document.write("Vous êtes un enfant");
}

