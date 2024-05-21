import React from 'react';
import './contact-page.sass';
import SectionBanner from '../../components/banners/section-banner.jsx';
import ContactForm from '../../components/forms/contact-form.jsx';
import ButtonLink from '../../components/buttons/button-link.jsx';
import LinkedinLogo from '../../assets/logos/linkedin-logo.svg'

function Contact() {
    return(
        <div className='contact__page__container'>
            <div className='contact__banner'>
                <SectionBanner title ='Me contacter' />
            </div>
            <div className='contact__page__text'>
                <p> N'hésitez surtout pas à me contacter en remplissant le formulaire ou via LinkedIn et je vous répondrai dans les plus brefs délais !
                </p>
            </div>
            <a href={'https:www.linkedin.com/in/baptiste-salazar-15518a18b'} target="_blank" rel="noopener noreferrer">
                <ButtonLink source={LinkedinLogo} />
            </a>
            <div className='contact__container'>
                <ContactForm />
            </div>
        </div>
    )
}

export default Contact;