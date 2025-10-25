// src/components/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle.jsx';

const Header = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <nav className="header__nav container">
        <Link to="/" className="header__logo" onClick={handleLinkClick}>
          <div className="header__logo-image"></div>
        </Link>
        
       
        <div className="header__menu--desktop">
          <ul className="header__list">
            <li className="header__item"><a href="/#how-it-works" className="header__link">How it works</a></li>
            <li className="header__item"><a href="/#benefits" className="header__link">Benefits</a></li>
            <li className="header__item"><a href="/#feature" className="header__link">Features</a></li>
            <li className="header__item"><a href="/#faqs" className="header__link">FAQs</a></li>
          </ul>
        </div>
        
        <div className={`header__menu--mobile ${isMenuOpen ? 'is-open' : ''}`}>
          <ul className="header__list">
            <li className="header__item"><a href="/#how-it-works" onClick={handleLinkClick} className="header__link">How it works</a></li>
            <li className="header__item"><a href="/#benefits" onClick={handleLinkClick} className="header__link">Benefits</a></li>
            <li className="header__item"><a href="/#feature" onClick={handleLinkClick} className="header__link">Features</a></li>
            <li className="header__item"><a href="/#faqs" onClick={handleLinkClick} className="header__link">FAQs</a></li>
          </ul>
          <div className="header__actions--mobile">
             <Link to="/pre-register" className="button" onClick={handleLinkClick}>Get Started</Link>
          </div>
        </div>

        <div className="header__actions">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <Link to="/pre-register" className="button header__actions-button--desktop">Get Started</Link>
          <button 
            className={`header__toggle ${isMenuOpen ? 'is-open' : ''}`} 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu" 
          >
            <span/>
            <span/>
            <span/>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;