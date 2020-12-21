import React from 'react'
import {FaFacebook, FaGithub, FaLinkedin, FaLaptopCode } from 'react-icons/fa';
import {animateScroll as scroll } from 'react-scroll';
import {
    FooterContainer, 
    FooterWrap, 
    SocialIcons,
    SocialLogo,
    SocialMedia,
    SocialMediaWrap,
    SocialIconLink,
    WebsiteRights
} from './Footerelements';

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/" onClick={toggleHome}>
                            <FaLaptopCode /> oilie
                        </SocialLogo>
                        <WebsiteRights>oilie © {new Date().getFullYear()} All rights reserved. </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink rel="nofollow" href="https://github.com/oana271996" target="_blank" aria-label="Github">
                                <FaGithub />
                            </SocialIconLink>
                            <SocialIconLink rel="nofollow" href="https://www.linkedin.com/in/ioana-ilie-61671b174/" target="_blank" aria-label="Linkedin">
                                <FaLinkedin />
                            </SocialIconLink>
                            <SocialIconLink rel="nofollow" href="https://www.facebook.com/ioana.ilie.9216778/" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>    
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
