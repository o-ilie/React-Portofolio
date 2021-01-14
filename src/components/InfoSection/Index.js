import React from 'react';
import {FaHtml5, FaCss3Alt } from 'react-icons/fa';
import {SiJavascript, SiAdobephotoshop} from 'react-icons/si';
import { CircularProgressbar, buildStyles  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import VisibilitySensor from "react-visibility-sensor";
import { Button } from '../ButtonElement';
import Resume from '../../Documents/ProfileIlieIoana.pdf';

import { 
    InfoContainer,
    InfoWrapper,
    Column1, 
    InfoRow, 
    TextWrapper, 
    Heading, 
    Subtitle, 
    BtnWrapp, 
    Column2,
    Box,
    Icon
  } from './InfoElements'

 const InfoSection = () => {
   return (
        <>
            <InfoContainer id='about'> 
                <InfoWrapper>
                    <InfoRow>
                        <Column1>
                            <TextWrapper>
                                <Heading>About</Heading>
                                <Subtitle>
                                    I started to study web development in June 2020, on BitAcademy. 
                                    Now I want to focus on improving my skills with CSS and JavaScript and 
                                    learning React. </br>
                                    Right now my main goal is to find a job that will give me an opportunity to improve my programming skills.       
                                </Subtitle>
                                <BtnWrapp>
                                    <Button                                                                
                                    href={Resume} 
                                    target="_blank" 
                                    aria-label="resume"
                                    offset={-80}
                                    primary={false}>My Resume                                    
                                    </Button>
                                </BtnWrapp>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            
                            <Box>
                                <VisibilitySensor>
                                    {({ isVisible }) => {
                                    const percentage = isVisible ? 90 : 0;
                                    return (
                                        <CircularProgressbar
                                        value={percentage}
                                        text={`${percentage}%`}
                                        styles={buildStyles({
                                            rotation: 0.25,
                                            strokeLinecap: 'round',
                                            textSize: '20px', 
                                            textColor: 'black',   
                                            pathColor: `#43c59e`,
                                            trailColor: '#9b7ede',
                                            backgroundColor: '#3e98c7',
                                            pathTransitionDuration: 1
                                        })}
                                        />
                                    );
                                    }}
                                </VisibilitySensor>
                                <Icon><FaHtml5 color='#28666e'/>HTML</Icon>     
                            </Box>

                            <Box>
                                <VisibilitySensor>
                                    {({ isVisible }) => {
                                        const percentage = isVisible ? 75 : 0;
                                        return (
                                            <CircularProgressbar
                                            value={percentage}
                                            text={`${percentage}%`}
                                            styles={buildStyles({
                                                rotation: 0.25,
                                                strokeLinecap: 'round',
                                                textSize: '20px', 
                                                textColor: 'black',   
                                                pathColor: `#43c59e`,
                                                trailColor: '#9b7ede',
                                                backgroundColor: '#3e98c7',
                                                pathTransitionDuration: 1
                                                })}
                                            />
                                            );
                                        }}
                                    </VisibilitySensor>                                
                                <Icon><FaCss3Alt color='#28666e'/>CSS</Icon>
                            </Box>

                            <Box>
                                <VisibilitySensor>
                                    {({ isVisible }) => {
                                        const percentage = isVisible ? 60 : 0;
                                        return (
                                            <CircularProgressbar
                                            value={percentage}
                                            text={`${percentage}%`}
                                            styles={buildStyles({
                                                rotation: 0.25,
                                                strokeLinecap: 'round',
                                                textSize: '20px', 
                                                textColor: 'black',   
                                                pathColor: `#43c59e`,
                                                trailColor: '#9b7ede',
                                                backgroundColor: '#3e98c7',
                                                pathTransitionDuration: 1
                                            })}
                                            />
                                        );
                                    }}
                                </VisibilitySensor>                      
                                <Icon><SiJavascript color='#28666e'/>JS</Icon>
                            </Box>

                            <Box>
                                <VisibilitySensor>
                                    {({ isVisible }) => {
                                        const percentage = isVisible ? 60 : 0;
                                        return (
                                            <CircularProgressbar
                                            value={percentage}
                                            text={`${percentage}%`}
                                            styles={buildStyles({
                                                rotation: 0.25,
                                                strokeLinecap: 'round',
                                                textSize: '20px', 
                                                textColor: 'black',   
                                                pathColor: `#43c59e`,
                                                trailColor: '#9b7ede',
                                                backgroundColor: '#3e98c7',
                                                pathTransitionDuration: 1
                                            })}
                                            />
                                        );
                                    }}
                                </VisibilitySensor>                                
                                <Icon><SiAdobephotoshop color='#28666e'/>PS</Icon>
                            </Box>

                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
            
        </>
    )
}
export default InfoSection
