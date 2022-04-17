import React from 'react';
import './Home.css'
import Navbar from './../Navbar/Navbar';
import Details from './../Details/Details';
import Servicess from './../Servicess/Servicess';
import Projects from './../Projects/Projects';
import Testimonial from './../Testimonial/Testimonial';
import Contact from './../Contact/Contact';
import Footer from './../Footer/Footer';
const Home = () => {
    return (
        <div>
           <Navbar />
             <Details />
             < Servicess />
             <Projects />
             <Testimonial />
             <Contact/>
            <Footer />

        </div>
    );
};

export default Home;