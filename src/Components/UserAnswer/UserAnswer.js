import React from 'react';
import './UserAnswer.css';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
const UserAnswer = ({ question, upVotes, title, downVotes, answer, ...props }) => {
    return (
        <div className="userAnswer">
            <h1 className="userAnswer__title">{title}</h1>
            <h3 className="userAnswer__question">
                <span style={{ color: 'lawngreen' }}>Question:- </span> {question}
            </h3>
            <div className="userAnswer__box">
                <p className="userAnswer__answer">
                    <span style={{ color: 'darkgrey', fontSize: '14px', fontWeight: '900' }}>Your Response:- </span>
                    {answer}
                </p>
                <div className="userAnswer__votes">
                    <div className="userAnswer__upVotes">
                        <ExpandLessIcon className="userAnswer__upVotes__icon" />
                        <p>{upVotes}</p>
                    </div>
                    <div className="userAnswer__downVotes">
                        <ExpandMoreIcon className="userAnswer__downVotes__icon" />
                        <p>{downVotes}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserAnswer;
