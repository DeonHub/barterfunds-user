// src/ComingSoon.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

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
    <ComingSoonContainer>
      <Content>
        <Title>Coming Soon...</Title>
        <Subtitle>Currently under maintenance. Stay tuned for something amazing!</Subtitle>
        <Timer>{timerComponents.length ? timerComponents : <span>Time's up!</span>}</Timer>
        <span onClick={(() => {window.history.back(-1)})} className='text-white mt-5' style={{cursor: 'pointer', fontSize: '1rem'}}>Go Back</span>
      </Content>
    </ComingSoonContainer>
  );
};

export default ComingSoon;

const ComingSoonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: grey;
`;

const Content = styled.div`
  text-align: center;
  color: white;
  background: #800020;
  padding: 20px;
  border-radius: 10px;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const Timer = styled.div`
  font-size: 2rem;
`;
