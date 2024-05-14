import React from 'react';
import './project-card.sass';


function ProjectCard({ source, title }) {
    return (
        <div className='card__container'>
            <p>{title}</p>
            <img src={source} alt='illustration-projet'/>
        </div>
    );

}

export default ProjectCard