/** created by Sophie Bergeron
 6 Février 2020 - Formatif 2**/

/**
 Question 3 : Chapitre 5 (les tableaux) (10 points)

 Créez un tableau nommé tabChance qui contient 100 nombres aléatoires entre 1 et 200. (4 points)
 Demandez un nombre à l’usager entre 1 et 200. (1 point)
 Parcourez le tableau pour savoir si le nombre se trouve dans le tableau et confirmez la réponse à l’usager. (5 points)

 */

//Etape 1 Créer un tableau nommé tabChance

var tabChance = [];
var nbusager;
var nbAleatoire;
var conteur = 0;
var succes = 0;

//Etape 2 Demandez un nombre à l’usager entre 1 et 200. (1 point)

nbusager = Number(prompt("Entrer un nombre entre 1 et 200 : "));

//Etape 3 La boucle qui contient 100 nombres aléatoires entre 1 et 200. (4 points)

for(var i=0; i<100; i++){
        nbAleatoire = (Math.floor(Math.random() * 200 +1));
        tabChance.push(nbAleatoire);
        conteur ++;
}

// Vérifier si le chiffre est dans le tableau pour valider mon code

console.log(tabChance);

//Parcourez le tableau (de 100 nombre) pour savoir si le nombre se trouve dans le tableau et confirmez la réponse à l’usager. (5 points)

for(var x=0;x <100;x++){
    if (nbusager === tabChance[x]){
        succes ++;
        var pos = tabChance.indexOf(nbusager);
    }
}

//...Et afficher la réponse

if (succes ===1) {
    document.write("le chiffre que vous avez choisis ( " + nbusager+ " ) ce trouve à la position " + pos + " du tableau <br>");
    }
// l'art de se compliquer la vie et de finalement relire la question pour constater que... j'avais mal lu (j'ai egalement mis son indice )
else {
    document.write("Le chiffre " + nbusager + " ne se trouve pas dans le tableau <br>");
    }
