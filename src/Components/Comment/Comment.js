import { Avatar } from '@material-ui/core';
import React from 'react';
import './Comment.css';
const Comment = ({ user, photoUrl, content, date, ...props }) => {
    return (
        <div className="comment">
            <div className="comment__user">
                <Avatar className="commnet__user__avatar" src={photoUrl} alt={user} />
                <p className="commnet__user__user">{user}</p>
                <p className="commnet__user__date">{date}</p>
            </div>
            <p className="commnet__user__content">{content}</p>
        </div>
    );
};

export default Comment;
