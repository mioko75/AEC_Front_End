/** created by Sophie Bergeron **/

/**
 Transférer les valeurs Fahrenheit de 10 à 20 en Celsius par tranche de 1.

 */
//Etape 1 trouver les variables

var far;

//Etape 2 Lecture(demander à l'usager des données)


//Etape 3 La boucle

for (var i=10; i<=20; i++){
    far = (i *(9/5))+32;
    document.write(i + " Celsius = " + far.toFixed(2) + " Fahrenheit<br>");
}

