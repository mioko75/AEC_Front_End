/** créé par Sophie Bergeron
    15 février 2020 - Examen 2**/

/**
 QUESTION 4 (10 points)

 L’AGENCE DE VOYAGES

 ●	Créez une classe Activité
    -Une activité a un nom
    -Une activité a un coût

 ●	Créez une classe Voyage
    -Un voyage a une destination
    -Un voyage a prix pour billet avion
    -Un voyage un tableau d’activités

 ●	Créez une classe Personne
    -Une personne a un nom
    -Une personne a un voyage

 ●	Instanciez l’activité “Golden Knights hockey” 125$
 ●	Instanciez l’activité “Raiders football” 200$
 ●	Instanciez l’activité “Tournoi de poker” 500$

 ●	Instanciez le voyage “Las Vegas” 400$ avec les 3 activités précédentes

 ●	Instanciez la personne “Shany Carle” avec le voyage précédent

 ●	Faites afficher toutes ces informations à l’écran. Vous devez en plus afficher le coût total pour le voyage (le billet d’avion et les activités).

 */

//  Creer la class Activité

class Activite {
    constructor(nomact, coutact) {
        this.nomact = nomact;
        this.coutact = coutact;
    }
}

//  Créez une classe Voyage incluant un tableau d activité

class Voyage{
    constructor(destination, prix, tabActivite){
        this.destination = destination;
        this.prix = prix;
        this.tabActivite = tabActivite;
    }

    // Attention de ne pas mettre le prix du billet dans la boucle d'activite car il s'additionne autant de fois qu'il y a d'activité

    Valeurtotal(){
        let valeur = 0;
        for(let i=0; i<this.tabActivite.length; i++){
            valeur += (this.tabActivite)[i].coutact;
        }
        valeur += this.prix;
        return valeur;
    }
}

//  Créez une classe Personne

class Personne{
    constructor(nomPersonne, nomVoyage){
        this.nomPersonne = nomPersonne;
        this.nomVoyage = nomVoyage;
    }
}

//  Instanciez Les activitées

let hockey = new Activite("Golden Knights hockey", 125);
let football = new Activite("Raiders football", 200);
let poker = new Activite("Tournoi de poker", 500);

//  Creer le tableau activités

let tabAct = [hockey, football, poker];

//  Est-ce que l'on pourra voir ou revoir comment afficher ce tableau en tableau dans document.write ??? j'y arrive pas
//  Par contre, j'arrive a le faire afficher dansla console en cliquant la fleche pour le derouler.

console.log(tabAct);

//  Instanciez le voyages

let vegas = new Voyage("Las Vegas", 400, tabAct);

//  Instanciez le voyageur

let voyageur1 = new Personne("Shany Carle", vegas.destination);

document.write("voici le details du voyages: <br>" );

document.write("<br> Voyageur : " + voyageur1.nomPersonne + "<br> Direction : " +vegas.destination + "<br>");

document.write("<br> voici le details  des activité: <br>");

document.write("<br>"+ hockey.nomact + " " + hockey.coutact + " $<br>");
document.write( football.nomact + " " + football.coutact + " $<br>");
document.write( poker.nomact + " " + poker.coutact + " $<br>");

document.write("<br> Pour un cout total de : " + vegas.Valeurtotal() + " $ incluant le billet d'avion et les activités" );

