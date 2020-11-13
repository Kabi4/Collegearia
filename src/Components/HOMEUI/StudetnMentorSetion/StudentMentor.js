import React from 'react';
import './StudentMentor.css';
import { Button } from '@material-ui/core';
const StudentMentor = () => {
    return (
        <div className="studentMentor">
            <div className="studentMentor__card ">
                <div className="studentMentor__card__front">
                    <div className="studentMentor__card__front__image studentMentor__card__1">
                        <h1>
                            <span>Join Us As a Student</span>
                        </h1>
                    </div>
                    <div className="studentMentor__card__des">
                        <p>Ask Question</p>
                        <p>Help Others</p>
                        <p>Learn Courses</p>
                    </div>
                </div>
                <div className="studentMentor__card__back studentMentor__card__back__1">
                    <h1>Sign Today</h1>
                    <Button className="studentMentor__card__button" focusRipple variant="outlined">
                        JOIN
                    </Button>
                </div>
            </div>
            <div className="studentMentor__card ">
                <div className="studentMentor__card__front">
                    <div className="studentMentor__card__front__image studentMentor__card__2">
                        <h1>
                            <span>Join Us As a Mentor</span>
                        </h1>
                    </div>
                    <div className="studentMentor__card__des">
                        <p>Offical Mentor</p>
                        <p>Teach Students</p>
                        <p>Reply To answers</p>
                    </div>
                </div>
                <div className="studentMentor__card__back studentMentor__card__back__2">
                    <h1>Sign Today</h1>
                    <h2>Skill Description </h2>
                    <h2>or </h2>
                    <h2>GITHUB profile Neededd</h2>
                    <Button className="studentMentor__card__button" focusRipple variant="outlined">
                        JOIN
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default StudentMentor;
