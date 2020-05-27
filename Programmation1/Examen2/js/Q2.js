/** créé par Sophie Bergeron
    15 février 2020 - Examen 2**/

/**
 QUESTION 2 (5 points)

 À l’aide de 2 for imbriqués et des variables nbLignes, nbColonnes et nb, reproduisez le résultat suivant :


 */

let nb = 1000;
let nbLignes = 10;
let nbColonnes = 20;

//Etape 2 Lecture(demander à l'usager des données)

//Faire la boucle

for(let i=0;i<nbLignes;i++){
    for (let x=0;x<nbColonnes; x++){
        document.write(nb + " ");
        nb -=5;
    }
    document.write("<br>");
}

