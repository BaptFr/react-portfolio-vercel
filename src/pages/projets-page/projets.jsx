import React, {useState} from 'react';
import { Typewriter } from 'react-simple-typewriter';
import SectionBanner from '../../components/banners/section-banner.jsx';
import ProjetDisplay from  '../../components/cards/projet-display.jsx';
import projetsData from '../../datas/projets.json'


import  KasaPic from '../../assets/projets-pictures/kasa-site.jpg';
import  NinaPic from '../../assets/projets-pictures/nina-car-site.jpg';
import  MvgPic from '../../assets/projets-pictures/mvg-site.jpg';


import './projets.sass';


function Projets() {

  const projetId1 = projetsData.find((projet) => projet.id === "1");
  const projetId2 = projetsData.find((projet) => projet.id === "2");
  const projetId3 = projetsData.find((projet) => projet.id === "3");

  return(

    <section id='projets__section' className='projets__section'>

    {/* INTRO & ANIMATION */}
      <div className='projets__banner'>
        <SectionBanner title="PROJETS"/>
      </div>
      <div className='projets__intro'>
        <p>Voici trois projet offrants un aperçu de mes réalisations <br/>
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
        <div className='projets__description__container'>
          <ProjetDisplay projetId={1}   />
          <div className='projet__technologies__container'>
            <p className='projet__technologies__title'>TECHNOLOGIES & OUTILS</p>
            <p className='projet__technologies'>ReactJS</p>
          </div>
        </div>
        <div className='projet__pic__container'>
          <img src={KasaPic} alt={'site-kasa'}/>
          <div className='hover__content' >
            <div className='hover__title'>
              <p> {projetId1.title}</p>
            </div>
            <div className='hover__link'>
              <a href='{projetId1.link}' target='_blank' rel='noopener noreferrer'>
                <button>LIEN VERS LE SITE</button>
              </a>
            </div>
          </div>       
        </div>
      </div>

      <div className= 'projets__container--right'>
        <div className='projets__description__container'>
          <ProjetDisplay projetId={2}   />
          <div className='projet__technologies__container'>
            <p className='projet__technologies__title'>TECHNOLOGIES & OUTILS</p>
            <p className='projet__technologies'> Node.js Express MongoDB</p>
          </div>
        </div>
        <div className='projet__pic__container' >
          <img src={MvgPic} alt={'site-monvieu-grimoire'}/>
          <div className='hover__content'>
            <div className='hover__title'>
              <p> {projetId2.title}</p>
            </div>
            <div className='hover__link'>
              <a href='{projetId1.link}' target='_blank' rel='noopener noreferrer'>
                <button>LIEN VERS LE CODE BACK-END</button>
              </a>
            </div>
          </div>       
        </div>
      </div>

      <div className= 'projets__container--left'>
        <div className='projets__description__container'>
          <ProjetDisplay projetId={3}   />
          <div className='projet__technologies__container'>
            <p className='projet__technologies__title'>TECHNOLOGIES & OUTILS</p>
            <p className='projet__technologies'>Lighthouse ChromeDevTools</p>
          </div>
        </div>
        <div className='projet__pic__container'>
          <img src={NinaPic} alt={'site-photographe'}/>
          <div className='hover__content'>
            <div className='hover__title'>
              <p> {projetId3.title}</p>
            </div>
            <div className='hover__link'>
              <a href='{projetId1.link}' target='_blank' rel='noopener noreferrer'>
                <button>LIEN VERS LE RAPPORT</button>
              </a>
            </div>
          </div>       
        </div>
      </div>
      
    </section>
 
  )
}

export default Projets;