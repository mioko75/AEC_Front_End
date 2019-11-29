/** created by Sophie Bergeron **/

/**
 Lire un degré de température. Si la température est comprise entre -40 et -10 écrire « HAAAAAAAAA! Il fait froid».
 Sinon, écrire « Enfin une belle journée! ».

 */

//Etape 1 trouver les variables
var temperature;


//Etape 2 Lecture(demander à l'usager des données)

temperature=Number(prompt("Entrer la temperature ressentit : "));

//Etape 3 Les calcules



//Evaluer la temperature

if (temperature >= -40 && temperature <= -10 ) {
    document.write("HAAAAAAAAA! Il fait froid");
}
else if (temperature > -10 && temperature <= 30 ){
    document.write("Enfin une belle journée!");
}
else{
    document.write("On va tous mourir");
}
