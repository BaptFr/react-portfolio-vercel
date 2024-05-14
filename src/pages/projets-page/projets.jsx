import React, { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import SectionBanner from '../../components/banners/section-banner.jsx';
import ProjetCard from '../../components/cards/projet-card.jsx';
import ProjetModal from '../../components/modals/projet-modal.jsx';
import './projets.sass';



function Projets() {
  
  //Etats pour Modal projet
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };



  return(

    <section id='projets__section' className='projets__section'>
      <div className='projets__banner'>
        <SectionBanner title="PROJETS"/>
      </div>

      {/* INTRO & ANIMATION */}
      <div className='projets__intro'>
        <p>Les trois projets que je présente ici offrent un aperçu de mes réalisations <br/>
        
          <br/> 
          <p className='intro__animation'>
            <Typewriter 
              words= {[ 'Front-end, Back-end et optimisation SEO'  ]}
              loop={1}
              cursor
              cursorStyle='|'
            />
          </p>
        </p>
      </div>

        <ProjetModal  />
      
     
      {/* PROJETS  */}
      <div className= 'projets__container--left'>
        <div className='description__container'>
          <p className='projet__title'> Kasa </p>
          <p className='projet__description'> Développement d'un site responsive de location immobilière via une application à page unique (Single Page Application) </p>
          <div className='projet_technologies__container'>
            <p className='projet__technologies__title'>Technologies & outils</p>
            <p className='projet__technologies'>ReactJS</p>
          </div>
        </div>
        <ProjetCard source={''} title=''
          onClick={openModal}/>
        </div>

      <div className= 'projets__container--right'>
        <div className='description__container'>
          <p className='projet__title'> Mon Vieux Grimoire </p>
          <p className='projet__description'>Site web de référencement de livres d'une chaine de librairies où les utilisateurs peuvent ajouter des livres et les évaluer.</p>
          <div className='projet_technologies__container'>
            <p className='projet__technologies__title'>Technologies & outils</p>
            <p className='projet__technologies'> Node.js Express MongoDB</p>
          </div>
        </div>
        <ProjetCard source={''} title=''/> 
      </div>

      <div className= 'projets__container--left'>
        <div className='description__container'>
          <p className='projet__title'>Photographe Nina Carducci</p>
          <p className='projet__description'>Optimisation SEO et débugg du site d'une photographe. </p>
          <div className='projet_technologies__container'>
            <p className='projet__technologies__title'>Technologies & outils</p>
            <p className='projet__technologies'>Lighthouse ChromeDevTools</p>
          </div>
        </div>
        <ProjetCard source={''} title=''/>
      </div>


    </section>
 
  )
}

export default Projets;