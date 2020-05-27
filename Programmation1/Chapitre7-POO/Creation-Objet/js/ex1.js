/** created by Sophie Bergeron **/

/**
 Créez une classe JoueurHockey.
 nom
 nbButs
 nbPasses
**/
class JoueurHockey{
    constructor(nom,nbButs,nbPasses){
        this.nom=nom;
        this.nbButs=nbButs;
        this.nbPasses = nbPasses;
    }

    Totalpt(){
        //document.write(this.nbButs + this.nbPasses);
        return (this.nbButs+ this.nbPasses);
    }

}

/**
 Instanciez :
 Sydney Crosy 454 buts 787 passes
 Mario Lemieux 690 buts 1033 passes
 Jaromir Jagr 766 buts 1155 passes
 **/

let sydney = new JoueurHockey("Sydney Crosy", 454,787);
let mario = new JoueurHockey("Mario Lemieux", 690 , 1033);
let jaromir = new JoueurHockey("Jaromir Jagr", 766,1155);

/**
 Créez une méthode nommée Total qui affiche le nombre de points (buts + passes) On doit mettre la methode à l'intérieure des {} dela class JoueurHockey
 **/


/**
 Créez une classe Equipe qui contient 3 joueurs

 Instanciez votre équipe avec vos 3 joueurs

 Créez une méthode qui s’appelle AfficherAlignement() qui affiche tous les joueurs d’une équipe.

 Créez une méthode qui s’appelle AfficherPointsTotaux() qui affiche le total de points des 3 joueurs de l’équipe (454+787+690+1033+766+1155).
 */
