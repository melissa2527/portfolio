import React from 'react';
import {Hero} from './hero/Hero';
import './homepage.scss';
import { ProjectSection } from './projectsection/ProjectSection';
import { TechStack } from './tech/TechStack';
import { AboutSection } from './about/AboutSection';

export const HomePage = () => {
    return (
        <div style={{'overflow-x': 'hidden'}}>
            <Hero />
            <AboutSection/>
            <TechStack />
            <ProjectSection />
        </div>
    )
}
