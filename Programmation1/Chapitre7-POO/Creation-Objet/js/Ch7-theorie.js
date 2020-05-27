/** created by Sophie Bergeron **/
//Création d'objets
/**
 Créez un objet nommé personne3 à l'aide de la méthode 1 et entrez vos informations personnelles.
 */
let personne1 = {
    prenom : "Shany",
    nom : "Carle",
    age : 38
};

let personne2 = {};
//Instanciation de l'objet personne2 (on donne des valeurs aux variables)
personne2.prenom = "Laurent";
//1000 lignes de code
personne2.nom = "Drolet";
personne2.age = 23; // pas obliger de mettre les guillements sur au nombre

let personne3 = {
    prenom : "Sophie",
    nom : "Bergeron",
    age : 43 // pas de virgule ici car c'est le dernier de la série de cette fonction.
};

document.write(personne3.nom + personne3.prenom + personne3.age);
/** on doit afficher la propriété de la variable let si non le programme ne peut pas le lire il nous
 * inditque [objet, objet] pour nous indiquer que c'est un objet.
 */

let personne4 = {};
personne2.prenom = "Aurélie";
personne2.nom = "Ronse";
personne2.age = 42;

let pokemon1 = {
    nom : "Pikachu",
    type : "Pokemon",
    hp : 50,
    attaque1 : "Agility",
    attaque2 : "Thunder",
    degat1 : 0,
    degat2 : 20
};

let pokemon2 = {};
    pokemon2.nom = "Grenika";
    pokemon2.type = "Pokemon";
    pokemon2.hp = 230;
    pokemon2.attaque1 = "Flurry";
    pokemon2.attaque2 = "Haze Hunter";
    pokemon2.degat1 = 110; // on a le droit d'ajouter des calculs
    pokemon2.degat2 = 130;

class CartesPokemon{
    constructor(nom,type,hpoint,att1,att2,deg1,deg2){
        this.nom = nom;
        this.type = type;
        this.hpoint = hpoint;
        this.attaque1 = attaque1;
        this.attaque2 = attaque2;
        this.degat1 = degat1;
        this.degat2 = degat2;
    }
}

let cartepickachu = new CartesPokemon ("Pickachu", "Pokemon",50, "Agility", "Thunder", 0 , 20);
let carteGrenika = new CartesPokemon("Grenika", "eau", 230, "Flurry", "Haze Hunter", 110, 130);


class PersonneV2{

    constructor(prenom,nom,age) {
        this.prenom = prenom;
        this.nom = nom;
        this.age = age;
    }

    Salutation(){
        return('Bonjour ! Je m\'appelle ' + this.prenom + " " + this.nom + '.');
    }



}

let shany = new PersonneV2("Shany", "Carle" , 38);
let laurent = new PersonneV2("Laurent", "Drolet" , 23);
let mj = new PersonneV2("Michael","Jordan",45);

let salutationShany = shany.Salutation();
