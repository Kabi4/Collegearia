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
const Sidebar = () => {
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
                <div className="sidebar__user">
                    <Avatar alt="Avatar" src="" />
                    <h2>User</h2>
                </div>
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
                    <SidebarOption active Icon={HomeIcon}>
                        Home
                    </SidebarOption>
                    <SidebarOption Icon={CreateIcon}>Your Questions</SidebarOption>
                    <SidebarOption Icon={BorderColorIcon}>Your Answers</SidebarOption>
                    <SidebarOption Icon={LoyaltyIcon}>Your Badges</SidebarOption>
                    <SidebarOption Icon={HelpIcon}>Help</SidebarOption>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
