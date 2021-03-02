import React, {useState} from 'react';
import {projectListData} from '../../projectListData';
import './projectsection.scss';

export const ProjectSection = () => {
    const [current, setCurrent] = useState(0);

    const nextPicture = () => {
        setCurrent(current === projectListData.length -1 ? 0 : current + 1)
    }

    const prevPicture = () => {
        setCurrent(current === 0 ? projectListData.length - 1: current - 1)
    }

    return (
        <div className='project-container'>
            <button onClick={prevPicture} className='left-arrow'><i className="fas fa-arrow-left"></i></button>
            <button onClick={nextPicture} className='right-arrow'><i className="fas fa-arrow-right"></i></button>
            {projectListData.map((image, index) => {
                return (
                    <div className={index === current ? 'slide-active' : 'slide'} key={index}>
                        {index === current && (
                            <div>
                            <img src={image.image} alt='' className='image' height={253} width={450}/>
                            <p>{image.name}</p>
                            </div>
                )}
                </div>
                )
                        })}

            <div className='project--section'>
                <img src='./img/computer.png' alt='laptop'/>    
            </div>
        </div>
    )
}
