// src/components/PreRegisterForm.jsx
import React from 'react';

const PreRegisterForm = () => {
  return (
    <form className="pre-register-form" onSubmit={(e) => e.preventDefault()}>
      <input 
        type="email" 
        placeholder="Enter your email address" 
        required 
      />
      <button type="submit" className="button">Notify Me</button>
    </form>
  );
};

export default PreRegisterForm;