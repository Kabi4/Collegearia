import React, { useState } from 'react';
import './Navitem.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { Backdrop } from '../../Utils/index';
import { NacItemOptions } from '../index';
import FlipMove from 'react-flip-move';
const Navitem = ({ children, isExpandable, options }) => {
    const [showIcons, setShowIcons] = useState(false);
    return (
        <div className="navitem">
            <FlipMove enterAnimation="fade" leaveAnimation="fade">
                {showIcons && (
                    <Backdrop
                        onClick={() =>
                            setShowIcons((prevState) => {
                                return !prevState;
                            })
                        }
                    />
                )}
            </FlipMove>
            <span
                onClick={() =>
                    setShowIcons((prevState) => {
                        return !prevState;
                    })
                }
                style={{ zIndex: showIcons ? '400' : '0' }}
            >
                {children}
                {isExpandable && (showIcons ? <ExpandLessIcon /> : <ExpandMoreIcon />)}
            </span>
            <div className="navItemOptions" style={{ zIndex: showIcons ? '400' : '0' }}>
                <FlipMove enterAnimation="accordionVertical" leaveAnimation="accordionVertical">
                    {showIcons &&
                        options.map((ele, index) => {
                            return <NacItemOptions key={index}>{ele}</NacItemOptions>;
                        })}
                </FlipMove>
            </div>
        </div>
    );
};

export default Navitem;
