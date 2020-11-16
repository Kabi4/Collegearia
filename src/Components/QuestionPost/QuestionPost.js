import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import './QuestionPost.css';
import PhotoIcon from '@material-ui/icons/Photo';
const QuestionPost = () => {
    const [questionText, setQuestionText] = useState('');
    const [photos, setPhotos] = useState([]);
    const [error, setError] = useState(null);
    const selectedPhotos = (e) => {
        if (e.target.files.length > 2) {
            setError("Woaahh!! That's too many files try 2 or less than 2!!");
        } else if (e.target.files.length > 0) {
            setPhotos(e.target.files);
            setError(null);
        } else {
            setPhotos([]);
            setError('No photos selected');
        }
    };
    return (
        <div className="questionPost">
            <h1 className="questionPost__title userSelect">Ask a question</h1>
            {error && <h2 className="questionPost__error">{error}</h2>}
            <textarea
                className="questionPost__input"
                value={questionText}
                onChange={(e) => {
                    if (
                        (questionText[questionText.length - 1] !== ' ' ||
                            e.target.value[e.target.value.length - 1] !== ' ') &&
                        e.target.value.length <= 300
                    ) {
                        setQuestionText(e.target.value);
                        setError(null);
                    }
                }}
            />
            <div className="questionPost__detials">
                <span
                    className="questionPost__span userSelect"
                    style={{ color: questionText.length < 250 ? 'lightgreen' : 'red' }}
                >
                    {questionText.length}/300 words
                </span>
                <span
                    className="questionPost__span userSelect"
                    style={{ color: photos.length < 2 ? 'lightgreen' : 'red' }}
                >
                    {photos.length}/2 photos
                </span>
                <label>
                    <input
                        style={{ display: 'none' }}
                        type="file"
                        multiple
                        onChange={(e) => {
                            selectedPhotos(e);
                        }}
                        accept="image/*"
                    />
                    <PhotoIcon className="questionPost__input__photos" />
                </label>
                <span
                    className="questionPost__span userSelect"
                    style={{ display: 'none', visibility: 'hidden', color: 'skyblue' }}
                >
                    Uploading 0/2(0%)
                </span>
                <Button
                    disabled={questionText.length === 0 && photos.length === 0 ? true : false}
                    variant="outlined"
                    className={
                        questionText.length === 0 && photos.length === 0
                            ? 'questionPost__postButton__disabled'
                            : 'questionPost__postButton'
                    }
                >
                    POST
                </Button>
            </div>
        </div>
    );
};

export default QuestionPost;
