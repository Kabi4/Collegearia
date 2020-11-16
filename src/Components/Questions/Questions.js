import React, { useEffect, useState } from 'react';

import { Question, QuestionPost, Spinner } from '..';
import './Questions.css';
const Questions = () => {
    const [loading, setLoading] = useState(true);
    const [questions, setQuestions] = useState([]);
    useEffect(() => {
        // GET REQUEST TO GET QUESTIONS
        setQuestions([
            {
                user: 'kushagra',
                id: 'unique',
                photoUrl: '',
                question: 'How to start React?',
                timeStamp: '10:20 pm',
                photos: [],
                replies: [
                    {
                        content: 'First start to learn JS',
                        user: 'parshant',
                        id: '1',
                        timeStamp: '10 hours ago',
                        replies: [
                            {
                                content: 'i Think first learn basics of styles and html',
                                user: 'kushagra',
                                timeStamp: '1 hours ago',
                                replies: [],
                                id: '2',
                            },
                        ],
                    },
                    {
                        content: 'Understand the concepts of jquery',
                        user: 'girja',
                        timeStamp: '8 hours ago',
                        replies: [],
                        id: '4',
                    },
                ],
            },
        ]);
        setLoading(false);
    }, []);
    return (
        <>
            <h1 className="question_header">Collegearia</h1>
            {loading ? (
                <Spinner />
            ) : (
                <div className="browse__content questions">
                    <QuestionPost />
                    <hr style={{ margin: '10px 0' }} />
                    <h1 className="allpost">ALL POST</h1>
                    {questions.map((ele) => {
                        return (
                            <Question
                                user={ele.user}
                                photoUrl={ele.photoUrl}
                                question={ele.question}
                                timeStamp={ele.timeStamp}
                                photos={ele.photos}
                                key={ele.id}
                                replies={ele.replies}
                            />
                        );
                    })}
                </div>
            )}
            ;
        </>
    );
};

export default Questions;
