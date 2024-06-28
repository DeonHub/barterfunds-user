import './Main.css'
import Features from './Features';

function Hero() {
  

  
  return (
    <section id="hero" className="d-flex align-items-center" >
 
    <div
      className="container position-relative" 
      data-aos="fade-up"
      data-aos-delay="100"
    >
      
      <div className="row justify-content-center">
        <div className="col-xl-7 col-lg-9 text-center">
          <h1>Buy. Sell. Send. Receive.</h1>
          <h2>Pioneering fast and secure cross-border, peer-to-peer, business-to-business and marketplace transactions.</h2>
          
          <div className="get-started">
        <a
          href="https://wa.me/message/ON5PHWAZTGKWI1"
          className="btn-get-started"
        >
          Get Started
        </a>
      </div>
        </div>
      </div>
      <Features />
      
    </div>
  </section>
  );
}

export default Hero;