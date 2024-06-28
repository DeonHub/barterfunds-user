import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Frequently Asked Questions</h2>
          <p>Here are some common questions our customers ask:</p>
        </div>
        <div className="faq-list">
          <ul>
            {faqData.map((faq, index) => (
              <li key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <i className="la la-question-circle icon-help" />{' '}
                <span
                  onClick={() => toggleFAQ(index)}
                  className={activeIndex === index ? 'expanded' : 'collapsed'}
                  style={{ cursor: 'pointer' }}
                >
                  {faq.question}{' '}
                  <i className={`la la-angle-down icon-show ${activeIndex === index ? 'hidden' : ''}`} />
                  <i className={`la la-angle-up icon-close ${activeIndex === index ? '' : 'hidden'}`} />
                </span>
                <div className={`collapse ${activeIndex === index ? 'show' : ''}`}>
                  <p>{faq.answer}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

const faqData = [
  {
    question: 'What is the currency exchange rate?',
    answer: 'The currency exchange rate is the value of one currency in relation to another. It determines how much of one currency you can get in exchange for another. Exchange rates fluctuate constantly due to factors such as supply and demand, geopolitical events, and economic indicators. We understand that finding the best exchange rate is important to you. That\'s why we offer competitive rates that are updated in real-time to ensure that you always get the best deal possible.'
  },
  {
    question: 'How do I exchange currency?',
    answer: 'To exchange currency, you have to login to your account to access the user dashboard where you can exchange. Simply select the currencies you want to exchange and the amount, and then follow the instructions to complete your transaction.'
  },
  {
    question: 'What is the processing time for currency exchange?',
    answer: 'The processing time for currency exchange varies depending on the method you choose. Immediately you complete your exchange order, the transaction can typically be completed within a few minutes. Some transactions may take longer due to security and verification procedures. We know that time is money, and that\'s why we offer instant payment options. Once your exchange is complete, your payment will be processed and sent to your account instantly. No more waiting around for days to receive your payment!'
  },
  {
    question: 'What documents do I need for verification?',
    answer: 'Generally, you will need a valid government-issued ID such as a passport, driver\'s license, or national ID card to exchange currency. In some cases, you may also be required to provide additional documentation, such as proof of address or proof of income.'
  },
  {
    question: 'How can I contact your customer support team?',
    answer: 'You can contact our customer support team by emailing support@barter-funds.com or by calling our office number at 0598870911.'
  }
];

export default FAQ;
