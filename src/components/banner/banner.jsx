import React from 'react';
import './banner.sass'

function Banner({ title }) {
    return(
        <div className="banner__container">
            <h2> {title} </h2>
        </div>

    )
}

export default Banner;