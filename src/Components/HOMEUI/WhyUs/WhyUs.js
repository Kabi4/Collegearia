import React from 'react';
import './WhyUs.css';
const WhyUs = ({ additionalClass }) => {
    return (
        <div className={`whyus ${additionalClass?.join(' ')}`}>
            <h1>Why Choose us?</h1>
            <h3>- We think outside the box</h3>
            <h3>- Connect college peoples together</h3>
            <h3>- Based on idea your college senoirs can tell you more about your college</h3>
            <h3>- No more hesitating or afraid when asking question to seniors we have anoyomus mode</h3>
            <h3>- We think about students and industrial approach</h3>
        </div>
    );
};
export default WhyUs;
