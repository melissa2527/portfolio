import React from 'react';
import {projectListData} from '../../projectListData';
import {ProjectCard} from './ProjectCard';
import './project.scss';


export const ProjectList = () => {

    return (
        <div className='page-container'>
            <h2>Project List</h2>
            <div className='card-container'>
                {projectListData.map(project => {
                return (
                    <ProjectCard project={project}/>
                )
                })} 
            </div>
        </div>
    )
}
