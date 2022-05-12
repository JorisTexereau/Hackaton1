import Header from "@components/Header";
import "../App.css";



export default function Form() {


    return (
        <div className="FormulairePage">

        <div>
            <Header />
        </div>

    <form className="Formulaire">
        <div className="form-group">
            <label>Nom</label>
            <input type="text" className="form-control" />
        </div>

        <div className="form-group">
            <label>Prénom</label>
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