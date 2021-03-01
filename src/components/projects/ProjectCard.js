import React from 'react';
import './project.scss';

export const ProjectCard = ({project}) => {
    return (
        <div className='card'>
            <img src={project.image} alt={project.title} className='card-img'/>
            <h4>{project.title}</h4>
            <p>{project.tech}</p>
            <div className='card-info'>
                <a href={project.site} target='_blank' rel='noreferrer'>
                    <i className='fas fa-laptop' id='site'/>
                </a>
                <a href={project.code} target='_blank' rel='noreferrer'>
                    <i className='fas fa-laptop-code'id='code'/>
                </a>
            </div>
        </div>
    )
}
