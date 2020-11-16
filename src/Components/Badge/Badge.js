import React from 'react';
import './Badge.css';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import StarBorderIcon from '@material-ui/icons/StarBorder';
const Badge = ({ ele, ...props }) => {
    const color = {
        easy: '#83e85a',
        medium: '#f4fa9c',
        hard: '#d72323',
    };
    return (
        <div style={{ backgroundColor: color[ele.category] }} className="badge">
            <h2 className="badge__name">{ele.badge}</h2>
            <ele.Icon className="badge__icon" />
            <div className="badge__stars">
                {Array(parseInt(ele.stars + 0.2))
                    .fill(1)
                    .map((ele, index) => (
                        <StarIcon className="badge__star" key={index} />
                    ))}
                {ele.stars - parseInt(ele.stars) > 0.2 && ele.stars - parseInt(ele.stars) < 0.8 && (
                    <StarHalfIcon className="badge__star" key="halfStar" />
                )}
                {ele.stars <= 4.2 &&
                    Array(
                        5 -
                            (ele.stars - parseInt(ele.stars) > 0.2 && ele.stars - parseInt(ele.stars) < 0.8
                                ? parseInt(ele.stars) + 1
                                : parseInt(ele.stars))
                    )
                        .fill(1)
                        .map((ele, index) => <StarBorderIcon className="badge__star" key={index} />)}
            </div>
            <h2 className="badge__earned">Earned on: {ele.earnedDate}</h2>
        </div>
    );
};

export default Badge;
