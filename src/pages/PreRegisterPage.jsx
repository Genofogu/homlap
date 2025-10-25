import { Link } from 'react-router-dom';
import React from 'react';
import PreRegisterForm from '../components/PreRegisterForm.jsx';
const PreRegisterPage = () => {
  return (
    <div className="pre-register-page">
      <div className="pre-register__card">
        <Link to="/" className="pre-register__logo">HOMLAP</Link>
        <h1 className="pre-register__title">Get Early Access</h1>
        <p className="pre-register__subtitle">
          Be the first to know when Homlap goes live. Join our waitlist for exclusive updates and early bird offers.
        </p>
        <PreRegisterForm />
        <Link to="/" className="pre-register__backlink">← Back to Home</Link>
      </div>
    </div>
  );
};

export default PreRegisterPage;