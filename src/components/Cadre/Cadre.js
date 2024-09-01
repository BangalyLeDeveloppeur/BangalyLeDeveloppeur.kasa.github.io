import PropTypes from "prop-types";
import OneCadre from "../oncadre/OneCadre";

const Cadre = ({ livres }) => {
  return livres.map((Logement) => (
    <OneCadre key={Logement.id} logement={Logement} />
  ));
};

Cadre.propTypes = {
  livres: PropTypes.array.isRequired,
};

export default Cadre;
