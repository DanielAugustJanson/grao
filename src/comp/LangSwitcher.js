import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import "./LangSwitcher.css"
import EST from "./../assets/icons/ee.png"
import RUS from "./../assets/icons/ru.png"
import ENG from "./../assets/icons/gb.png"

const LangSwitcher = ({language,setLanguage}) => {
  const [isOpen, setIsOpen] = useState(false);
  const langSwitcherRef = useRef(null);

  const handleDropdownClick = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageSelect = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    setIsOpen(false);
  };

  const languages = [
    {name: "EST", flag: EST},
    {name: "RUS", flag: RUS},
    {name: "ENG", flag: ENG}
  ]




  return (
    <div className="lang-switcher" ref={langSwitcherRef}>
      {/* Conditionally render the flag image in the main button */}
      {isOpen && (
        <div className="language-dropdown">
          {languages.map((lang) =>
            lang.name !== language ? (
              <div className='dropdown-inner-div' onClick={() => handleLanguageSelect(lang.name)}>
                  <img src={lang.flag} alt={lang.name} />
                  
                  <p>{lang.name}</p>
                </div>
            ) : null
          )}
        </div>
      )}
      <div className="selected-div" onClick={handleDropdownClick}>
        {languages.map((lang) =>
          lang.name === language ? (
            <img key={lang.name} src={lang.flag} alt={lang.name} />
          ) : null
        )}
        <p>{language}</p>
      </div>
    </div>
  );
};

LangSwitcher.propTypes = {
  language: PropTypes.string.isRequired,
  setLanguage: PropTypes.func.isRequired,
};

export default LangSwitcher