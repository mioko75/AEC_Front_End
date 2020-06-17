import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import './App.css';
import { RepertoireAlbums } from "./RepertoireAlbums";

const tabAlbum = [
  {
    src: require("../img/Albums/Album-Alain-LaFete.jpg"),
    alt: "Alain Francois La Fête",
    title: "Alain Francois La Fête",
    titre: "La Fête",      
    artiste:"Alain-François",   
    chansons: [
      {
        nom: "Le reel à Lou",
      },
      {
        nom: "Chanson à répondre",
      },
      {
        nom: "Partons la mer est belle",
      },
      {
        nom: "Trop vite",
      },
      {
        nom: "Le Frigidaire",
      },
      {
        nom: "À la claire fontaine",
      },
      {
        nom: "Heureuex grace a lui",
      },
      {
        nom: "Gaulin",
      },
      {
        nom: "Top net",
      },   
      {
      nom: "Mon oncle Edmond"
      },
    ]
  },
  {
    src: require("../img/Albums/Album-Alain-PorteBonheur.jpg"),
    alt: "Alain Francois Porte-Bonheur",
    title: "Alain Francois Porte-Bonheur",
    titre: "Porte Bonheur",      
    artiste:"Alain-François",   
    chansons: [
      {
        nom: "Une prière",
      },
      {
        nom: "Des maringouins",
      },
      {
        nom: "Bas de laine",
      },
      {
        nom: "Chansson d'amour",
      },
      {
        nom: "Cool papa cool",
      },
      {
        nom: "Un maire à la mer",
      },
      {
        nom: "En attendant",
      },
      {
        nom: "Ici",
      },
      {
        nom: "Y fait chaud",
      },
      {
        nom: "Maria",
      },
      {
        nom: "Ta galaxie",
      },
      {
        nom: "Pas d'amour, pas de bonheur",
      },
    ]
  },
  {
    src: require("../img/Albums/Album-Alain-Vivant.jpg"),
    alt: "Alain Francois Vivant",
    title: "Alain Francois Vivant",
    titre: "Vivant",      
    artiste:"Alain-François",   
    chansons: [
      {
        nom: "Louise",
      },
      {
        nom: "Un p'tit café avant de partir",
      },
      {
        nom: "Playa Del Sous-Sol",
      },
      {
        nom: "La chaloupe",
      },
      {
        nom: "Luc et Luce",
      },
      {
        nom: "The Frong song",
      },
      {
        nom: "La jolie",
      },
      {
        nom: "Sur le bord de la rivière",
      },
      {
        nom: "St-Marie de Canabisco",
      },
      {
        nom: "Ça peut s'ramasser dans ton verre",
      },
      {
        nom: "Vielle Sorcière",
      },
      {
        nom:  "Vivant",
      },
   ]
  },
  {
    src: require("../img/Albums/Album-Bob-LesBarbesDesSeries.jpg"),
    alt: "Bob Bissonnette Les Barbes Des Series",
    title: "Bob Bissonnette Les Barbes Des Series",
    titre: "Les Barbes Des Series",      
    artiste:"Bob Bissonnette",   
    chansons: [
      {
        nom: "La machine à scorer",
      },
      {
        nom: "L'affamée",
      },
      {
        nom: "Hanrahan (Ta femme Suzanne)",
      },
      {
        nom: "El Presidente",
      },
      {
        nom: "J'te trouve écoeurante",
      },
      {
        nom: "J'accroche mes patins",
      },
      {
        nom: "Taureau mécanique",
      },
      {
        nom: "Les hommes zébrés",
      },
      {
        nom: "Chantale Machabée",
      },
      {
        nom: "Les Barbes Des Séries",
      },
      {
        nom: "Tounes de bières",
      },
    ]
  },
  {
    src: require("../img/Albums/Album-MononcSerge-13TounesTrash.jpg"),
    alt: "Mononc Serge 13 Tounes Trash",
    title: "Mononc Serge 13 Tounes Trash",
    titre: "13 Tounes Trash",      
    artiste:"Mononc Serge",   
    chansons: [
      {
        nom: "Capitaine",
      },
      {
        nom: "Le gala de l'ADISQ",
      },
      {
        nom: "Le caniche",
        paroles:<>
        <Row className='p-2'>
          <Col xs lg="12">
            <p>1999 après Jésus-Christ</p>
            <p>Tous les médias sont conquis pas Notre-Dame de Paris</p>
            <p>Tous? Non, un irréductible critique</p>
            <p>Résiste au raz-de-marée dithyrambique</p>
            <p>Il plonge son stylo dans le venin le plus noir</p>

            <p>Et écrit dans les pages du Devoir :</p>
            <p>" Au fond le seul talent de Luc Plamondon</p>
            <p>C'est de s'entourer de gens qui, eux, en ont "</p>

            <p>Le poddle en s'levant le matin</p>
            <p>Après avoir fait guili-guili à son serin</p>
            <p>Tombe sur la critique, il perd les pédales</p>
            <p>Et envisage de poursuivre le journal</p>
            <p>Wow! Les nerfs le caniche</p>
            <p>Rentre dans ta niche</p>
            <p>Pis fais-toé une sandwich moutarde relish</p>
            <p>Un poddle qui montre les dents</p>
            <p>ça fait même pas peur aux petits enfants</p>

            <p>Des milliers sinon des millions de morons</p>
            <p>Achètent tes cassettes et tes microsillons</p>
            <p>Tu tiens l'affiche au Saint-Denis pendant des mois</p>
            <p>Tu gagnes toujours tout d'ins hostie d'galas</p>
            <p>Faudrait en plus que ceux qui n'aime pas tes paroles</p>
            <p>sois privé du droit de dire qu'il te trouvent dole</p>
            <p>faudrait clouer au pignorie</p>
            <p>ceux qui disent du mal de tes texte pourris</p>

            <p>Ah! Que revienne le temps des cathédrales</p>
            <p>Et des tortures médiévales</p>
            <p>Expressément à  la demande du poddle</p>
            <p>On introduit dans le code criminel</p>
            <p>La peine mort pour les détracteurs</p>
            <p>De l'auteur de " Coeur de rocker "</p>

            <p>Prison de Bordeaux, dimanche á  l'aurore</p>
            <p>La charrette ramasse les condamnés à  mort</p>
            <p>On les promène d'ins rues pour que le peuple regarde</p>
            <p>Une derniá¨re fois leurs faces de mangeux d'marde</p>

            <p>Tout l'monde est content qu'un si juste sort</p>
            <p>Frappe enfin les ennemis de l'art</p>
            <p>Les esprits imperméables au génie</p>
            <p>Qui nous a chié Notre-Dame de Paris</p>

            <p>Le cortège arrive enfin sur la Place d'Armes</p>
            <p>Plusieurs critiques versent des larmes</p>
            <p>Tant mieux : ils auront une idée du mal</p>
            <p>Qu'ils font aux paroliers chaque jour dans le journal</p>
            <p>La foule impatiente est en liesse</p>
            <p>Et le caniche est là , il n'est pas en laisse</p>

            <p>C'est avec une joie non dissimulée</p>
            <p>Qu'il regarde monter sur le bucher</p>
            <p>Laurent Saulnier et son look rockabilly</p>
            <p>Alain Brunet de la grosse Presse á  Desmarais</p>
            <p>Sylvain Cormier, Patrick Gauthier</p>
            <p>Il y a tant de téteux dans ce métier</p>
            <p>Mais ils ont enfin fini de nous faire chier</p>

            <p>Le bourreau arrive avec son briquet</p>
            <p>Les condamnés s'envolent dans le ciel montréalais</p>
            <p>Et notre ville devient soudain un paradis</p>
            <p>Plus de pauvreté, plus de squeeges</p>
            <p>Plus de taxes, plus de geá´les</p>
            <p>Seulement du sexe, de la drogue et du rock n' roll</p>
            
          </Col> 
        </Row>
        </>
      },
      {
        nom: "Marijuana",
      },
      {
        nom: "Simone",
      },
      {
        nom: "Laval",
        paroles:<>
        <Row className='p-2'>
          <Col xs lg="12">
          <p>Dominique Lanoie</p>
          <p>Pascal Gingras</p>
          <p>et Olivier Langevin</p>
          <p>Bref moi, mes musiciens</p>
          <p>Et Benoit Dion</p>
          <p>Le technicien d'son</p>

          <p>Nous avons traversé l'pont Papineau</p>
          <p>Avec nos instruments</p>
          <p>Nous nous sommes plogués</p>
          <p>D'ins prises d'électricité</p>
          <p>D'un café étudiant</p>

          <p>De Laval</p>
          <p>De Laval</p>

          <p>Dès qu'on a commencé à jouer</p>
          <p>Leurs mines dégoutées nous ont révélé</p>
          <p>Qu'ils n'avaient</p>
          <p>Jamais Entendu ca</p>
          <p>Dans leurs centres-d'achat</p>
          <p>Les grimaces</p>
          <p>Qui apparaissaient dans leur face</p>
          <p>Et trahissaient leur ignorance crasse</p>
          <p>étaient autant de symptomes</p>
          <p>Du syndrôme de la ville du chosmodome</p>
          <p>une chopse qu'on a vite compris</p>
          <p>au cegep Monmorrency</p>
          <p>C'est que l'monde civilisé s'arrête</p>
          <p>à la rivière des Prairies</p>
          <p>Au nord tout n'est</p>
          <p>Qu'ailes de poulet</p>
          <p>Stationnement, centre d'achat</p>
          <p>Budweiser, bungalow, concessionnaire, etc</p>

          <p>A gauche de la scène</p>
          <p>Deux grosses obscènes</p>
          <p>Se faisaient aller les fesses</p>
          <p>Une chance vous dites</p>
          <p>Qu'au moins une vitre</p>
          <p>Les séparaient de l'orchestre</p>
          <p>Soudain, l'une d'elles</p>
          <p>Qui n'avait rien pour elle</p>
          <p>Que l'énormité de ses mamelles</p>
          <p>Se frotta la poitrine</p>
          <p>Contre la vitrine</p>
          <p>En bavant comme un grosse coquerelle</p>

          <p>Gingras sentit son engin gras</p>
          <p>Prendre de l'expansion</p>
          <p>Et Benoit Dion l'gars d'son eut presque une demi-érection</p>
          <p>Dominique Lanoie s'creusait la noix</p>
          <p>Et Olivier Langevin vint</p>
          <p>Mais ses bobettes étaient déjá  sales</p>
          <p>C'tait pas grave á  Laval</p>

          <p>J'ai appris par après</p>
          <p>Que Pascal Gingras</p>
          <p>Notre batteur fringant</p>
          <p>S'était payé une passe</p>
          <p>Avec la grosse grasse</p>
          <p>Ah! Comme c'est dégoutant</p>
          <p>Cette p'tite vite</p>
          <p>Avec celle qui s'frottait s'a vitre</p>
          <p>Ne m'f'ra pas lui chercher un remplaá§ant</p>
          <p>Bill Clinton a fait bien pire</p>
          <p>Et il est toujours président</p>

          <p>Que sont ces sons de suçon dans la toilette des garçons</p>
          <p>Serait-ce cette conne qui le r'siphone á  sa façon</p>
          <p>Elle plaint les éthiopiennes</p>
          <p>Qui n'ont jamais la bouche pleine</p>
          <p>Elle n'attend jamais votre aval</p>
          <p>Et elle avale á Laval</p>

          <p>Un univers</p>
          <p>De casquettes á  l'envers</p>
          <p>Jammées sur les ponts</p>
          <p>Un monde</p>
          <p>De nouveaux développements immondes</p>
          <p>Et de tondeuses à gazon</p>
          <p>On ne va pas jouer</p>
          <p>Devant de pareils tarés</p>
          <p>En s'écriant "Hourra!"</p>
          <p>Mais si vous</p>
          <p>Allongez les bidous</p>
          <p>On y retournera</p>

          <p>Pourquoi faudrait-il qu'on s'en cache</p>
          <p>On fait ¸ça pour le cash</p>
          <p>Avec l'aide d'un programme de subventions</p>
          <p>à la chanson</p>
          <p>Mais la SODEC</p>
          <p>Et le gouvernement du Québec</p>
          <p>Devraient faire un constat d'échec</p>
          <p>La chanson</p>
          <p>Les jeunes s'en sacrent pas mal</p>
          <p>Surtout à Laval</p>
          </Col>
        </Row>
        </>
      },
      {
        nom: "Les picks",
      },
      {
        nom: "Douceur de la nuit",
      },
      {
        nom: "Mario",
      },
      {
        nom: "LaFürher",
      },
      {
        nom: "Couscous",
      },
      {
        nom: "Monica",
      },
      {
        nom: "St-Fortunat",
      },
    ]
  },
  {
    src: require("../img/Albums/Album-Bob-Rockstar.jpg"),
    alt: "Bob Bissonnette Rockstar",
    title: "Bob Bissonnette Rockstar",
    titre: "Rockstar",      
    artiste:"Bob Bissonnette",  
    chansons: [
      {
        nom: "Maple Leafs",
      },
      {
      nom: "Le king du BBQ",
      },
      {
      nom: "Rockstars",
      },
      {
      nom: "Université",
      },
      {
      nom: "Ah non! Pas encore du basketball",
      },
      {
      nom: "Les brassières",
      },
      {
      nom: "La balade des malades",
      },
      {
      nom: "Gentlemen's Club",
      },
      {
      nom: "Prendre un verre mon minou",
      },
      {
      nom: "MLF"
      },
    ],
  },
  {
    src: require("../img/Albums/Album-Laurence-LesFillesDesIles.jpg"),
    alt: "Laurence St-Martin Les Filles Des Iles",
    title: "Laurence St-Martin Les Filles Des Iles",
    titre: "Les Filles Des Iles",      
    artiste:"Laurence St-Martin",  
    chansons: [
      {
        nom: "Filles des iles",
        paroles:<>
        <Row className='p-2'>
          <Col xs lg="12">
            <p>Quekpart entre Québec et Montréal</p>
            <p>À côté de Berthier ou tout le monde va gazer</p>
            <p>Y’a nos îles qui ont quekchose de ben spécial</p>
            <p>Écrase pas le pied, tu pourrais nous manquer</p>

            <p>C’est pas une grande ville, c’est juste un village</p>
            <p>On a tout un chalet à 3 minutes de nage</p>
            <p>Tout le monde se connait, tout le monde se tient…</p>
            <p>Pas l’choix on est toute des cousins</p>

            <p>Pis y’a les filles des îles</p>
            <p>Une couette, deux bières autour du feu</p>
            <p>Si les filles sortent en ville</p>
            <p>Une jupe, deux verres du feu dins yeux</p>

            <p>Si y’a un party dins' îles</p>
            <p>Prévois-rien le lendemain</p>
            <p>On est loin d’être tranquilles</p>
            <p>La gueule de bois, ça nous va ben</p>

            <p>On peut dire qui a pas grand chose chez nous</p>

            <p>Dehors, les vieux prennent leur café, debout</p>
            <p>Pis on s’commande d’la pizza</p>
            <p>Pas l’choix…c’est la seule chose qu’on a</p>

            <p>Mais y’a les filles des îles</p>
            <p>Une couette, deux bières autour du feu</p>
            <p>Si les filles sortent en ville</p>
            <p>Une jupe, deux verres du feu dins yeux</p>

            <p>Si y’a un party dins' îles</p>
            <p>Prévois-rien le lendemain</p>
            <p>On est loin d’être tranquilles</p>
            <p>La gueule de bois ça nous va ben</p>

            <p>Si l’ambulance passe dans notre coin</p>
            <p>On est su’l balcon, l’téléphone en main</p>
            <p>Si tu tombes amoureux d’une de nos filles</p>
            <p>Faut aussi gagner le cœur de l’ile</p>

            <p>Pis y’a les filles des îles</p>
            <p>Une couette, deux bières autour du feu</p>
            <p>Si les filles sortent en ville</p>
            <p>Une jupe, deux verres du feu dins yeux</p>

            <p>Si y’a un party dins' îles</p>
            <p>Prévois-rien le lendemain</p>
            <p>On est loin d’être tranquilles</p>
            <p>La gueule de bois ça nous va ben</p>

            <p>C’pas une grande ville, c’est juste un village</p>
            <p>Le livreur de lait passe encore le matin</p>
            <p>On vit de pêche sa glace, de bateaux et d’bord de l’eau</p>
            <p>J’aime ça, on est toute des voisins</p>

            <p>Pis au jour de l’an au sous-sol de l’église</p>
            <p>Y’aura pas de décompte, je l’sais qu’y seront tous là</p>
            <p>Matantes, mononcles, moi sur le stage de bois</p>
            <p>On boira à mon hommage aux iles</p>

            <p>Pis y’a les filles des îles</p>
            <p>Une couette, deux bières autour du feu</p>
            <p>Si les filles sortent en ville</p>
            <p>Une jupe, deux verres du feu dins yeux</p>

            <p>Si y’a un party dins' îles</p>
            <p>Prévois-rien le lendemain</p>
            <p>On est loin d’être tranquilles</p>
            <p>La gueule de bois ça nous va ben</p>

            <p>Pis y’a les filles des îles</p>
            <p>Une couette, deux bières autour du feu</p>

            <p>Si les filles sortent en ville</p>
            <p>Une jupe, deux verres du feu dins yeux</p>

            <p>Si y’a un party dins' îles</p>
            <p>Prévois-rien le lendemain</p>
            <p>On est loin d’être tranquilles</p>
            <p>La gueule de bois ça nous va ben</p>
            </Col>
          </Row>
          </>
      },
      {
        nom: "Sans toi",
      },
      {
        nom: "Accroche-toi",
      },
      {
        nom: "Patinoire",
      },
      {
        nom: "Quand t'es là",
      },
      {
        nom: "Vous deux",
      },
      {
        nom: "2 heures s'a 40",
      },
      {
        nom: "Je t'aime",
      },
      {
        nom: "Soyons-nous",
      },
      {
        nom: "Ensemble",
      },
      {
        nom: "Serveuse",
      },
      {
        nom: "Bout du monde",
        paroles:<>
        <Row className='p-2'>
          <Col xs lg="12">
            <p>6 heures avant t’avais le bonheur</p>
            <p>Étampé dans face et dans l’cœur</p>
            <p>Fallait être fou pour penser</p>
            <p>Qu’une seule seconde allait tout changer</p>

            <p>Tu rêvais du bout du monde</p>
            <p>Tu vivais de chaque seconde</p>
            <p>Tu savais c’que tu voulais faire</p>
            <p>À la vitesse de l’éclair</p>

            <p>Tu vivais sur ta moto</p>
            <p>Tu passais ta vie sur ses épaules</p>
            <p>Pour toi y’avait jamais rien de trop beau</p>
            <p>Jamais rien de trop drôle</p>

            <p>Tu rêvais du bout du monde</p>
            <p>Tu vivais de chaque seconde</p>
            <p>Tu savais c’que tu voulais faire</p>

            <p>À la vitesse de l’éclair</p>

            <p>J’me suis fondu dans les yeux de ta mère</p>
            <p>Deux grands trous noirs</p>
            <p>Ton père, droit comme un chêne</p>
            <p>Cassé, tombé par terre</p>

            <p>lls nous ont dit que le pire est passé</p>
            <p>3 ans plus tard, tes parents pleurent encore</p>
            <p>Pour toi j’aurai toujours 16 ans</p>
            <p>Pour qu’on soit toujours au présent</p>

            <p>Toi tu rêvais d’Australie</p>
            <p>T’étais de celles qui avait déjà compris</p>
            <p>Qu’on est seulement qu’un courant d’air</p>
            <p>Quand on ouvre la porte à la vie</p>

            <p>Et tu rêvais du bout du monde</p>

            <p>Tu vivais de chaque seconde</p>
            <p>Tu savais c’que tu voulais faire</p>
            <p>À la vitesse de l’éclair</p>

            <p>J’me suis fondu dans les yeux de ta mère</p>
            <p>Deux grands trous noirs</p>
            <p>Ton père, droit comme un chêne</p>
            <p>Cassé, tombé par terre</p>

            <p>On se r’verra en Océanie</p>
            <p>Ou n’importe où si tu veux</p>
            <p>Je chercherai parmi les filles</p>
            <p>Qui ont le vent dans les cheveux</p>
          </Col>
          </Row>
          </>
      },
    ],
  },
  {
    src: require("../img/Albums/Album-Roxanne-Dysphorie.jpg"),
    alt: "Roxanne Bruneau Dysphorie",
    title: "Roxanne Bruneau Dysphorie",
    titre: "Dysphorie",      
    artiste:"Roxanne Bruneau",   
    chansons: [
      {
        nom: "Des p'tits bouts de toi",
      },
      {
        nom: "Le secret",
      },
      {
        nom: "J'pas stressée",
      },
      {
        nom: "Notre belle démence",
      },
      {
        nom: "Les blues du musicien",
      },
      {
        nom: "Dysphorie",
      },
      {
        nom: "Notre belle romance",
      },
      {
        nom: "J'feel fourmi'",
      },
      {
        nom: "Qu'est-ce que t'en penses",
      },
      {
        nom: "Les dix doigts",
      },
      {
        nom: "Intro",
      },
      {
        nom: "Sans toi c'est plus pareil",
      },
    ],
  },
];

