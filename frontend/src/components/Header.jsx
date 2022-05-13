import logo from "@assets/logo_site-removebg-preview.png"
import feuille from "@assets/logoFeuille.png"
import "@components/Header.css"

export default function Header() {
  return (
    <>
      <header className="Header">
        <p className="Titre">GREEN LIFE </p> <img className="logo" src={logo} alt="logo" /> 
      </header>
    </>

  );
}