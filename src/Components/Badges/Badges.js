import React, { useEffect, useState } from 'react';
import { Badge, Spinner } from '..';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import './Badges.css';  
const Badges = () => {
    const [badges, setBadges] = useState([]); 
    const [loading, setLoading] = useState(true);
    useEffect(() => { 
        setBadges([
            {
                badge: '10 UpVotes',
                Icon: LoyaltyIcon,
                category: 'easy',
                stars: 2.3,
                earnedDate: '2020-11-15',
                id: 'uniqueBadge',
            },
        ]);
        setLoading(false);
    }, []);
    return loading ? (
        <div className="browse__content">
            <Spinner />
        </div>
    ) : (
        <div className="browse__content badges">
            {badges.length === 0 ? (
                <h1 className="noBagde">No Badges Earn This far :(</h1>
            ) : (
                <h1 className="noBagde">Your Badges</h1>
            )}
            {badges.map((ele) => (
                <Badge key={ele.id} ele={ele} />
            ))}
        </div>
    );
};

export default Badges;
