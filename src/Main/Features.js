import React from 'react';
import './Features.css';

const features = [
    {
        icon: 'las la-shield-alt',
        title: '100% Highly',
        description: 'Secure system'
    },
    {
        icon: 'las la-question-circle',
        title: '24/7 Customer',
        description: 'Support service'
    },
    {
        icon: 'las la-sync-alt',
        title: '365 Days',
        description: 'Instant payment'
    },
    {
        icon: 'las la-sort',
        title: 'Realtime',
        description: 'Competitive rates'
    },
    {
        icon: 'las la-hand-holding-usd',
        title: 'Over 50+',
        description: 'Foreign Currencies'
    }
];

const Features = () => (
    <div className="features-list">
        {features.map((feature, index) => (
            <div key={index} className="feature">
                <div className="media">
                    <div className="media-left media-middle feature-icon">
                        <i className={feature.icon}></i>
                    </div>
                    <div className="media-body media-middle feature-text">
                        <strong>{feature.title}</strong>
                        {feature.description}
                    </div>
                </div>
            </div>
        ))}
    </div>
);

export default Features;
