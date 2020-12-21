import React from 'react';
import Typist from 'react-typist';
import {FaAngleDoubleDown} from 'react-icons/fa';

import { 
    HeroContent,
    HeroContainer, 
    HeroMonitor, 
    HeroScreen, 
    HeroH1,
    HeroP,
    PageArrow,
 } from './HeroElements';

const HeroSection = () => {

    return (
        <HeroContainer id='home'>
            <HeroScreen>       
                <HeroMonitor>
                    <HeroContent>
                        <Typist avgTypingDelay={50} cursor={{ show: false }}>
                            <HeroP> Hello, I am </HeroP> <br/>
                            <HeroH1>Ilie Ioana </HeroH1>
                            <HeroP> Front-End Web Developer</HeroP>
                        </Typist>
                    </HeroContent>  
                </HeroMonitor>
            </HeroScreen>
            <PageArrow>             
                <FaAngleDoubleDown/>
            </PageArrow> 
        </HeroContainer>
            
    )
}

export default HeroSection
