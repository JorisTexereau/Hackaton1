import Header from "@components/Header";
import "../App.css";
import fond from "@assets/FondHome.jpg";



export default function Form() {


    return (
        <div className="FormulairePage">
<img className="Fond" src={fond} alt="fond" />
        <div>
            <Header />
        </div>

    <form className="Formulaire">
        <div className="form-group">
            <label>Nom / Prénom</label>
            <input type="text" className="form-control" />
        </div>

        <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control" />
        </div>

        <div className="form-group">
        <label>Ville</label>
        <select id="country" name="country">
          <option value="australia">Bordeaux</option>
          <option value="canada">Marseille</option>
          <option value="usa">Lyon</option>
          <option value="usa">Limoges</option>
          <option value="usa">Mont-de-Marsan</option>
          <option value="usa">Istanbul</option>
          <option value="usa">La Rochelle</option>

        </select>
      </div>

        <div className="form-group">
            <label>Projet</label>
            <textarea type="text" className="form-control" />
        </div>

        <button type="submit" className="Soumettre">Soumettre</button>
    </form>
    </div>
)};