import logo from "@assets/logo_site-removebg-preview.png"
import feuille from "@assets/logoFeuille.png"
import "@components/Header.css"

export default function Header() {
  return (
    <>
      <header className="Header">
         <p className="Ward"> 250 </p><img className="feuille" src={feuille} alt="feuille" />
      </header>
    </>

  );
}