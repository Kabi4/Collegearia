import React, { useState, useEffect } from 'react';
import './Sidebar.css';
import { Avatar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { SidebarOption } from '../index';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import CreateIcon from '@material-ui/icons/Create';
import HomeIcon from '@material-ui/icons/Home';
import HelpIcon from '@material-ui/icons/Help';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';
import PublishIcon from '@material-ui/icons/Publish';
import { withRouter, NavLink } from 'react-router-dom';
import UserImage from '../../Assets/UserProfile.jpg';
const Sidebar = (props) => {
    const [serachTerm, setSearchTerm] = useState('');
    const [isMobile, setIsMobile] = useState(window.matchMedia('(max-width: 750px)').matches);
    const [showHeader, setShowHeader] = useState(false);
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
        <>
            {isMobile &&
                (showHeader ? (
                    <PublishIcon
                        onClick={() => setShowHeader((prev) => !prev)}
                        className="scrollDown"
                        style={{ position: 'fixed', top: '20px', left: '20px', zIndex: '1300' }}
                    />
                ) : (
                    <SystemUpdateAltIcon
                        onClick={() => setShowHeader((prev) => !prev)}
                        className="scrollDown"
                        style={{ position: 'fixed', top: '20px', left: '20px', zIndex: '1000' }}
                    />
                ))}
            <div
                className="sidebar"
                style={{ top: isMobile ? (showHeader ? '0' : '-100%') : '62px', zIndex: showHeader ? '1200' : '0' }}
            >
                <NavLink activeClassName="user_detialsActive" to={`${'/browse'}/user-details`}>
                    <div className="sidebar__user">
                        <Avatar alt="Avatar" src={UserImage} />
                        <h2>Kushagra Singh</h2>
                    </div>
                </NavLink>
                <div className="sidebar_search">
                    <input
                        className="sidebar_search_input"
                        disabled={isMobile && showHeader === false ? true : false}
                        type="text"
                        value={serachTerm}
                        onChange={(e) => {
                            setSearchTerm(e.target.value);
                        }}
                    />
                    <SearchIcon className="sidebar_search_icon" />
                </div>
                <hr />
                <div className="sidebar_Options">
                    <SidebarOption to={`${'/browse'}/user-home`} Icon={HomeIcon}>
                        Home
                    </SidebarOption>
                    <SidebarOption to={`${'/browse'}/user-questions`} Icon={CreateIcon}>
                        Your Questions
                    </SidebarOption>
                    <SidebarOption to={`${'/browse'}/user-answers`} Icon={BorderColorIcon}>
                        Your Answers
                    </SidebarOption>
                    <SidebarOption to={`${'/browse'}/user-bagde`} Icon={LoyaltyIcon}>
                        Your Badges
                    </SidebarOption>
                    <SidebarOption to={`${'/browse'}/help`} Icon={HelpIcon}>
                        Help
                    </SidebarOption>
                </div>
                <p className="swipeUp">Swipe Up</p>
            </div>
        </>
    );
};

export default withRouter(Sidebar);
