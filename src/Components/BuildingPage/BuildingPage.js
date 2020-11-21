import React from 'react';
import Gif from './../../Assets/Images/construction.gif';
import './BuildingPage.css';
const BuildingPage = ({ title }) => {
    return (
        <div className="browse__content topZero buildingPage">
            <div className="buildingPage__content">
                <h1 className="buildingPage__header userSelect">
                    <span style={{ color: 'red', fontWeight: '900', fontSize: '32px' }}>{title}</span> Section Is not
                    available till now!
                </h1>
                <h1 className="buildingPage__header userSelect">🚧 Error 404 Page underconstruction! 👷 </h1>
                <img src={Gif} className="building__gif" alt="Building" />
            </div>
        </div>
    );
};

export default BuildingPage;
