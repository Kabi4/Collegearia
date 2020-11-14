import React, { useEffect, useState } from 'react';
import './Header.css';
import Logo from './../../Assets/Images/Logo.png';
import { Button, IconButton } from '@material-ui/core';
import { NavItem } from '../index';
import MenuIcon from '@material-ui/icons/Menu';
const Header = React.memo((props) => {
    const [isMobile, setIsMobile] = useState(window.matchMedia('(max-width: 750px)').matches);
    const [showHeader, setShowHeader] = useState(true);
    useEffect(() => {
        let watchMedia = window.matchMedia('(max-width: 750px)');
        const listener = watchMedia.addListener(() => {
            setIsMobile(window.matchMedia('(max-width: 750px)').matches);
        });
        return () => {
            watchMedia.removeListener(listener);
            watchMedia = null;
        };
    }, []);

    return (
        <div
            style={{ left: isMobile && showHeader ? '-100%' : '0', zIndex: '1100' }}
            className={`header ${isMobile && 'mobile'}`}
        >
            {isMobile && (
                <IconButton
                    onClick={() => {
                        if (isMobile) {
                            setShowHeader(!showHeader);
                        }
                    }}
                    className="header__menubutton"
                >
                    <MenuIcon />
                </IconButton>
            )}
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
                {props.pageCondition}
            </Button>
        </div>
    );
});

export default Header;
