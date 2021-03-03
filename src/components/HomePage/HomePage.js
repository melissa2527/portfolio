import React, {useEffect} from 'react';
import {Hero} from './hero/Hero';
import AOS from 'aos';
import './homepage.scss';
import { ProjectSection } from './projectsection/ProjectSection';
import { TechStack } from './tech/TechStack';

export const HomePage = () => {

    useEffect(() => {
        AOS.init({duration: 1500})
    })

    return (
        <div>
            <Hero />
            <ProjectSection />
            <TechStack />
        </div>
    )
}
