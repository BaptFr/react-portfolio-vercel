import React from 'react';
import { NavLink} from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';

import SectionBanner from '../../components/banners/section-banner.jsx';
import LogosBanner from '../../components/banners/logos-banner.jsx';
import ButtonLink from '../../components/buttons/button-link.jsx';
import Tableau from '../../components/sections/tableau.jsx';

import LinkedinLogo from '../../assets/logos/linkedin-logo.svg';
import MailLogo from'../../assets/logos/mail-logo.svg';
import WorkLogo from'../../assets/logos/work-logo.svg';

import competencesData from '../../datas/competences.json';
import './home.sass';

function Home() {
  const { categories } = competencesData;

  return (
  <div className='home__container'>
    <div className='home__animation'>
      <Typewriter 
        words= {[ 'Baptiste Salazar'  ]}
        loop= {1}
        cursor
        cursorStyle='|'
        typeSpeed={200}
      /> 
    </div>
 
    <section className='introduction__section'>
      <div className='introduction__text'> 
        <p> Bienvenue sur mon portfolio ! <br/>
        <br/>
          Actuellement développeur web junior, <br/>
          vous pouvez explorer ici sune partie de mes travaux. 
          <br/>
          Je reste disponible si vous souhaitez me contacter <br/>
          pour toute demande d'informations ou de collaboration. 
        </p>
      </div> 
      <div className='introduction__picture' >
        <img src='..' alt='profil-cv'/>
      </div>          
    </section> 
  

    <section className='links__section'>
      <div className='links__perso'>
        <a href={'https:www.linkedin.com/in/baptiste-salazar-15518a18b'} target="_blank" rel="noopener noreferrer">
          <ButtonLink source={LinkedinLogo}/>
        </a>
        <NavLink to='/contact' >
          <ButtonLink source={MailLogo}/>
        </NavLink>
        <NavLink to='/projets' >
          <ButtonLink source={WorkLogo}/>
        </NavLink>
      </div> 
    </section>

    <div className='nav__vertical__logo'>
        *** LOGO POUR TRANSITION VERTICAL ***
    </div> 

    <section id='competences__section' className='competences__section'>
      <div className='competences__banner'>
        <SectionBanner  title="SKILLS"/>
      </div>
      <div className='competences__content'>
        <div className='tableau__container'>
          <Tableau categories={categories} />
        </div>
        <LogosBanner />
      </div>
    </section>


    <section className='projets__section'>
      <div className='projets__banner'>
        <SectionBanner  title="PROJETS"/>
      </div>
      <div className='projets__link'>
        <div className='projets__button'>
          <NavLink to='/projets' >
            <p>VOIR LES PROJETS</p>
          </NavLink>
        </div>
      </div>
    </section>


    <section className='contact'>
      <div>
        <NavLink to="/contact">
          <button> ME CONTACTER </button>
        </NavLink>
      </div>
    </section>
  </div>
  );
}

export default Home;
