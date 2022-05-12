import Autocomplete from "@components/Autocomplete";
import { Link } from "react-router-dom";
import "../App.css";

export default function Home() {
  return (
    <div className="coverPage">
      <h1>Choose your city</h1>
      <div className="inputSearch">
        <Autocomplete
          suggestions={[
            "Boofzheim (67860)",
            "Boos (76520)",
            "Bootzheim (67390)",
            "Boqueho (22170)",
            "Bor-et-Bar (12270)",
            "Boran-sur-Oise (60820)",
            "Borce (64490)",
            "Bord-Saint-Georges (23230)",
            "Bordeaux (33000)",
            "Bordeaux-en-Gâtinais (45340)",
            "Bordeaux-Saint-Clair (76790)",
            "Bordères (64800)",
            "Bordères-et-Lamensans (40270)",
            "Bordères-Louron (65590)",
            "Bordères-sur-l'Échez (65320)",
            "Bordes (64510)",
            "Bordes (65190)",
            "Bordes-de-Rivière (31210)",
            "Bordes-Uchentein (09800)",
            "Bordezac (30160)",
            "Bords (17430)",
            "Borée (07310)",
            "Boresse-et-Martron (17270)",
            "Borest (60300)",
            "Borey (70110)",
            "Borgo (20290)",
            "Bormes-les-Mimosas (83230)",
            "Bornam Busc (76110)",
            "Bornay (39570)",
            "Borne (07590)",
            "Borne (43350)",
            "Bornel (60540)",
            "Boron (90100)",
            "Borre (59190)",
            "Borrèze (24590)",
            "Bors (Canton de Charente-Sud) (16360)",
            "Bors (Canton de Tude-et-Lavalette) (16190)",
            "Bort-l'Étang (63190)",
            "Bort-les-Orgues (19110)",
            "Borville (54290)",
            "Bosc-Bérenger (76680)",
            "Bosc-Bordel (76750)",
            "Bosc-Édeline (76750)",
            "Bosc-Guérard-Saint-Adrien (76710)",
            "Bosc-Hyons (76220)",
            "Bosc-le-Hard (76850)",
            "Bosc-Mesnil (76680)",
            "Boscamnant (17360)",
            "Bosdarros (64290)",
            "Bosgouet (27310)",
          ]}
        />
        <Link to="/bordeaux">
          <h3>GO</h3>
        </Link>
      </div>
    </div>
  );
}
