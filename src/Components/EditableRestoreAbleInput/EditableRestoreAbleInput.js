import React, { useState } from 'react';
import './EditableRestoreAbleInput.css';
import CreateIcon from '@material-ui/icons/Create';
import CheckIcon from '@material-ui/icons/Check';
import { Backdrop } from './../../Utils/index';
import FlipMove from 'react-flip-move';
import { IconButton } from '@material-ui/core';

function repeatStringNumTimes(string, times) {
    if (times < 0) return '';
    if (times === 1) return string;
    else return string + repeatStringNumTimes(string, times - 1);
}
const EditableRestoreAbleInput = ({ placeHolder, value, isPersonal, title }) => {
    const [editable, setEditable] = useState(false);
    const [realValue, setRealValue] = useState(value);
    const [editableValue, setEditableValue] = useState(value);
    const [placeHolders, setPlaceHolders] = useState(placeHolder);
    const changesInputConfirm = () => {
        setRealValue(editableValue);
    };
    const changesInputCanceled = () => {
        setEditableValue(realValue);
    };
    return !editable ? (
        <div className="editable">
            <p className="editable__title userSelect">{title}: </p>
            <p className="editable__Value userSelect">
                {!isPersonal ? realValue : repeatStringNumTimes('*', realValue.length)}
            </p>
            <IconButton
                onClick={() => {
                    setEditable((prev) => !prev);
                }}
            >
                <CreateIcon className="editable__editIcon" />
            </IconButton>
        </div>
    ) : (
        <div className="editable">
            <FlipMove enterAnimation="fade" leaveAnimation="fade">
                <Backdrop
                    onClick={() => {
                        changesInputCanceled();
                        setPlaceHolders(placeHolder);
                        setEditable((prev) => !prev);
                    }}
                />
            </FlipMove>{' '}
            <p className="editable__titleactive userSelect">{title}: </p>
            <input
                style={{
                    borderBottom: !editableValue.trim().length === 0 ? '1px solid red' : '1px solid lawngreen',
                }}
                className="editable__input"
                value={editableValue}
                placeholder={placeHolders}
                onChange={(e) => {
                    setEditableValue(e.target.value);
                }}
            />
            <IconButton
                onClick={() => {
                    if (editableValue.trim() === '') {
                        setPlaceHolders('Empty Field');
                        setEditableValue('');
                    } else {
                        changesInputConfirm();
                        setEditable((prev) => !prev);
                        setPlaceHolders(placeHolders);
                    }
                }}
            >
                <CheckIcon className="editable__confirmIcon" />
            </IconButton>
        </div>
    );
};

export default EditableRestoreAbleInput;
