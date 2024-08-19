import React from "react";

import AOS from 'aos';
import 'aos/dist/aos.css'; 

import './Main.css'
import CurrencyLogosCarousel from './CurrencyLogosCarousel';
import Header from './Header'; 
import MainFooter from './Footer'; 
import FAQ from './FAQ';
// import Features from './Features';
import Hero from "./Hero";
import axios from "axios";


class Main extends React.Component {
  constructor(props) {
    super(props);

    const currentYear = new Date().getFullYear();

    this.state = {
    currentYear: currentYear,
    };

    

  }
  
  
  componentDidMount() {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Easing option
      once: true, // Animation only happens once
    });

    const headers = {};

    axios
      .get(`${process.env.REACT_APP_API_URL}`, {
        headers: headers,
      })

      .then((response) => {
          console.log('')
      })
      .catch((error) => {
        console.log(error);
      });

    

  }

  

  
  


  render() {

    return (
      <>

  {/* ======= Header ======= */}
  <Header />
  
  {/* ======= Hero Section ======= */}
  <Hero />

  <main id="main">
    {/* ======= Services Section ======= */}
    <section id="services" className="services section-bg">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Who are our customers?</h2>
        </div>
        <div className="row">
          <div
            className="col-lg-3 col-md-6 d-flex align-items-stretch"
            data-aos="zoom-in"
            data-aos-delay={100}
          >
            <div className="service-container">
              <div className="card">
                <div className="front">
                  <p className="front-heading">Individuals</p>
                  <p>See More Details</p>
                </div>
                <div className="back">
                <p>Securely manage your digital assets with ease.</p>
                <a href={`/personal`}  target="_blank" rel="noopener noreferrer">
            <button className="btn">Learn More Here</button>
          </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-6 d-flex align-items-stretch"
            data-aos="zoom-in"
            data-aos-delay={200}
          >
            <div className="service-container">
              <div className="card">
                <div className="front">
                  <p className="front-heading">Businesses</p>
                  <p>See More Details</p>
                </div>
                <div className="back">
                <p>Streamline your business transactions digitally.</p>
                <a href={`/business`}  target="_blank" rel="noopener noreferrer">
            <button className="btn">Learn More Here</button>
          </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-6 d-flex align-items-stretch"
            data-aos="zoom-in"
            data-aos-delay={300}
          >
            <div className="service-container">
              <div className="card">
                <div className="front">
                  <p className="front-heading">Freelancers</p>
                  <p>See More Details</p>
                </div>
                <div className="back">
                <p>Get paid faster and manage your earnings.</p>
                <a href={`/freelance`} target="_blank" rel="noopener noreferrer">
            <button className="btn">Learn More Here</button>
          </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-6 d-flex align-items-stretch"
            data-aos="zoom-in"
            data-aos-delay={300}
          >
            <div className="service-container">
              <div className="card">
                <div className="front">
                  <p className="front-heading">Organizations</p>
                  <p>See More Details</p>
                </div>
                <div className="back">
                <p>Optimize your organization's financial operations.</p>
                <a href={`/organization`}  target="_blank" rel="noopener noreferrer">
            <button className="btn">Learn More Here</button>
          </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* End Services Section */}
    
    {/* ======= Frequently Asked Questions Section ======= */}
    <FAQ />
    {/* Carousel */}
    <section  id="carousel" className="carousel">
    <CurrencyLogosCarousel />
    </section>
    
    {/* ======= Contact Section ======= */}
    {/* End Contact Section */}
    
  </main>
  

  {/* End #main */}
  {/* ======= Footer ======= */}
  <MainFooter />
  {/* End Footer */}

  <style jsx>{`
        .btn {
          color: #fff;
          border: 2px solid #fff;
          padding: 10px 20px;
          font-size: 12px;
          border-radius: 10px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .btn:hover {
          background-color: #fff;
          color: #404040;
        }

       
      `}</style>
  
</>

    );
  }
}

export default Main;
