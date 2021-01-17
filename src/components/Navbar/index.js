import {FaBars, FaLaptopCode} from 'react-icons/fa';
import {animateScroll as scroll } from 'react-scroll';
import {
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavTitle,
    NavLinks } from './NavbarElements';


const Navbar = ({toggle}) => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/" onClick={toggleHome}>
                        <FaLaptopCode />
                        <NavTitle>oilie</NavTitle>
                    </NavLogo>

                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        
                        <NavItem>
                            <NavLinks to="home"
                            smooth={true} 
                            duration={400} 
                            spy={true} 
                            exact='true' 
                            offset={-80}>Home</NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks to="about"
                            smooth={true} 
                            duration={400} 
                            spy={true} 
                            exact='true' 
                            offset={-70}>
                                About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="portofolio"
                            smooth={true} 
                            duration={400} 
                            spy={true} 
                            exact='true' 
                            offset={-70}>Portfolio</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contact"
                            smooth={true} 
                            duration={400} 
                            spy={true} 
                            exact='true' 
                            offset={-150}>Contact</NavLinks>
                        </NavItem>

                    </NavMenu>
                    
                </NavbarContainer>
            </Nav>

        </>
    )
}

export default Navbar;
