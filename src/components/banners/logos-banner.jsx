import React from 'react';
import reactLogo from '../../assets/logos/react-logo.png';
import sassLogo from '../../assets/logos/sass-logo.png';
import jsLogo from '../../assets/logos/js-logo.png';
import htmlLogo from '../../assets/logos/html-logo.png';
import cssLogo from  '../../assets/logos/css-logo.png';
import nodeJsLogo from '../../assets/logos/node-logo.png';
import expressLogo from '../../assets/logos/express-logo.png';
import mongodbLogo from '../../assets/logos/mongo-logo.png';
import githubLogo from '../../assets/logos/github-logo.png';
import figmaLogo from '../../assets/logos/figma-logo.png';
import postmanLogo from '../../assets/logos/postman-logo.png';

import './logos-banner.sass'

function LogosBanner() {
    return(
        <div className='logos'>
            <div className='logos__slide'>
                <img src={reactLogo} id='react-logo' alt="React-logo" loading="lazy"/> 
                <img src={sassLogo} alt="SASS-logo" loading="lazy"/> 
                <img src={jsLogo} alt="JS-logo" loading="lazy" />
                <img src={cssLogo} alt="Css-logo" loading="lazy"/>
                <img src={htmlLogo} alt="Html-logo" loading="lazy"/>
                <img src={nodeJsLogo} alt="NodeJS-Logo" loading="lazy"/>
                <img src={expressLogo} alt="express-logo"loading="lazy"/>
                <img src={mongodbLogo} alt="MongoDB-Logo" loading="lazy"/>
                <img src={githubLogo} alt="GitHub-Logo" loading="lazy"/>
                <img src={postmanLogo} alt="Postman-Logo" loading="lazy"/>
                <img src={figmaLogo} alt="Figma Logo" loading="lazy"/>
            </div>
            <div className='logos__slide'>
                <img src={reactLogo} id='react-logo' alt="React-logo" loading="lazy"/> 
                <img src={sassLogo} alt="SASS-logo" loading="lazy"/> 
                <img src={jsLogo} alt="JS-logo" loading="lazy"/>
                <img src={cssLogo} alt="Css-logo" loading="lazy"/>
                <img src={htmlLogo} alt="Html-logo" loading="lazy"/>
                <img src={nodeJsLogo} alt="NodeJS-Logo" loading="lazy"/>
                <img src={expressLogo} alt="express-logo"loading="lazy"/>
                <img src={mongodbLogo} alt="MongoDB-Logo" loading="lazy"/>
                <img src={githubLogo} alt="GitHub-Logo" loading="lazy"/>
                <img src={postmanLogo} alt="Postman-Logo" loading="lazy"/>
                <img src={figmaLogo} alt="Figma Logo" loading="lazy"/>
            </div>
            <div className='logos__slide'>
                <img src={reactLogo} id='react-logo' alt="React-logo" loading="lazy"/> 
                <img src={sassLogo} alt="SASS-logo" loading="lazy"/> 
                <img src={jsLogo} alt="JS-logo" loading="lazy"/>
                <img src={cssLogo} alt="Css-logo" loading="lazy"/>
                <img src={htmlLogo} alt="Html-logo" loading="lazy"/>
                <img src={nodeJsLogo} alt="NodeJS-Logo" loading="lazy" />
                <img src={expressLogo} alt="express-logo" loading="lazy"/>
                <img src={mongodbLogo} alt="MongoDB-Logo" loading="lazy"/>
                <img src={githubLogo} alt="GitHub-Logo" loading="lazy"/>
                <img src={postmanLogo} alt="Postman-Logo" loading="lazy"/>
                <img src={figmaLogo} alt="Figma Logo" loading="lazy"/>
            </div>
            
        </div>
    )
}

export default LogosBanner;


