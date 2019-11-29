/** created by Sophie Bergeron **/

/**
 Écrire le code qui permet de lire au clavier la valeur d’un angle d’une main de robot et d’afficher sa position.    Pour faire ce choix, utilisez la table  suivante :

 position  à afficher		angle

 Main fermée	                       0 <= angle <= 39
 Main agrippe		         40 <= angle <= 89
 Main ouverte		         90 <= angle <= 180

 Si l’angle ne contient aucune de ces valeurs, alors affichez ″Le robot est hors de contrôle″.


 */

//Etape 1 trouver les variables
var angle;

//Etape 2 Lecture(demander à l'usager des données)

angle=Number(prompt("Entrer l'angle de la main du robot ici : "));


//Etape 3 Les calcules



//Classer la note reçu

if (angle >= 0 && angle <= 60) {
    document.write("Main fermée");
}
else if (angle >= 40 &&  angle <= 89){
    document.write("Main agrippe");
}
else if (angle >= 90 &&  angle <= 100){
    document.write("Main ouverte");
}
else{
    document.write("Le robot est hors de contrôle");
}
