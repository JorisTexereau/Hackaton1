
import Veja from "@assets/Veja.jpg"
import "@components/Carroussel.css"
import { useNavigate } from "react-router-dom";


export default function Carroussel() {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/home`; 
    navigate(path);
  }
  return (

    <>
    <div className="Carroussel">
     <img className = "Veja" src = {Veja} alt = "Veja"/>
     
     <button className="BtnBoutique" onClick={routeChange}>J'utilise mes GreenCoin</button>
     </div>
     </>
       
  );
}
