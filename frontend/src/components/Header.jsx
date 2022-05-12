import logo from "@assets/logo_site-removebg-preview.png"
import feuille from "@assets/logoFeuille.png"
import "@components/Header.css"

export default function Header() {
  return (
    <div>
      <header className="Header">
        <p className="Titre">Move Green </p> <img className="logo" src={logo} alt="logo" /> <p className="Ward"> 250 </p><img className="feuille" src={feuille} alt="feuille" />
      </header>
    </div>

  );
}