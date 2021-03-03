import React from 'react';
import {techStackData} from './techStackData';

export const TechStack = () => {
    return (
        <div className='techstack-container'>
            <h2>Tech Stack</h2>
            <div className='techstack'>
                {techStackData.map(tech => {
                    return (
                        <div className='tech-section'>
                            <h4>{tech.category}</h4>
                            <ul>{tech.subcategory.map(item => {
                                return (
                                    <li>{item}</li>
                                )
                            })}
                            </ul>
                            <br/>
                        </div>
                    )
                })}
            </div>
        </div>
        //     <div className="semicircle">
        //         <span className="half"></span>
        //     </div>
        //     <div className="circles">
        //  <div className="circle1">
        //     <h3>Frontend</h3>
        //     <p>Tell me about your project and we brainstorm together the features to create a plan for your product to launch.</p>
        // </div>

        // <div className="circle2">
        //     <h3>Design</h3>
        //     <p>We design the wireframe and agree together how to create the best experience for your users to present your brand.</p>
        // </div>

        // <div className="circle3">
        //     <h3>Deploy</h3>
        //     <p>We prototype and develop your product.  We work together intensely to incorporate your feedback.</p>
        // </div>

        // <div className="circle4">
        //     <h3>Be Ready</h3>
        //      <p>We deploy your product and now your website is ready to get the traction.  Get out there and grow your audience.</p>
        // </div>
        // </div>
        // </div>
    )
}
