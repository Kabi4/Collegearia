import React, { useEffect, useState } from 'react';
import { EditableRestoreAbleInput, Spinner } from '..';
import './User.css';
import InitialImage from './../../Assets/UserProfile.jpg';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
const User = () => {
    const [loading, setLoading] = useState(true);
    const [UserImage, setUserImage] = useState(InitialImage);
    const setImage = (e) => {
        if (e.target.files.length) {
            setUserImage(e.target.files[0].webkitRelativePath);
        }
    };
    useEffect(() => {
        setLoading(false);
    }, []);
    return (
        <div className="browse__content user topZero">
            {loading ? (
                <Spinner />
            ) : (
                <div style={{ display: 'grid', placeItems: 'center' }}>
                    <h1 className="user__header">Your Profile</h1>
                    <div className="user__userPersonal">
                        <div className="user__editableImage">
                            <img src={InitialImage || UserImage} alt="UserImage" className="user__userImage" />
                            <label className="user__editableImage__div">
                                <CameraAltIcon className="user__editableImage__icon" />
                                <input
                                    style={{ display: 'none' }}
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => setImage(e)}
                                />
                            </label>
                        </div>
                        <EditableRestoreAbleInput placeHolder="Your Name" title="Your Name" value="Kushagra Singh" />
                    </div>
                    <EditableRestoreAbleInput placeHolder="Your Email" title="Your Email" value="hykush@gmail.com" />
                    <EditableRestoreAbleInput
                        placeHolder="Your Password"
                        title="Your Password"
                        isPersonal
                        value="Kushagra Singh"
                    />
                </div>
            )}
        </div>
    );
};

export default User;
