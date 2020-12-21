import React, {useState} from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection/Index';
import InfoSection from '../components/InfoSection/Index';
import Footer from '../components/Footer';
import Portofolio from '../components/Portofolio/Index';
import ContactForm from '../components/ContactForm/Index';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle} />
        <HeroSection />
        <InfoSection />
        <Portofolio />        
        <ContactForm />
        <Footer />
        </>
    )
}

export default Home
