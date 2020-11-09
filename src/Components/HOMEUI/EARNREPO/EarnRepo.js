import React from 'react';
import './EarnRepo.css';
import StarIcon from '@material-ui/icons/Star';
import LocalActivityIcon from '@material-ui/icons/LocalActivity';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
const EarnRepo = () => {
    return (
        <div className="earnRepo">
            <h1 className="earnRepo__title">How does we work?</h1>
            <p className="earnRepo__details">
                Everyone must login from a account in order to post something. Everytime you answer someone question and
                someone enhance or praise it,will added to your profile which earn you reputation hence give you more
                stars and may batchs.
            </p>
            <div className="earnRepo__user">
                <AccountBoxIcon className="earnRepo__Avatar" />
                <h4 className="earnRepo__name">Kol Mikaelson</h4>
                <div
                    style={{
                        display: 'flex',
                        border: '2px solid goldenrod',
                        alignItems: 'center',
                        borderRadius: '4px',
                        padding: '5px',
                    }}
                >
                    <LocalActivityIcon className="earnRepo__bagde" />
                    <span className="earnRepo__badgeTitle">1000 Praise</span>
                </div>
            </div>
            <div className="earnRepo__upgrade">
                <div className="earnRepo__likes">
                    <ThumbUpAltIcon className="earnRepo__like" />
                    <span></span>
                </div>
                <div className="earnRepo__stars">
                    <StarIcon className="earnRepo__stars__star" />
                    <StarIcon className="earnRepo__stars__star" />
                    <StarIcon className="earnRepo__stars__star" />
                    <StarIcon className="earnRepo__stars__star4" />
                    <StarBorderIcon className="last__star" />
                </div>
            </div>
        </div>
    );
};

export default EarnRepo;
