import React, {useEffect} from "react";
import projetsData from '../../datas/projets.json';
import './projet-modal.sass';




const ProjetModal = ({ isOpen, onClose }) => {


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isOpen && !event.target.closest('.modal__content')) {
            onClose();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [isOpen, onClose]);

    const modalClassName = isOpen ? 'modal__overlay open' : 'modal__overlay close';
   
    return (
       
        
        <div className={modalClassName} >

            <div className="modal__content"onClick={(e) => e.stopPropagation()} >
                <button className="close__button" onClick={onClose}>X</button>
                <div className='modal__title'>
                    <p> TITRE PROJET</p>
                </div>
                <div className='modal__text'>
                    <p>TEXTE</p>
                </div>
                <div className='modal__link'>
                    <button>LIEN</button>
                </div>
            </div>
        </div>
    );
};

export default ProjetModal;
