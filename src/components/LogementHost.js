import React from 'react';

const Logementhost = ({ note }) => {
  const startArray = [0, 1, 2, 3, 4];
  return (
    <div className="host">
      {startArray.map((start) => (
        <i
          key={start}
          className={`fa-solid fa-star ${start < note ? 'filled' : 'empty'}`}/// ici je verifie le nombre d'etoil de l'appartement avec la methode ternaire
        ></i>
      ))}
    </div>
  );
};

export default Logementhost;
