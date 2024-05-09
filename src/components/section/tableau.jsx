import React from 'react';
import './tableau.sass'

function Tableau({titres, competences}) {
    return (
        <table>
            <thead>
              <tr>
                  {titres.map((titre, index) => (
                  <th key={index}>{titre}</th>
                  ))}
              </tr>
            </thead>
            <tbody>
              {competences.map((competencesRow, rowIndex) => (
                <tr key={rowIndex}>
                  {competencesRow.map((competence, colIndex) => (
                    <td key={colIndex}>
                        <img src='{competence.logo} 'alt={'logo'} className='competence__logo'/>
                        <span>{competence.nom}</span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
        </table>
          );
        }

export default Tableau;