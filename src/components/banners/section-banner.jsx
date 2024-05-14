import React from 'react';
import './section-banner.sass'

function SectionBanner({ title }) {
    return(
        <div className="banner__container">
            <h2> {title} </h2>
        </div>
    )
}

export default SectionBanner;