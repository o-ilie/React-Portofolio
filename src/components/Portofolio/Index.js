import React from 'react';
import { Button } from '../ButtonElement';
import Calculator from '../../images/calculator.png'
import Template from '../../images/Template.PNG'
import PS from '../../images/Artboard.png'
import Challenge from '../../images/Capture.png'
import { MDBMask, MDBView} from "mdbreact";

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
    CalcLink,
    Img
  } from './PortofolioElements'

const Portofolio = () => {
    return (
         <>
             <InfoContainer id='portofolio'> 
                 <InfoWrapper>
                     <InfoRow>
                         <Column1>
                             <TextWrapper>
                                 <Heading>Portfolio</Heading>
                                 <Subtitle>
                                    I am a Creative Developer and I make things work. 
                                    Turning your dreams into reality.
                                 </Subtitle>
                                 <BtnWrapp>
                                     <Button rel="nofollow" href="https://github.com/oana271996" 
                                     target="_blank" 
                                     aria-label="Github"
                                     offset={-80}
                                     primary={true}
                                     > Source Code </Button>
                                 </BtnWrapp>
                             </TextWrapper>
                         </Column1>

                         <Column2>
                            <Box>  
                                <MDBView hover>                             
                                    <Img 
                                    src={Calculator} 
                                    alt='Javascript Calculator'
                                    />
                                    <MDBMask className="flex-center" overlay="black-strong">
                                        <CalcLink rel="nofollow" href="https://js-calculator-nine.vercel.app/calculator.html" target="_blank">JavaScript Project <br/> View more +</CalcLink>
                                    </MDBMask>
                                </MDBView>                                  
                            </Box>

                            <Box>
                                <MDBView hover>     
                                    <Img 
                                        src={Template} 
                                        alt='Tourism Template Website'
                                    />
                                    <MDBMask className="flex-center" overlay="black-strong">
                                        <CalcLink rel="nofollow" href='https://template-website-ilie-ioana.vercel.app' target="_blank">HTML/CSS Project <br/> View more +</CalcLink>
                                    </MDBMask>
                                </MDBView>  
                            </Box>

                            <Box>
                                <MDBView hover>     
                                    <Img 
                                        src={PS} 
                                        alt='Photoshop Website'
                                    />
                                    <MDBMask className="flex-center" overlay="black-strong">
                                        <CalcLink rel="nofollow" href={PS} target="_blank">Photoshop Project <br/> View more +</CalcLink>
                                    </MDBMask>
                                </MDBView>                    
                            </Box>

                            <Box>
                                <MDBView hover>     
                                    <Img 
                                        src={Challenge} 
                                        alt='Tourism TemplateChat app CSS illustration Website - Frontend Mentor'
                                    />
                                    <MDBMask className="flex-center" overlay="black-strong">
                                        <CalcLink rel="nofollow" href='https://www.frontendmentor.io/solutions/htmlcss-NX4iEF9t6' target="_blank">Frontend Mentor Challenge <br/> View more +</CalcLink>
                                    </MDBMask>
                                </MDBView> 
                            </Box>
                         
                         </Column2>

                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
            
        </>
    )
}

export default Portofolio
