/** created by Sophie Bergeron **/

/**
 Trouvez TOUS les nombres de Armstrong de moins de 1000
 On dénomme nombre de Armstrong un entier naturel qui est égal à la somme des cubes des chiffres qui le composent.

 Exemple :
 153 = = 13 + 53 + 33 = 1 + 125 + 27, est un nombre de Armstrong.


 */

//Etape 1 trouver les variables

var unite;
var dizaine;
var centaine;

//Etape 2 Lecture(demander à l'usager des données)


//Etape 3 La boucle

for(var i=1;i<1000;i++){
    if (i < 10){
        unite = i;
        if ((unite*unite*unite) === i){
            document.write(i + " est un nombre de Armstrong <br>");
        }
    }
    else if (i >= 10 && i<=99){
        unite = i % 10; //Le reste de la division par 10 donne les unités
        dizaine = (i-unite) / 10;
        if((unite*unite*unite)+(dizaine*dizaine*dizaine) === i){
            document.write(i + " est un nombre de Armstrong <br>");
        }
    }
    else{
        centaine = Math.floor(i/100);
        dizaine = Math.floor((i-centaine*100) / 10);
        unite = i % 10; //Le reste de la division par 10 donne les unités
        if((unite*unite*unite)+(dizaine*dizaine*dizaine)+(centaine*centaine*centaine) === i){
            document.write(i + " est un nombre de Armstrong <br>");
        }
    }
}
