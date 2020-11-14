import React from 'react';
import './SidebarOption.css';
const SidebarOption = ({ Icon, children, active }) => {
    return (
        <div className={`sidebarOption ${active && 'active'}`}>
            <Icon className="sidebarOption__icon" />
            <h2 className="sidebarOption__title">{children}</h2>
        </div>
    );
};

export default SidebarOption;
