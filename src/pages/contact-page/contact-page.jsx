import React from 'react';
import './contact-page.sass';
import SectionBanner from '../../components/banners/section-banner.jsx';
import ContactForm from '../../components/forms/contact-form.jsx';

function Contact() {
    return(
        <div className='contact__page__container'>
            <div className='contact__banner'>
                <SectionBanner title ='Me contacter' />
            </div>
            <div>
            {/*  <a href={'https:www.linkedin.com/in/baptiste-salazar-15518a18b'} target="_blank" rel="noopener noreferrer">
            <ButtonLink source={'*'}/>
            </a> */}
            </div>

            <div className='contact__container'>
                <ContactForm />
            </div>
        </div>
    )
}

export default Contact;