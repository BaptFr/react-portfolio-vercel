import React, {useState} from 'react';
import { Typewriter } from 'react-simple-typewriter';
import SectionBanner from '../../components/banners/section-banner.jsx';
import ProjetDisplay from  '../../components/cards/projet-display.jsx';
import LogoColor from '../../components/logos/logo-color.jsx';
import projetsData from '../../datas/projets.json'


import  KasaPic from '../../assets/projets-pictures/kasa-site.jpg';
import  NinaPic from '../../assets/projets-pictures/nina-car-site.jpg';
import  MvgPic from '../../assets/projets-pictures/mvg-site.jpg';
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
              typeSpeed={120}
          />
        </p>
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
            </div>
            <p className='projet__technologies__title'>TECHNOLOGIES & OUTILS</p>
            <div className='projet__technologies'> 
              <LogoColor src={ReactLogoC} alt='react-technologie'/>
              <LogoColor src={SassLogoC} alt='sass-technologie'/>
              <LogoColor src={FigmaLogoC} alt='figma-symbol'/>
            </div>   
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
            <div className='hover__technologies'>
              <p>Node JS </p> 
              <p> MongoDB </p> 
              <p> POSTMAN</p>
            </div>
            <p className='projet__technologies__title'>TECHNOLOGIES & OUTILS</p>
            <div className='projet__technologies'>
              <LogoColor src={NodeLogoC} alt='node-technologie'> </LogoColor>
              <LogoColor src={MongoLogoC} alt='mongo-symbol'/>
              <LogoColor src={PostmanLogoC} alt='postman-symbol'/>
            </div>
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
            <div className='hover__technologies'>
              <p>DEV CHROME TOOLS </p> 
              <p> LIGHT HOUSE </p> 
              <p> GITHUB </p>
            </div>
              <p className='projet__technologies__title'>TECHNOLOGIES & OUTILS</p>
              <div className='projet__technologies'>
                <LogoColor src={ChromeLogoC} alt='dev-chrome-tools'> </LogoColor>
                <LogoColor src={LighthouseLogoC} alt='lighthouse-symbol'> </LogoColor>
                <LogoColor src={GitLogoC} alt='git-symbol'> </LogoColor>
              </div>
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