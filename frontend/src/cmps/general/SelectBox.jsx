import React, { useState } from 'react'

export default function SelectBox({ options, handleChange }) {

    const [title, setTitle] = useState(options[0].value);
    const [isOptionsShown, setIsOptionsShown] = useState(false);

    const showOptions = () => {
        setIsOptionsShown(isOptionsShown => !isOptionsShown);
    }

    const handleOptionClick = (option) => {
        setTitle(option.value);
        setIsOptionsShown(false);

        if (option !== title) {
            handleChange(option);
        }
    }

    const onSelectBoxBlur = () => {
        setIsOptionsShown(false)
    }

    return (
        <div className="select-box" onBlur={onSelectBoxBlur} tabIndex="0" >
            <div onClick={() => showOptions()} className={`title-container flex justify-between ${isOptionsShown ? 'active' : ''}`}>
                <div className="title">{title}</div>
                <i className="fas fa-caret-down"></i>
            </div>
            {!isOptionsShown ||
                <div className={`options-container ${isOptionsShown ? 'active' : ''}`}>
                    {options.map((option, idx) => {
                        return <div key={idx} onClick={() => handleOptionClick(option)} className="option">{option.value}</div>
                    })}
                </div>}
        </div>
    )
}
