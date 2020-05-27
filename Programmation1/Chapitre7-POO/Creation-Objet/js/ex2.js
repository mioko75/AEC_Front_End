/** created by Sophie Bergeron **/

/**
 Affichez un décompte de 1000 à 55.
 */
class Cylindre {
    constructor (hauteur, rayon){
        this.hauteur = hauteur;
        this.rayon = rayon;
    }
}

let monCylindre = new Cylindre(10, 3);
document.write(monCylindre.hauteur);