// RememberMeCheckbox.js
import React from 'react';

const RememberMeCheckbox = ({ rememberMe, onChange }) => {
    const handleCheckboxChange = (e) => {
        onChange(e.target.checked);
    };

    return (
        <div className=" container remember-me px-4">
            <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={handleCheckboxChange}
            />
            <label htmlFor="rememberMe">Remember Me</label>
        </div>
    );
};

export default RememberMeCheckbox;
