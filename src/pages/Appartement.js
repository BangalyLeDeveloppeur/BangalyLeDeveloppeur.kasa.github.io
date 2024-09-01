import Slide from "../components/slide/Slide";
import LogementTitle from "../components/logementtitle/LogementTitle";
import Tag from "../components/tag/Tag";
import LogementHost from "../components/host/LogementHost";
import LogementDescription from "../components/logementDescription/LogementDescription";
import appartements from "../data/livres.json";
import Nom from "../components/nom/Nom";

console.log(appartements);

const Appartement = ({ logement }) => {
  return (
    <div>
      <Slide logement={logement} />
      <LogementTitle logement={logement} />
      <Tag logement={logement} />
      <Nom logement={logement} />
      <LogementHost note={logement.rating}/>
      
      <LogementDescription
        logement={logement} /*ici je passe a ma prop le contenant du fichier json.rating pour afficher le nombre d'étoils disponible dans appartement */
      />
    </div>
  );
};

export default Appartement;
