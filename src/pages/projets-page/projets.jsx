import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import SectionBanner from '../../components/banners/section-banner.jsx';
import ProjetCard from '../../components/cards/projet-card.jsx';
import kasaPic from '../../assets/kasa-site.jpg';
import mvgPic from '../../assets/mvg-site.jpg';
import ninaPic from '../../assets/nina-car-site.jpg';
import './projets.sass';


function Projets() {


  return(

    <section id='projets__section' className='projets__section'>
      
      <div className='projets__banner'>
        <SectionBanner title="PROJETS"/>
      </div>

      {/* INTRO & ANIMATION */}
      <div className='projets__intro'>
        <p>Les trois projets que je présente ici offrent un aperçu de mes réalisations <br/>
        </p>
        <br/> 
        <p className='intro__animation'>
          <Typewriter 
              words= {[ 'FRONT-END / BACK-END / OPTIMISATION SEO'  ]}
              loop={1}
              cursor
              cursorStyle='|'
          />
        </p>
      </div>

      {/* PROJETS  */}
      <div className= 'projets__container--left'>
        <div className='description__container'>
          <div className='text__container'>
          <p className='projet__title'> Kasa </p>
          <p className='projet__description'> Développement d'un site responsive de location immobilière via une application à page unique (Single Page Application) </p>
        </div>
        <div className='projet_technologies__container'>
          <p className='projet__technologies__title'>Technologies & outils</p>
          <p className='projet__technologies'>ReactJS</p>
          </div>
        </div>
       
        <ProjetCard source={kasaPic} alt={'site-kasa-logement'} />
      
        
      </div>

      <div className= 'projets__container--right'>
        <div className='description__container'>
          <div className='text__container'>
            <p className='projet__title'> Mon Vieux Grimoire </p>
            <p className='projet__description'>Site web de référencement de livres d'une chaine de librairies où les utilisateurs peuvent ajouter des livres et les évaluer.</p>
          </div>
          <div className='projet_technologies__container'>
            <p className='projet__technologies__title'>Technologies & outils</p>
            <p className='projet__technologies'> Node.js Express MongoDB</p>
          </div>
        </div>
        <ProjetCard source={mvgPic} alt={'site-mon-vieux-grimoire'}/> 
      </div>

      <div className= 'projets__container--left'>
        <div className='description__container'>
          <div className='text__container'>
            <p className='projet__title'>Photographe Nina Carducci</p>
            <p className='projet__description'>Optimisation SEO et débugg du site d'une photographe. </p>
          </div>
          <div className='projet_technologies__container'>
            <p className='projet__technologies__title'>Technologies & outils</p>
            <p className='projet__technologies'>Lighthouse ChromeDevTools</p>
          </div>
        </div>
        <ProjetCard source={ninaPic} alt='photographe-site'/>
      </div>
    </section>
 
  )
}

export default Projets;