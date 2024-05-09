import React from 'react';
import './home.sass';
import Tableau from '../../components/section/tableau.jsx';
import Banner from '../../components/banner/banner.jsx';
import competencesData from '../../datas/competences.json';


function Home() {
  const { titres, competences, logos } = competencesData;

  return (
    <div className='home-container'>
      <p> Développeur web junior </p>

      <div className='competences__banner'>
        <Banner title="COMPÉTENCES"/>
      </div>

      <div className='tableau__container'>
        <Tableau titres= {titres} competences={competences} logos={logos}/>
      </div>

    </div>
  );
}

export default Home;
