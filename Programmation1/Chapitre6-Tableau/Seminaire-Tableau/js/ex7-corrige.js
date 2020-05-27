/** created by Sophie Bergeron **/

/**
 À l’aide d’une boucle, créez un tableau de 1000 valeurs contenant vrai ou faux (boolean). Ces valeurs doivent être aléatoires.
 Ensuite, à l’aide d’une autre boucle, comptez le nombre de vrai et de faux et faites-les afficher.

 */
var tabVraiOuFaux = [];
var nbVrais = 0;
var nbFaux = 0;

for(var i=0; i<1000;i++){
    tabVraiOuFaux[i] = Boolean(Math.floor(Math.random() * 2));
    //console.log(tabVraiOuFaux[i]);
    if(tabVraiOuFaux[i] === true){
        nbVrais++;
    }
    else{
        nbFaux++;
    }
}
console.log("Il y a " + nbVrais + " vrais");
console.log("Il y a " + nbFaux + " faux");

