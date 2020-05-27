/** created by Sophie Bergeron **/

/**
 Lire le code de sexe d’un individu (M ou F) et afficher le sexe de l’individu par le mot correspondant (Masculin ou Féminin).
 Traiter plusieurs codes de sexe jusqu’à temps que ce code soit autre chose que M ou F.
 De plus afficher le nombre de M qui ont été entrés ainsi que le nombre de F qui ont été entrés.

 */

//Etape 1 trouver les variables

var nbM =0;
var nbF =0;
var sexe = "M";

//Etape 2 Lecture(demander à l'usager des données)


//Etape 3 La boucle

while (sexe === "M" || sexe === "F"){
    sexe = prompt("Entrez un votre sexe F ou M svp:").toUpperCase();
    if(sexe  === "M" ){
        nbM ++;
        document.write("Garcon <br>")
    }
    else if (sexe === "F"){
        nbF++;
        document.write("Fille<br>")
    }
}

document.write("Il y a " + nbM + " garcons et " + nbF + " filles");
