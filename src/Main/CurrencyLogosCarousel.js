// src/components/CurrencyLogosCarousel.js

import React from 'react';
import Slider from 'react-slick';

const CurrencyLogosCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 9,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 6,
        },
      },
    ],
  };

  return (
    <div className="currency-logos-slider">
      <Slider {...settings}>
        <div className="slide">
          <img src="/assets/images/currency/btc.png" alt="Bitcoin" />
        </div>
        <div className="slide">
          <img src="/assets/images/currency/usdt.png" alt="USDT" />
        </div>
        <div className="slide">
          <img src="/assets/images/currency/bch.png" alt="BCH" />
        </div>
        <div className="slide">
          <img src="/assets/images/currency/litecoin.png" alt="LTC" />
        </div>
        <div className="slide">
          <img src="/assets/images/currency/usdc.png" alt="USDC" />
        </div>
        <div className="slide">
          <img src="/assets/images/currency/ethereum.png" alt="ETH" />
        </div>
        <div className="slide">
          <img src="/assets/images/currency/paypal.png" alt="PAYPAL" />
        </div>
        <div className="slide">
          <img src="/assets/images/currency/alipay.png" alt="ALIPAY" />
        </div>
        <div className="slide">
          <img src="/assets/images/currency/wechat-pay.png" alt="WECHAT" />
        </div>
        <div className="slide">
          <img src="/assets/images/currency/perfectmoney.png" alt="PERFECT MONEY" />
        </div>
        <div className="slide">
          <img src="/assets/images/currency/payoneer.png" alt="PAYONEER" />
        </div>
        <div className="slide">
          <img src="/assets/images/currency/skrill.png" alt="SKRILL" />
        </div>
      </Slider>
    </div>
  );
};

export default CurrencyLogosCarousel;
