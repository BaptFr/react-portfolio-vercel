import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './contact-form.sass';


function ContactForm () {

    // Stockage de la valeur des champs 
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      });
    // Chargement pendant l'envoi
    const [sending, setSending] = useState(false); 

    // Etat selon les champs du formulaire
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
   

    // Gestion du submit
    const handleSubmit = (e) => {
        e.preventDefault();
            //Vérif validité du formulaire
        if (e.target.checkValidity()) { 

            setSending(true);
            emailjs.send(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                {
                    from_name: formData.name,
                    email: formData.email,
                    message: formData.message
                },
                process.env.REACT_APP_EMAILJS_USER_ID
            )
            .then((response) => {
                console.log('Form send SUCCESS!', response.status, response.text);
                setFormData({ name: '', email: '', message: '' });
                setSending(false); 
            })
            .catch((err) => {
                console.log('FAILED...', err);
                setSending(false);
                alert('Une erreur s\'est produite, veuillez réessayer.');
            });
        }
    };
        
    return (

        <div className = 'contact__form__container'>
            <form onSubmit={handleSubmit} className = 'contact__form'>
                <div className = 'contact__form__name'>
                    <label htmlFor='name' className='sr-only'>Votre nom:</label>
                    <input
                        type="text"
                        id='name'
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        maxLength={35}
                        required
                    />
                </div>
                <div  className = 'contact__form__email'>
                    <label htmlFor='email' className='sr-only'>Votre email:</label>
                    <input
                        type="email"
                        id='email'
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        maxLength={50}
                        required
                        pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" 
                    />
                </div>
                <div className = 'contact__form__message'>
                    <label htmlFor='message' className='sr-only'>Votre message:</label>
                    <textarea
                        id='message'
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        maxLength={500}
                        style={{ 
                            resize: "none", 
                            width: "100%", 
                        }}    
                        required
                    />
                    </div>
                <button type="submit" disabled={sending}>  
                  {sending ? 'Envoi en cours...' : 'Envoyer'} {/*  Message chargement */}    
                </button> 
            </form>
        </div>
    );
};

export default ContactForm;