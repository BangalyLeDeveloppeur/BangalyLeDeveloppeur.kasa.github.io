import React from "react";
import Partout from "../components/partout/Partout";
import Cadre from "../components/Cadre/Cadre";
import livres from "../data/livres.json";

const Home = () => {
  console.log(livres);

  return (
    <div>
      <Partout />
      <div className="gallery">
        <Cadre livres={livres} />
      </div>
    </div>
  );
};

export default Home;
