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
          <h2>We make digital currency simple and accessible for Africans, connecting you to the global financial world through innovative solutions.</h2>
          
          
          <div className="get-started">
        <a
          href="/login"
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
