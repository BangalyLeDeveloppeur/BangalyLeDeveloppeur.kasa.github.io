import React from "react";

const Logementtitle = ({logement}) => {
  return (
    <div className="logement">
      <div className="titl-h">
      <h2 className="logoement-title">{logement.title}</h2>
      </div>
      <p className="logement-ville">{logement.location}</p>
   
    </div>
  );
};

export default Logementtitle;
