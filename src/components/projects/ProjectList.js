import React from 'react';
import {projectListData} from '../../projectListData';
import {ProjectCard} from './ProjectCard';
import './project.scss';


export const ProjectList = () => {

    return (
        <div className='card-container'>
            <h1>Project List</h1>
           {projectListData.map(project => {
               return (
                   <ProjectCard project={project}/>
               )
           })} 
        </div>
    )
}
