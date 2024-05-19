import React from 'react';
import { NavLink} from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';

import SectionBanner from '../../components/banners/section-banner.jsx';
import LogosBanner from '../../components/banners/logos-banner.jsx';
import ButtonLink from '../../components/buttons/button-link.jsx';
import Tableau from '../../components/sections/tableau.jsx';

import MailLogo from'../../assets/logos/mail-logo-col.svg';
import WorkLogo from'../../assets/logos/work-logo-col.svg';
import FormationLogo from '../../assets/logos/graduation-logo-col.svg';
import SkillsLogo from '../../assets/logos/skills-logo-col.svg';
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
          vous pouvez explorer ici une partie de mes travaux. 
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
        <div className='links__button_container'>
          <a href='#formation__section'> 
            <ButtonLink source={FormationLogo}/>
          </a>
          <p>Formation</p>
        </div>
        <div className='links__button_container'>
          <a href='#skills__section'> 
            <ButtonLink source={SkillsLogo}/>
          </a>
          <p>Skills</p>
        </div>
        <div className='links__button_container'>
          <NavLink to='/projets' >
            <ButtonLink source={WorkLogo}/>
          </NavLink>
          <p>Page projets</p>
        </div>
        <div className='links__button_container'>
          <NavLink to='/contact' >
            <ButtonLink source={MailLogo}/>
          </NavLink>
          <p>Page contact</p>
        </div>
      </div> 
    </section>

    <div className='nav__vertical__logo'>
        *** LOGO POUR TRANSITION VERTICAL ***
    </div> 

    <section id='formation__section' className='formation__section'>
      <div className='formation__banner'>
        <SectionBanner  title="FORMATION" id='formation'/>
      </div>
      <div className='formation__content'>
        <p>aaaa</p>
        
      </div>
    </section>

    <section id='skills__section' className='skills__section'>
      <div className='skills__banner'>
        <SectionBanner  title="SKILLS" id='skills'/>
      </div>
      <div className='skills__content'>
        <div className='tableau__container'>
          <Tableau categories={categories} />
        </div>
        <LogosBanner />
      </div>
    </section>


    <section className='redirection__section'>
      <div className='redirection__banner'>
        <SectionBanner  title='PROJETS'/>
      </div>
      <div className='redirection__link' id='redirection__projet'>
        <div className='redirection__button'>
          <NavLink to='/projets' >
            <p>VOIR LES PROJETS</p>
          </NavLink>
        </div>
      </div>
    </section>


    <section className='redirection__section' id="bottom__section">
      <div className='redirection__banner'>
        <SectionBanner  title='CONTACT'/>
      </div>
      <div className='redirection__link' id='redirection__contact'>
        <div className='redirection__button'>
          <NavLink to='/contact' >
            <p> ME CONTACTER DIRECTEMENT</p>
          </NavLink>
        </div>
      </div>
    </section>
  </div>
  );
}

export default Home;
