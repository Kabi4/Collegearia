import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Comment, Spinner } from '..';
import './HelpAndSupport.css';
const HelpAndSupport = () => {
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');
    const [subjectParsed, setSubjectParsed] = useState('');
    const [bodyParsed, setbodyParsed] = useState('');
    const [comment, setComment] = useState('');
    const [loading, setLoading] = useState(true);
    const [comments, setComments] = useState([]);
    const handleBodyChange = (e) => {
        let text = e.target.value;
        text = text.replace(' ', '%20');
        setBody(e.target.value);
        setbodyParsed(text);
    };
    const handleSubjectChange = (e) => {
        let text = e.target.value;
        text = text.replace(' ', '%20');
        setSubject(e.target.value);
        setSubjectParsed(text);
    };
    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };
    useEffect(() => {
        setComments([
            {
                id: 1,
                photoUrl: '',
                user: 'Vaibhav Mishra',
                date: '2020-11-12',
                content: 'Love this site love to see your efforts',
            },
            {
                id: 2,
                photoUrl: '',
                user: 'Ayushman bisth',
                date: '2020-10-29',
                content: 'Build with nice idea keep it up',
            },
            { id: 3, photoUrl: '', user: 'Raman Yadav', date: '2020-09-06', content: 'Perfect use of Web dev' },
            {
                id: 4,
                photoUrl: '',
                user: 'Varun Malkani',
                date: '2020-08-21',
                content: 'Nice website soo smooth to handle',
            },
        ]);
        setLoading(false);
    }, []);
    return (
        <div className="helpandsupport browse__content topZero">
            <h1 className="helpandsupport__title">Help & Support Center</h1>
            <fieldset className="helpandsupport__mail">
                <legend>Mail Us:</legend>
                <input
                    value={subjectParsed}
                    onChange={(e) => {
                        handleSubjectChange(e);
                    }}
                    className="helpsupport__mail__subject"
                    placeholder="Your Subject(6 Words Atleast)"
                />
                <textarea
                    onChange={(e) => {
                        handleBodyChange(e);
                    }}
                    value={bodyParsed}
                    className="helpsupport__mail__input"
                    placeholder="Type your Mail here...(40 Words Atleast)"
                />
                <a
                    href={`mailto:hykukku@gmail.com?Subject=${subjectParsed}&body=${bodyParsed}`}
                    target="_blank"
                    rel="noreferrer"
                >
                    <Button
                        variant="outlined"
                        className="helpsupport__mail__send"
                        disabled={subject.trim().length < 6 || body.trim().length < 40}
                        onClick={() => {
                            setBody('');
                            setSubject('');
                            setSubjectParsed('');
                            setbodyParsed('');
                        }}
                    >
                        SEND
                    </Button>
                </a>
            </fieldset>
            <fieldset className="helpandsupport__comment">
                <legend>Leave a comment:</legend>
                <textarea
                    onChange={(e) => {
                        handleCommentChange(e);
                    }}
                    value={comment}
                    className="helpsupport__mail__input"
                    placeholder="Type your Commment here...(50 Words Atleast)"
                />
                <Button
                    variant="outlined"
                    className="helpsupport__mail__send"
                    disabled={comment.trim().length < 50}
                    onClick={() => {
                        setComment('');
                    }}
                >
                    Comment
                </Button>
            </fieldset>

            <h1 className="comments__title">Previous Comments</h1>
            <hr />
            <div className="prevCommnets">
                {loading ? (
                    <Spinner />
                ) : (
                    comments.map((ele) => (
                        <Comment
                            key={ele.id}
                            date={ele.date}
                            photoUrl={ele.photoUrl}
                            content={ele.content}
                            user={ele.user}
                        />
                    ))
                )}
            </div>
        </div>
    );
};

export default HelpAndSupport;
