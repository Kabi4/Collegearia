import React from 'react';
import './Header.css';
import Logo from './../../Assets/Images/Logo.png';
import { Button } from '@material-ui/core';
import { NavItem } from '../index';
const Header = () => {
    return (
        <div className="header">
            <img className="header__logo" src={Logo} alt="Logo" />
            <h2 className="header__title">Collegearia</h2>
            <nav className="header__nav">
                <NavItem isExpandable options={['Our Motto', 'Why Collegearia?', 'Help & Support Center']}>
                    Home
                </NavItem>
                <NavItem
                    isExpandable
                    options={['Learn REACT', 'Learn CSS', 'Learn JS', 'RoadMap to Full Stack Developer']}
                >
                    Learner Panel
                </NavItem>
                <NavItem isExpandable options={['Our Team', 'Idea', 'Innovation']}>
                    Community
                </NavItem>
                <NavItem isExpandable options={['Email Us', 'Leave A Comment', 'Join Us']}>
                    Contact
                </NavItem>
                <NavItem isExpandable options={['Techs Used', 'Plans', 'Roadmap']}>
                    About
                </NavItem>
            </nav>
            <Button className="header__button" variant="outlined">
                Get Started
            </Button>
        </div>
    );
};

export default Header;
