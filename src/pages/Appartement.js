import Slide from "../components/Slide";
import LogementTitle from "../components/LogementTitle";
import Tag from "../components/Tag";
import LogementHost from "../components/LogementHost";
import LogementDescription from "../components/LogementDescription";
import appartements from "../data/livres.json";
import Nom from "../components/Nom";

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
