// src/ComingSoon.js
import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';

const ComingSoon = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date('2024-12-31') - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach(interval => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={interval}>
        {timeLeft[interval]} {interval}{' '}
      </span>
    );
  });

  return (
    <div style={{ display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      backgroundColor: "grey"
      }}>
      <div style={{
          textAlign: "center",
          color: "white",
          background: "#800020",
          padding: "20px",
          borderRadius: "10px"
      }}>
        <div style={{
           fontSize: "3rem",
           marginBottom: "1rem"
        }}>Coming Soon...</div>
        <div style={{
            fontSize: "1.5rem",
            marginBottom: "2rem"
        }}>Currently under maintenance. Stay tuned for something amazing!</div>
        <div style={{
          fontSize: "2rem"
        }}>{timerComponents.length ? timerComponents : <span>Time's up!</span>}</div>
        <span onClick={(() => {window.history.back(-1)})} className='text-white mt-5' style={{cursor: 'pointer', fontSize: '1rem'}}>Go Back</span>
      </div>
    </div>
  );
};

export default ComingSoon;

