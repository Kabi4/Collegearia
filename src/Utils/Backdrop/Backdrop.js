import React, { forwardRef } from 'react';
import './Backdrop.css';
const Backdrop = forwardRef(({ onClick }, ref) => {
    return (
        <div
            ref={ref}
            onClick={() => {
                if (onClick) {
                    onClick();
                }
            }}
            className="backdrop"
        ></div>
    );
});

export default Backdrop;
