/** créé par Sophie Bergeron
    15 février 2020 - Examen 2**/

/**
 QUESTION 3 (10 points)

 LE GÉNÉRATEUR DE LETTRES ALÉATOIRES

 ●	Créez un tableau nommé tabNombres de 10000 cellules.
 ●	Remplissez toutes les cellules de ce tableau de nombres aléatoires entre 65 et 90 inclusivement.

 ●	Créez un second tableau nommé tabLettres de 10000 cellules.
 ●	Vous devez remplir ce tableau à partir du tableau précédent en y inscrivant le caractère unicode correspondant au chiffre stocké dans le tableau tabNombres au même indice.
 ______________________________________________________________________________

 Une fois que votre tableau tabLettres est généré, vous devez répondre aux questions suivantes :
 ●	Affichez le nombre de lettres E dans le tableau.
 ●	Affichez le nombre de voyelles (la somme du nombre de A E I O U Y)
 ●	Affichez si oui ou non la séquence de lettres “DAD” se retrouve dans le tableau.
 ○	Si oui, indiquez l’indice où débute le mot DAD.
 ○	Une fois le mot trouvé, vous pouvez cesser la recherche (pas obligé de trouver tous les mots DAD)

 */

//Etape 1 Trouver les variables

let nbAleatoire;
let tabNombres = [];
let tabLettres = [];
let nbE = 0;
let nbVoyelles= 0;
// let pos;
let seqDAD=0;

//  Créez un tableau nommé tabNombres de 10000 cellules.
//  Remplir toutes les cellules de ce tableau de nombres aléatoires entre 65 et 90 inclusivement.

for(let i=0; i<1000; ){
    nbAleatoire = (Math.floor(Math.random() * 100 +1));
    if (nbAleatoire >= 65 && nbAleatoire <= 90){
        tabNombres.push(nbAleatoire);
        i ++;
    }
}

// Afficher pour valider mon tableau

console.log(tabNombres);

//  Créez un second tableau nommé tabLettres de 10000 cellules.
//  Remplir ce tableau à partir du tableau précédent en y inscrivant le caractère unicode correspondant au chiffre stocké
//  dans le tableau tabNombres au même indice.

for(let l=0;l<tabNombres.length;l++){
    tabLettres.push(String.fromCharCode(tabNombres[l]));
}

// Afficher pour valider que mon tableau represente bien les lettre des nombres precedents

console.log(tabLettres);

//  Affichez le nombre de lettres E dans le tableau.

for(let e=0; e<tabLettres.length; e++){
    if (tabLettres[e] ==="E"){
        nbE ++;
    }
}
document.write("il y a " + nbE + " E dans ce tableau.");

//	Affichez le nombre de voyelles (la somme du nombre de A E I O U Y)

for(let v=0; v<tabLettres.length; v++){
    if (tabLettres[v] ==="A" || tabLettres[v] ==="E" || tabLettres[v] ==="I" ||tabLettres[v] ==="E" ||tabLettres[v] ==="O" || tabLettres[v] ==="U" || tabLettres[v] ==="Y" ){
        nbVoyelles ++;
    }
}
document.write("<br> il y a " + nbVoyelles + " voyelles dans ce tableau.");

//  Affichez si oui ou non la séquence de lettres “DAD” se retrouve dans le tableau.

for(let d=0; d<1000; d++){
    if (tabLettres[d] ==="D" && tabLettres[d+1] ==="A" && tabLettres[d+2] ==="D"){
        seqDAD ++;
        dad=d;
        // si je met : dad=tabLettres[d]; ca me donne D comme réponse... En enlevant le tabLettres[] pour conserver seulement le d ca fonctionne la reponse est bien l'indice
        // pour sortir le d de ma boucle et le faire afficher dans mon si en bas, je lui donne une deuxieme variable appelé dad
       // pos = tabLettres.indexOf(dad); --- me retourne toujours la position du premier "D"...
        break ; // brise le cycle dès que la reponse est trouvé
    }
}

// Si oui, indiquez l’indice où débute le mot DAD.

if (seqDAD === 1 ){
    document.write("<br> La première lettre de la séquence DAD ce positionne a l'indice " + dad + " de ce tableau.");
}
else {
    document.write("<br> Il n'y a pas de séquence DAD dans ce tableau.");
}
