/** created by Sophie Bergeron **/

/**
 Transférer les valeurs Fahrenheit de -40 à 40 en Celsius par tranche de 5. (Celsius = 5/9(fahrenheit-32))


 */
//Etape 1 trouver les variables

var celsius;

//Etape 2 Lecture(demander à l'usager des données)


//Etape 3 La boucle

for (var i=-40; i<=40; i+=5){
    celsius = (5/9)*(i-32);
    document.write(i + " Fahrenheits = " + celsius.toFixed(2) + " Celsius<br>");
}

