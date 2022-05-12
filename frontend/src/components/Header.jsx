import logo from "@assets/logo_site-removebg-preview.png"
import "@components/Header.css"

export default function Header() {
    return (
      <div>
   <header className="Header">
      <p className="Titre">GreenWard </p> <img className = "logo" src = {logo} alt = "logo"/>
       
    </header>
      </div>
    );
  }