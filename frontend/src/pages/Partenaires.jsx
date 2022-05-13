import "./Partenaires.css";
import  logo from "@assets/Green-Coin.png";
import { Link } from "react-router-dom";

export default function Partenaires() {
  return (
    <>
     <div className="hpB">
        <Link to="/"><img className="logo" src={logo} alt="logo" /></Link>
        <p>Green Life </p>
      </div>
      <div className="title">
        <h1>Les Boutiques Partenaires</h1>
      </div>

      <div className="coin">
        <h2> YOUR GREEN-COIN : 150</h2>
        <img src="./src/assets/Green-Coin.png" />
      </div>
      <body>
        <div className="boutique">
          <img src="./src/assets/boutique2.png" id="boutique2" />
          <img src="./src/assets/boutique4.png" id="boutique4" />
          <img src="./src/assets/boutique3.png" id="boutique3" />
          <img src="./src/assets/boutique1.png" id="boutique1" />
        </div>
        <div className="paragraphe">
          <div className="para1">
            <h2>
              <a href="http://www.la-recharge.fr">LA RECHARGE</a>
            </h2>
            <p>
              La recharge, c’est la première épicerie sans emballages jetables.
              Vous l’aurez compris dans cette épicerie, on est sur du 100 %
              vrac. Ici, hors de question de laisser entrer le superflu des
              produits industriels ultra transformés. Seuls les producteurs
              locaux, fabricant des produits de qualité sont mis en avant. Vous
              y trouverez de nombreux produits comme des fruits et des légumes,
              de délicieux chocolats, des biscuits, du café, du beurre, du vin,
              du pain, de la charcuterie, etc. Où trouver cette boutique
              responsable à Bordeaux ?
            </p>
            <a href="https://www.google.fr/maps/place/La+Recharge/@44.8372272,-0.5728404,17z/data=!3m1!4b1!4m5!3m4!1s0xd5527cf062c9ed9:0xa6a76e58e7268bc0!8m2!3d44.8372272!4d-0.5712548">
              📍 38 Rue Sainte-Colombe 33000 Bordeaux
            </a>
          </div>

          <div className="para2">
            <h2>
              <a href="https://www.elmarket.fr">EL MARKET</a>
            </h2>
            <p>
              El Market c’est un peu le temple de la consommation responsable.
              Ce concept store entièrement éco-conçu de 140 m² propose des
              articles éthiques, durables et éco-responsables. C’est tout un
              univers éco-responsable qui vous est mis à votre disposition..
              Différents critères sont pris en compte pour choisir les marques
              et les produits responsables à mettre en avant. Nous pouvons par
              exemple citer les produits issus du commerce équitable ou de
              l’économie circulaire, biologiques, vegans, locaux, made in France
              ou encore upcyclés. Mode éco-responsable pour femmes et hommes,
              articles pour les bébés et les enfants, décoration de la maison,
              cosmétiques ou encore idées cadeaux, de quoi se faire plaisir ! Où
              trouver cette boutique responsable à Bordeaux ?
            </p>
            <a>📍 128 Rue Léon Gambetta 33000 Bordeaux</a>
          </div>

          <div className="para3">
            <h2>
              <a href="https://welcomebio.fr">WBB</a>
            </h2>
            <p>
              Welcome Bio Bazar se revendique comme un concept store green et
              bienveillant. Et pour cause ! Ici tout est éco-friendly, du rayon
              droguerie jusqu’à celui de l’univers enfant en passant par l’art
              de vivre, la cuisine, la salle de bains ou bien encore les
              plantes. Cette boutique responsable à Bordeaux promeut le mode de
              vie slow, en proposant des produits esthétiques, durables, et
              éthiques. Les articles présents dans les rayons sont issus de
              créateurs locaux, du circuit court ou sont made in France. Vendus
              en vrac ou non, ils sont naturels, biologiques et/ou vegans. Des
              alternatives zéro déchets sont aussi disponibles. Où trouver cette
              boutique responsable à Bordeaux ?
            </p>
            <a> 📍 13 rue Boulle 33000 Bordeaux.</a>
          </div>

          <div className="para4">
            <h2>
              <a href="https://www.lescachotieres.com">LES CACHOTIERES</a>
            </h2>
            <p>
              Les cachotières, une entreprise bordelaise dont le service est
              uniquement proposé en ligne. C’est donc un petit bonus ! Les
              cachotières, c’est un service de location de vêtements. Idéal donc
              pour profiter d’une superbe tenue que l’on a pas forcément envie
              d’acheter pour la porter une seule fois ! Le principe est super
              simple. Vous choisissez votre tenue, vous l’essayez, la portez et
              la renvoyez. Les frais de transport, aller et retour, ainsi que le
              pressing sont offerts. De quoi éviter de consommer plus
              inutilement. Où trouver cette boutique responsable bordelaise ? En
              ligne pour utiliser ses services. Le siège social de l’entreprise
              se situe au
            </p>
            <a>📍 165 Avenue de Bretagne, 33000 Bordeaux</a>
          </div>
        </div>
      </body>

    </>
  );
}
