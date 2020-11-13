import { Button } from '@material-ui/core';
import React from 'react';
import './Seeking.css';
const Seeking = () => {
    const looking = ['App Developer'];
    const colors = ['#107896', '#C02F1D', '#E56B1f', '#3eb650', '#e12b38'];
    return (
        <div className="seeking">
            <h1 style={{ position: 'absolute', top: '10px', left: '50%', transform: 'translateX(-50%)' }}>
                We Are Eagerly Looking for{' '}
            </h1>
            {looking.map((ele, index) => {
                const i = Math.floor(Math.random() * 5);
                return (
                    <div
                        key={ele}
                        style={{
                            top: `${Math.floor(Math.random() * 127)}px`,
                        }}
                        className={`seeking__ele seeking__ele__${i}`}
                    >
                        <h2 style={{ color: colors[i] }}>{ele}</h2>
                        <Button focusRipple className={`seeking__button seeking__button__${i}`}>
                            Apply
                        </Button>
                    </div>
                );
            })}
        </div>
    );
};

export default Seeking;
