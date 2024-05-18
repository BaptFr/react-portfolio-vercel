import React from 'react';
import { Card } from 'antd';
import { motion } from 'framer-motion';
import './tableau.sass';


function Tableau({categories}) {
  return (
    <div className='tableau'>
      {categories.map((category, index) => (
         <motion.div 
         key={index} 
         initial={{ opacity: 0, y: 0 }}
         animate={{ opacity: 1, y: 75}}
         transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <Card key={index} title={category.titre} className='tableau__card'>
            <ul className='tableau__categories'>
              {category.competences.map((competence, i)=> (
                <li key={i}>
                  {competence.nom}
                </li>
              ))}
            </ul>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default Tableau;