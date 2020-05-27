/** created by Sophie Bergeron **/

/**
 Le Service de la Qualité de l’Environnement possède trois listes de noms d’industries reconnues pour leur haut taux de pollution
 atmosphérique. L’indice de pollution atmosphérique dépend de plusieurs facteurs et il est calculé régulièrement.

 L'indice de pollution varie de 0 à 1. Une valeur comprise entre 0,04 et 0,31 est dite normale.
 Si sa valeur de l’indice dépasse 0,31 les industries de la liste A sont avisées de suspendre leurs activités jusqu’à ce que
 la valeur de l’indice redevienne normale. Si l’indice excède 0,40, on avise également la liste B et s’il excède 0,50,
 on avise aussi les industries de la liste C. Pour toutes les autres valeurs, écrire « Valeur impossible ».

 Faire le programme qui lit la valeur de l’indice de pollution atmosphérique et indique quelle liste devrait être affichée.

 */

//Etape 1 trouver les variables

var indice;

//Etape 2 Lecture(demander à l'usager des données)

indice = Number(prompt("Veuillez entrez l'indice de pollution compris entre 0 et 1 : "));

//Etape 3 Les calcules


//le if

if (indice >= 0.04 && indice <= 0.31){
    document.write("Les entreprises de la liste A sont avisées de suspendre leurs activités jusqu’à ce que la valeur de l’indice redevienne normale");
}
else if (indice >= 0.40 && indice < 0.50){
    document.write("Les entreprises de la liste A et B sont avisées de suspendre leurs activités jusqu’à ce que la valeur de l’indice redevienne normale");
}
else if (indice >= 0.50 && indice <= 1){
    document.write("Les entreprises de la liste A, B et C sont avisées de suspendre leurs activités jusqu’à ce que la valeur de l’indice redevienne normale");
}
else{
    document.write("Valeur impossible");
}