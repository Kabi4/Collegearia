import React, { useEffect, useState } from 'react';
import { Spinner, UserAnswer } from '..';
import './UserAnswers.css';
const UserAnswers = () => {
    const [answersGiven, setAnswersGiven] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setAnswersGiven([
            {
                id: 'uniqueAnswer',
                question: 'Is CSE faculty supportive here ?',
                answer:
                    'To be honest with you no faculty is much supportive here you have to things on your own and stop putting your hopes on faculty you can rely on some senoirs though.',
                upVotes: 12,
                downVotes: 2,
                title: 'Faculty',
            },
        ]);
        setLoading(false);
    }, []);
    return (
        <div className="userAnswers topZero browse__content">
            <h1 className="userAnswers__title">Your Answers</h1>
            {loading ? (
                <Spinner />
            ) : (
                answersGiven.map((ele) => (
                    <UserAnswer
                        key={ele.id}
                        question={ele.question}
                        answer={ele.answer}
                        upVotes={ele.upVotes}
                        downVotes={ele.downVotes}
                        title={ele.title}
                    />
                ))
            )}
        </div>
    );
};

export default UserAnswers;
