import React from 'react';
import './SidebarOption.css';
import { NavLink } from 'react-router-dom';
const SidebarOption = ({ to, Icon, children, active }) => {
    return (
        <NavLink activeClassName="siderbar__option__active" to={to}>
            <div className={`sidebarOption ${active && 'active'}`}>
                <Icon className="sidebarOption__icon" />
                <h2 className="sidebarOption__title">{children}</h2>
            </div>
        </NavLink>
    );
};

export default SidebarOption;
