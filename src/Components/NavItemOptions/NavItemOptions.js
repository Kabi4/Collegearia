import React, { forwardRef } from 'react';
import './NavItemOptions.css';
const NavItemOptions = forwardRef(({ children }, ref) => {
    return (
        <div className="navitemoption" ref={ref}>
            {children}
        </div>
    );
});

export default NavItemOptions;
