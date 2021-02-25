import React, {useEffect} from 'react';
import {Hero} from './Hero';
import AOS from 'aos';

export const HomePage = () => {

    useEffect(() => {
        AOS.init({
            duration: 1500
        })
    })
    return (
        <div>
            <Hero />
            {/* <Portfolio/> */}
        </div>
    )
}
