import React from 'react';

const RememberMeCheckbox = ({ rememberMe, onChange }) => {
  const handleCheckboxChange = (event) => {
    onChange(event.target.checked);
  };

  return (
    <div className='row' >
      <div className="col-2  d-flex align-items-center">
        <input
          type="checkbox"
          checked={rememberMe}
          onChange={handleCheckboxChange}
        />
      </div>
      <div className="col-10 d-flex align-items-center">
        <p className='remcont'>  Remember Me</p>

      </div>
    </div>
  );
};

export default RememberMeCheckbox;
