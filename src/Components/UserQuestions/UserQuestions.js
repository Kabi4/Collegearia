import React, { useEffect, useState } from 'react';
import { Question, Spinner } from '..';
import './UserQuestions.css';
const UserQuestions = () => {
    const [personalQuestions, setPersonalQuestions] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setPersonalQuestions([
            {
                user: 'Dhaval Pandey(You)',
                id: 'uniquness',
                photoUrl: '',
                question: 'Is firebase and React are enough for a full stack developer',
                timeStamp: '10:20 pm 2020-11-15',
                photos: [],
                replies: [
                    {
                        content:
                            'Yes there are potentials of jobs for it but you should know that if you want to deeply understand the working of firebase then you should learn One of the backend techs',
                        user: 'Kushagra Singh',
                        id: '1',
                        timeStamp: '1 hours ago',
                        replies: [
                            {
                                content: 'Yep i agreee',
                                user: 'Girja Shankar Tiwari',
                                timeStamp: '23 mins ago',
                                replies: [],
                                id: '2',
                            },
                        ],
                    },
                    {
                        content:
                            'Firebase is deep implmentation of backend but you surely cant reply on it its good for making quick app for presentation but compaines just not suddenly disolve into it because they already have a good server and lot of data to manage so you should learn one of backend techs if you going for full stack developer',
                        user: 'Vipin Mathpal',
                        timeStamp: '4 hours ago',
                        replies: [],
                        id: '4',
                    },
                ],
            },
        ]);
        setLoading(false);
    }, []);
    return (
        <div className="userQuestions  browse__content topZero">
            <h1 className="userQuestions__header userSelect">Your Questions</h1>
            {loading ? (
                <Spinner />
            ) : (
                personalQuestions.map((ele) => (
                    <Question
                        user={ele.user}
                        photoUrl={ele.photoUrl}
                        question={ele.question}
                        timeStamp={ele.timeStamp}
                        photos={ele.photos}
                        key={ele.id}
                        replies={ele.replies}
                    />
                ))
            )}
        </div>
    );
};

export default UserQuestions;
