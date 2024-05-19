import React from 'react';
import { motion } from 'framer-motion';
import './section-banner.sass'

function SectionBanner({ title }) {
    return(
        <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        >
        
        <div className="banner__container">
            <hr />
            <h2> {title} </h2>
        </div>
        </motion.div>
    )
}

export default SectionBanner;