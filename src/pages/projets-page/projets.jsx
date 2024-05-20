import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import SectionBanner from '../../components/banners/section-banner.jsx';
import ProjetDisplay from  '../../components/cards/projet-display.jsx';
import LogoColor from '../../components/logos/logo-color.jsx';
import projetsData from '../../datas/projets.json'

import  KasaPic from '../../assets/projets-pictures/kasa-site.webp';
import  NinaPic from '../../assets/projets-pictures/nina-car-site.webp';
import  MvgPic from '../../assets/projets-pictures/mvg-site.webp';
import  ReactLogoC from '../../assets/logos/react-logo-col.svg';
import  SassLogoC from '../../assets/logos/sass-logo-col.svg';
import  NodeLogoC from '../../assets/logos/node-logo-col.svg';
import  MongoLogoC from '../../assets/logos/mongo-logo-col.svg';
import  FigmaLogoC from '../../assets/logos/figma-logo-col.svg';
import  PostmanLogoC  from '../../assets/logos/postman-logo-col.svg';
import  ChromeLogoC  from '../../assets/logos/chrome-logo-col.svg';
import  LighthouseLogoC  from '../../assets/logos/lighthouse-logo-col.svg';
import  GitLogoC  from '../../assets/logos/github-logo-col.svg';

import './projets.sass';


function Projets() {
  const projetId1 = projetsData.find((projet) => projet.id === "1");
  const projetId2 = projetsData.find((projet) => projet.id === "2");
  const projetId3 = projetsData.find((projet) => projet.id === "3");

  return(

    <section id='projets__section' className='projets__section'>

      {/* INTRO & ANIMATION */}
      <div className='projets__page__banner'>
        <SectionBanner title="Mes projets" />
      </div>
      <div className='projets__intro'>
        <p className='intro__animation'>
          <Typewriter 
            words= {[ 'Front-end / Back-end / Optimisation SEO'  ]}
            loop={1}
            cursor
            cursorStyle='|'
            typeSpeed={120}
          />
        </p>
        <br/>
        <p>Bienvenue sur la page des projets </p>
        <p>Voici trois projet offrants un aperçu de mes réalisations </p>
        
        <hr/> 
        
      </div>

      {/* PROJETS  */}
      <div className= 'projets__container--left'>
        <div className='projets__description__container'>
          <ProjetDisplay projetId={1}   />
          <div className='projet__technologies__container'>
            <div className='hover__technologies'>
              <p>ReactJS</p> 
              <p> Sass </p> 
              <p> Figma</p>
              <p> GithHub</p>
            </div>
            <p className='projet__technologies__title'>TECHNOLOGIES & OUTILS</p>
            <div className='projet__technologies'> 
              <LogoColor src={ReactLogoC} alt='react-technologie' size="small" />
              <LogoColor src={SassLogoC} alt='sass-technologie' size="small" />
              <LogoColor src={FigmaLogoC} alt='figma-symbol' size="small" />
              <LogoColor src={GitLogoC} alt='git-symbol'size="small" /> 
            </div>
          </div>
        </div>
        <div className='projet__pic__container'>
          <img src={KasaPic} alt={'site-kasa'} loading="lazy"/>
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
            <div className='hover__technologies'>
              <p> Node JS </p> 
              <p> MongoDB </p> 
              <p> POSTMAN</p>
              <p> GithHub</p>
            </div>
            <p className='projet__technologies__title'>TECHNOLOGIES & OUTILS</p>
            <div className='projet__technologies'>
              <LogoColor src={NodeLogoC} alt='node-technologie' size="medium" /> 
              <LogoColor src={MongoLogoC} alt='mongo-symbol' size="medium" />
              <LogoColor src={PostmanLogoC} alt='postman-symbol'size="medium" />
              <LogoColor src={GitLogoC} alt='git-symbol'size="small" /> 
            </div>
          </div>
        </div>
        <div className='projet__pic__container' >
          <img src={MvgPic} alt={'site-monvieu-grimoire'} loading="lazy"/>
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
            <div className='hover__technologies'>
              <p>DEV CHROME TOOLS </p> 
              <p> LIGHT HOUSE </p> 
              <p> GITHUB </p>
            </div>
              <p className='projet__technologies__title'>TECHNOLOGIES & OUTILS</p>
              <div className='projet__technologies'>
                <LogoColor src={ChromeLogoC} alt='dev-chrome-tools' size="small" />
                <LogoColor src={LighthouseLogoC} alt='lighthouse-symbol' size="small" />
                <LogoColor src={GitLogoC} alt='git-symbol'size="small" /> 
              </div>
          </div>
        </div>
        <div className='projet__pic__container'>
          <img src={NinaPic} alt={'site-photographe'} loading="lazy"/>
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