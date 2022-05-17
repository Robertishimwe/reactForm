import React from 'react';

function FormInPuts(props) {
  const { label, errorMessage, onChange, id, ...inputProps } = props;
  return (
    <div>
      <label>{label}</label> <br />
      <input {...inputProps} onChange={onChange} />
      <p className="errorMassage">{errorMessage}</p>
    </div>
  );
}

export default FormInPuts;
