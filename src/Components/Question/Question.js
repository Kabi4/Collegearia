import { Avatar, Button } from '@material-ui/core';
import React, { useState } from 'react';
import './Question.css';
import ReplyIcon from '@material-ui/icons/Reply';
import { Replies } from '..';
const Question = ({ user, photoUrl, question, photos, replies, timeStamp }) => {
    const [reply, setReply] = useState('');
    const [showReplies, setShowReplies] = useState('');
    return (
        <div className="question">
            <div className="question__user">
                <Avatar src={user} className="question__avatar" alt={user} />
                <h3 className="question__name">{user}</h3>
                <h3 className="question__timeStamp">{timeStamp}</h3>
            </div>
            <div className="question__body">
                <p className="question__body__details">{question}</p>
                {photos.map((ele) => (
                    <img src={ele} alt="images" className="question__body__image" />
                ))}
            </div>
            <div className="question__reply">
                <textarea
                    placeholder="Reply"
                    className="question__reply__input"
                    type="text"
                    value={reply}
                    onChange={(e) => {
                        setReply(e.target.value);
                    }}
                />
                <Button className="question__reply__button" variant="outlined">
                    <ReplyIcon />
                    Reply
                </Button>
            </div>
            {replies.length > 0 && (
                <p
                    onClick={() => {
                        setShowReplies((prev) => !prev);
                    }}
                    className="showReplies"
                    style={{ padding: '5px 20px', fontSize: '14px', fontWeight: '800', color: 'skyblue' }}
                >
                    {showReplies ? 'Hide replies' : 'Show replies'}
                </p>
            )}
            {showReplies && replies.map((ele) => <Replies key={ele.id} ele={ele} />)}
        </div>
    );
};

export default Question;
