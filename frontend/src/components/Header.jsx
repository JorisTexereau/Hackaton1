import logo from "@assets/logo_site-removebg-preview.png"
import login from "@assets/login.png"
import "@components/Header.css"

export default function Header() {
    return (
      <div>
   <header className="Header">
      <p className="Titre">Move Green </p> <img className = "logo" src = {logo} alt = "logo"/> <img className = "login" src = {login} alt = "login"/>
       
    </header>
      </div>
    );
  }