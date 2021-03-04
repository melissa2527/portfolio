import React from 'react';
import {techStackData} from './techStackData';
import './techstack.scss';

export const TechStack = () => {
    return (
        <div className='techstack-container'>
            <h2>Tech Stack</h2>
            <div className='techstack'>
                {techStackData.map(tech => {
                    return (
                        <div className='tech-section'>
                            <div className='circle'>
                                <div className='semi-circle'></div>
                            </div>
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
    )
}