export class Album extends React.Component {

  constructor(props) {
    super(props);
    this.state = {rechercher:"",
                  listeAlbum : tabAlbum};
    this.Rechercher = this.Rechercher.bind(this);
    this.Effacer = this.Effacer.bind(this);
  }
  Rechercher(){
    let artiste = document.getElementById("inputRechercher").value;
    this.setState({rechercher : artiste});
  }
  Effacer(){
    document.getElementById("inputRechercher").value = "";
    this.setState({rechercher:""});
  }

  render() {
    return (
      <div className="container-fluid py-4">

        <Row>
          <Form>
            <InputGroup className="mb-3">
              <FormControl
                id="inputRechercher"
                placeholder="Rechercher"
                aria-label="Rechercher"
                aria-describedby="Rechercher"
                onChange={this.Rechercher}
              />
              <InputGroup.Append>
                <Button variant="success" onClick={this.Rechercher}>GO</Button>
              </InputGroup.Append>
              <InputGroup.Append>
                <Button variant="primary" onClick={this.Effacer}>Effacer</Button>
              </InputGroup.Append>
            </InputGroup>
          </Form>
        </Row>


        <Row className= "text-align:center px-5" >
          <h1 >{this.props.artiste}</h1>
        </Row>
        <Row className="p-3">{this.AfficherAlbums()}</Row>

      </div>
    );
  }

  AfficherAlbums() {
    if (this.state.rechercher === "Rechercher") {
      return this.state.listeAlbum.map((element, i) => (
        <RepertoireAlbums
          key={"album" + i}
          src={element.src}
          alt={element.alt}
          title={element.title}
          artiste={element.artiste}
          titre={element.titre}
          //onHover={this.handleHover}
        ></RepertoireAlbums>
      ));
    }
    else{
      const searchResult = this.state.listeAlbum.filter(l => l.artiste.toLowerCase().includes(this.state.rechercher.toLowerCase()) );
      return searchResult.map((element, i) => (
        <RepertoireAlbums
          key={"album" + i}
          src={element.src}
          alt={element.alt}
          title={element.title}
          artiste={element.artiste}
          titre={element.titre}
          //onHover={this.handleHover}
        ></RepertoireAlbums>
      ));
    }
  }
  }

