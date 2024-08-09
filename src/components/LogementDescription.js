import React from "react";
import Collapse from "./Collapse";

const LogementDescription = ({ logement }) => {
  return (
    <div className="logemen ">
      <div className="logementDescription">
        <div className="chevron">
          {logement.description && (
            <Collapse
              title={"Description"}
              content={
                <div className="chevron-cadre">
                  <p>{logement.description}</p>
                </div>
              }
            />
          )}
        </div>

        <div className="chevron">
          {logement.equipments && (
            <Collapse
              title={"Equipements"}
              content={
                <div className="chevron-cadred">
                <ul>
                  {logement["equipments"].map((eq) => (
                    <li key={eq}>{eq} </li>
                  ))}
                </ul>
                   </div>
                  
              }
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default LogementDescription;
