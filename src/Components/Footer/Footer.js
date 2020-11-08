import React from 'react';
import Logo from './../../Assets/Images/Logo.png';
import './Footer.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
const Footer = () => {
    return (
        <div
            className="footer__contianer"
            style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '20px 2px',

                backgroundAttachment: 'fixed',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}
        >
            <div className="footer">
                <div
                    style={{ display: 'grid', placeItems: 'center', width: 'calc(100%/4)', minWidth: '200px' }}
                    className="footer__column__parent"
                >
                    <div className="footer__column">
                        <div className="c footer__logos">
                            <h2 className="footer__icon">Collegearia</h2>
                            <img className="footer__logo" src={Logo} alt="Collegearia" />
                        </div>
                        <h4 className="footer__detail">
                            We all together developed this for making you college life easier.Join now and stop wasting
                            time in thinking what to do next how to tackle own college problem.We have idea of gathering
                            you collegemates here together in one place.
                        </h4>
                        <div className="footer__social">
                            <div className="footer__social__icon">
                                <FacebookIcon className="footer__social__icon__icon" />
                            </div>
                            <div className="footer__social__icon">
                                <InstagramIcon className="footer__social__icon__icon" />
                            </div>
                            <div className="footer__social__icon">
                                <LinkedInIcon className="footer__social__icon__icon" />
                            </div>
                            <div className="footer__social__icon">
                                <TwitterIcon className="footer__social__icon__icon" />
                            </div>
                            <div className="footer__social__icon">
                                <YouTubeIcon className="footer__social__icon__icon" />
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    style={{ display: 'grid', placeItems: 'center', width: 'calc(100%/4)', minWidth: '200px' }}
                    className="footer__column__parent"
                >
                    <div className="footer__column">
                        <div className="footer__column_title">About us</div>
                        <p className="footer__column__item">Our Team</p>
                        <p className="footer__column__item">Our Techs</p>
                        <p className="footer__column__item">Our Projects</p>
                        <p className="footer__column__item">Help & Support</p>
                    </div>
                </div>
                <div
                    style={{ display: 'grid', placeItems: 'center', width: 'calc(100%/4)', minWidth: '200px' }}
                    className="footer__column__parent"
                >
                    <div className="footer__column">
                        <div className="footer__column_title">Learn Skills</div>
                        <p className="footer__column__item">React</p>
                        <p className="footer__column__item">Node</p>
                        <p className="footer__column__item">Django</p>
                        <p className="footer__column__item">CSS MASTER</p>
                        <p className="footer__column__item">Full Stack</p>
                        <p className="footer__column__item">Terms & Conditions</p>
                    </div>
                </div>
                <div
                    style={{ display: 'grid', placeItems: 'center', width: 'calc(100%/4)', minWidth: '200px' }}
                    className="footer__column__parent"
                >
                    <div className="footer__column">
                        <div className="footer__column_title">Join us</div>
                        <p className="footer__column__item">App Developer</p>
                        <p className="footer__column__item">Mentor</p>
                        <p className="footer__column__item">Mantianers</p>
                        <p className="footer__column__item">Terms & Conditions</p>
                    </div>
                </div>
            </div>
            <p className="footer__copyright">
                All rights reserved. © under 2020 Collegearia. Using the UI and caliming as your own is strictly
                prohibited. <span style={{ color: 'red' }}>Terms & Conditions</span> Applied.
            </p>
        </div>
    );
};

export default Footer;
