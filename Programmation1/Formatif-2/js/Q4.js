/** created by Sophie Bergeron
 6 Février 2020 - Formatif 2**/

/**
 Question 4 : Chapitre 6 (les objets) (20 points)

 Créez une classe MonnaieVirtuelle. (1 point)

 Une MonnaieVirtuelle a les propriétés suivantes :

 nomMonnaie (exemple : Bitcoin, Ethereum, Litecoin) (1 point)
 valeurEnUSD (exemple 1 Bitcoin = 9730$) (1 point)
 actif (vous avez 2 Bitcoins) (1 point)
 actifUSD (2 bitCoins = 2*9730) (1 point)

 Votre constructeur doit prendre en paramètres nomMonnaie, valeurEnUSD et actif et calculer automatiquement actifUSD. (3 points)
 _______________________________________________________________________

 Créez une classe Portefeuille. (1 point)

 Un Portefeuille a les propriétés suivantes :

 nomProprietaire (exemple : Shany Carle) (1 point)
 tableauMonnaies (un tableau de plusieurs MonnaieVirtuelle) (1 point)

 Une méthode nommée ValeurDuPortefeuille() qui explore le tableau tableauMonnaies et retourne le total de tous les actifUSD. (4 points)
 _______________________________________________________________________

 Instanciez les monnaies suivantes :
 nomMonnaie = Bitcoin, valeurEnUSD = 9730, actif = 6 (1 point)
 nomMonnaie = Ethereum, valeurEnUSD = 194, actif = 20 (1 point)
 nomMonnaie = Litecoin, valeurEnUSD = 58, actif = 10  (1 point)

 Instanciez le portefeuille suivant :
 Shany Carle, un tableau qui contient toutes les monnaies précédentes. (1 point)
 Faites afficher la valeur de mon portefeuille. (1 point)


 */

// Créez une classe MonnaieVirtuelle. (1 point)
class MonnaieVirtuelle{
    constructor(nomMonnaie,valUS,actif){
        this.nomMonnaie = nomMonnaie;
        this.valUS = valUS;
        this.actif = actif;
    }
    actifUSD(){
       return this.valUS * this.actif;

    }
}


// Créez une classe Portefeuille. (1 point)

class Portefeuille{
    constructor(nomProprietaire){
        this.nomPoprietaire = nomProprietaire;
    }
    ValeurDuPortefeuille(){
        let valtotal =0;
        for(let i=0; i<tableauMonnaies.length; i++){
            valtotal += tableauMonnaies[i].actifUSD();
        }
        return valtotal;
    }
}
//***** ici le ValeurDuPortefeuille je ne comprend pas trop...

//Instanciez les monnaies suivantes :
//  nomMonnaie = Bitcoin, valeurEnUSD = 9730, actif = 6 (1 point)
//  nomMonnaie = Ethereum, valeurEnUSD = 194, actif = 20 (1 point)
//  nomMonnaie = Litecoin, valeurEnUSD = 58, actif = 10  (1 point)

let bitcoin = new MonnaieVirtuelle("Bitcoin","9730","6").actifUSD();
let ethereum = new MonnaieVirtuelle("Ethereum","194", "20").actifUSD();
let litecoin = new MonnaieVirtuelle("Litecoin","58", "10").actifUSD();

//Instanciez le portefeuille suivant :
//    Shany Carle, un tableau qui contient toutes les monnaies précédentes. (1 point)

let shany = new Portefeuille("Shany Carle");


// Une méthode nommée ValeurDuPortefeuille() qui explore le tableau tableauMonnaies et retourne le total de tous les actifUSD. (4 points)

let tableauMonnaies = [bitcoin,ethereum,litecoin];

let ValeurDuPortefeuille = bitcoin+ethereum+litecoin;


//Faites afficher la valeur de mon portefeuille. (1 point)

document.write("le porte-feuille de Shany vaut : " + ValeurDuPortefeuille );