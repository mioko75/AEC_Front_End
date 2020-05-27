/** created by Sophie Bergeron **/

/**
 Faire un programme qui affiche 100 nombres aléatoires 0 ou 1 et compter le nombre de 0 et de 1.
 */
//Etape 1 trouver les variables

var nb0 = 0;
var nb1 = 0;
var nbAleatoire = 0;

//Etape 2 Lecture(demander à l'usager des données)


//Etape 3 La boucle

for(var i=0;i < 100; i++){
    nbAleatoire = Math.floor(Math.random() * 2);

    if(nbAleatoire === 1){
        nb0++;
    }
    else {
        nb1++;
    }
}

document.write("Il y a  : " + nb0 + " 0 <br>");
document.write("Il y a : " + nb1 + " 1 <br>");

