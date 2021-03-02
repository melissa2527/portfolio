import React, {useEffect} from 'react';
import {Hero} from './Hero';
import AOS from 'aos';
import './homepage.scss';
import { ProjectSection } from './ProjectSection';

export const HomePage = () => {

    useEffect(() => {
        AOS.init({
            duration: 1500
        })
    })
    return (
        <div>
            <Hero />
            <ProjectSection />
            <div className='break'></div>
            <div className="semicircle">
                <span className="half"></span>
            </div>
            <div className="circles">
         <div className="circle1">
            <h3>Frontend</h3>
            <p>Tell me about your project and we brainstorm together the features to create a plan for your product to launch.</p>
        </div>

        <div className="circle2">
            <h3>Design</h3>
            <p>We design the wireframe and agree together how to create the best experience for your users to present your brand.</p>
        </div>

        <div className="circle3">
            <h3>Deploy</h3>
            <p>We prototype and develop your product.  We work together intensely to incorporate your feedback.</p>
        </div>

        <div className="circle4">
            <h3>Be Ready</h3>
             <p>We deploy your product and now your website is ready to get the traction.  Get out there and grow your audience.</p>
        </div>
    </div>
        </div>
    )
}
