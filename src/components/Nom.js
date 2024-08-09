import React from "react";


const Nom = ({ logement }) => {

  return (
    <div className="nom">
      <div className="nom-conteneur">
        <p>{logement.host.name}</p>
        <img src={logement.host.picture} alt= {logement.host.name} />
      </div>
    </div>
  );
};

export default Nom;


