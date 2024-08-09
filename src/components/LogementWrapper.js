import React from 'react';
import { Navigate, useParams } from "react-router-dom";
import Appartement from "../pages/Appartement";
import logements from "../data/livres.json"


        // Composant Wrapper pour gérer la logique de redirection en fonction de l'ID du logement
const LogementWrapper = () => {
    const { id } = useParams();
    const logement = logements.find(l => l.id === id);
  
    if (!logement) {
      return <Navigate to="/error" />;
    }
    return <Appartement logement={logement} />;
  };

  
export default LogementWrapper;