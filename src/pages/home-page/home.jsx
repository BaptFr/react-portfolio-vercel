import React from 'react';
import { NavLink} from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import { Link as ScrollLink } from 'react-scroll';

import SectionBanner from '../../components/banners/section-banner.jsx';
import LogosBanner from '../../components/banners/logos-banner.jsx';
import ButtonLink from '../../components/buttons/button-link.jsx';
import Tableau from '../../components/sections/tableau.jsx';

import MailLogo from'../../assets/logos/mail-logo-col.svg';
import WorkLogo from'../../assets/logos/work-logo-col.svg';
import FormationLogo from '../../assets/logos/graduation-logo-col.svg';
import SkillsLogo from '../../assets/logos/skills-logo-col.svg';
import OcrLogo from '../../assets/logos/ocr-logo.webp';

import IntroPicL from '../../assets/photo-profil-l.webp';
import IntroPicM from '../../assets/photo-profil-m.webp';
import IntroPicS from '../../assets/photo-profil-s.webp';

import competencesData from '../../datas/competences.json';
import './home.sass';

function Home() {
  const { categories } = competencesData;

  return (
  <div className='home__container'>

    { /* ANIMATION */}
    <div className='home__animation'>
      <Typewriter 
        words= {[ 'Baptiste Salazar'  ]}
        loop= {1}
        cursor
        cursorStyle='|'
        typeSpeed={200}
      /> 
    </div>

    { /*INTRO*/}
    <section className='introduction__section'>
      <div className='introduction__text'> 
        <p> Bienvenue sur mon portfolio ! <br/>
          <br/>
          Après une ancienne vie dans le commerce,  j'ai effectué une reconversion <br/> 
          professionnelle pour me plonger dans le développement web.  <br/>
          Explorez ici une sélection de projets qui témoignent de mon parcours, <br/>
          de ma formation et de mes compétences.   <br/>
          <br/>
          Aujourd'hui développeur web junior je suis ouvert aux nouvelles opportunités! <br/>
          N'hésitez pas à me contacter pour toute demande d'informations ou de collaboration. 
        </p>
      </div> 
      <div className='introduction__picture' >
      <img srcSet={`${IntroPicL} 1200w, ${IntroPicM} 768w, ${IntroPicS} 480w`} sizes='(max-width: 1200px) 100vw, 1200px' alt='visage' loading='lazy' />
      </div>  
    </section> 
      


    { /*LIENS DE SECTIONS */}
    <section className='links__section'>
      <div className='links__container'>
        <div className='links__button_container'>
          <ScrollLink to='formation__section' smooth={true} duration={600}>
            <ButtonLink source={FormationLogo}/>
          </ScrollLink>
          <p>Formation</p>
        </div>
        <div className='links__button_container'>
          <ScrollLink to='skills__section' smooth={true} duration={550}>
            <ButtonLink source={SkillsLogo}/>
          </ScrollLink>
          <p>Compétences</p>
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

    { /*Section FORMATION*/}
    <section className='formation__section' id='formation__section'>
      <div className='formation__banner'>
        <SectionBanner  title="FORMATION" id='formation'/>
      </div>
      <div className='content__background'>
        <div className='formation__content'>
            <img src={OcrLogo} alt='openclassrooms' loading="lazy"/>
            <p>- DÉVELOPPEUR WEB -</p>
            <p> Formation certifiante RNCP</p>
            <p>Diplôme de niveau 5 (bac +2)</p>
        </div>
      </div>
    </section>

    { /* Section SKILLS & STACKS */}
    <section id='skills__section' className='skills__section'>
      <div className='skills__banner'>
        <SectionBanner  title="COMPÉTENCES" id='skills'/>
      </div>
      <div className='skills__content'>
        <div className='tableau__container'>
          <Tableau categories={categories} />
        </div>
        <LogosBanner />
        <div className='skills__hover__content'>
          <div className='hover__link'>
            <a href={"https://drive.google.com/file/d/1GjDFHyKeIEbfsTedxIF-Muc4dIwN8heO/view?usp=sharing"} target='_blank' rel='noopener noreferrer'>
              <button >VOIR L'ARBRE DE COMPÉTENCES</button>
            </a>
          </div>
        </div>
      </div>
    </section>

    { /*Section LIEN PAGE PROJET*/}
    <section className='redirection__section'>
      <div className='redirection__banner'>
        <SectionBanner  title='PROJETS'/>
      </div>
        <div className='redirection__link' id='redirection__projets'>
          <div className='redirection__button'>
            <NavLink to='/projets' >
              <p>VOIR LES PROJETS</p>
            </NavLink>
          </div>
        </div>
    </section>

    { /*Section LIEN CONTACT*/}
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
