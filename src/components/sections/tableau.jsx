import React from 'react';
import { motion } from "framer-motion";
import './tableau.sass';


function Tableau({categories}) {
  return (
    <div className='tableau'>
      {categories.map((category, index) => (
        <div key={index}>
          <h3>{category.titre}</h3>
          <ul className='tableau__categories'>
            {category.competences.map((competence, i)=> (
              <li key={i}>
                {competence.nom}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Tableau;