/** created by Sophie Bergeron **/

/**
 Créez un programme qui lit un nombre et affiche tous les chiffres de ce nombre séparément dans les deux sens.

 indice : lisez le nombre en string.
 var nb = “Shany”;
 nb[0] vaut la lettre S
 nb[2] vaut la lettre a

 Exemple :
 123 =
 1
 2
 3
 -------
 3
 2
 1


 */

//Etape 1 trouver les variables

var nombre = (prompt("Entrez un nombre svp")); // important de ne pas mettre le Number car c'Est une strign

//Etape 2 Lecture(demander à l'usager des données)


//Etape 3 La boucle

for(var i = 0;i<nombre.length;i++){
    document.write(nombre[i] + "<br>");
}
document.write("------------<br>");

for(var i = nombre.length-1;i>=0;i--){
    document.write(nombre[i] + "<br>");
}

