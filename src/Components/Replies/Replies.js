import React, { useState } from 'react';
import './Replies.css';
const Replies = ({ ele }) => {
    const [showReplies, setShowReplies] = useState(false);

    return (
        <div className="reply">
            {ele.content}{' '}
            <span style={{ color: 'gray', fontSize: '12px', fontWeight: '900' }}>
                - {ele.user} ({ele.timeStamp})
            </span>
            {ele.replies.length > 0 && (
                <div
                    onClick={() => {
                        setShowReplies((prev) => !prev);
                    }}
                    className="showReplies"
                    style={{ padding: '5px 20px', fontSize: '14px', fontWeight: '800', color: 'skyblue' }}
                >
                    {showReplies ? 'Hide replies' : 'Show replies'}
                </div>
            )}
            {showReplies && ele.replies.map((ele) => <Replies key={ele.id} ele={ele} />)}
        </div>
    );
};

export default Replies;
