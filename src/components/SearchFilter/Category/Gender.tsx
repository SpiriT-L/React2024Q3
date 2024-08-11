'use client';
import React, { useEffect, useRef, useState } from 'react';
import './Accordion.scss';

interface GenderProps {
  setPageNumber: (pageNumber: number) => void;
  setGender: (gender: string) => void;
}

const Gender: React.FC<GenderProps> = ({ setPageNumber, setGender }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const accordionRef = useRef<HTMLDivElement>(null);

  const handleButtonClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (
      accordionRef.current &&
      !accordionRef.current.contains(target) &&
      !(target.closest && target.closest('.filter-btn'))
    ) {
      setIsExpanded(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const genders = ['Female', 'Male', 'Genderless', 'Unknown'];

  return (
    <div
      ref={accordionRef}
      className={`accordion-item ${isExpanded ? 'expanded' : ''}`}
    >
      <h3 className="accordion-header">
        <button
          className={`accordion-button ${isExpanded ? '' : 'collapsed'}`}
          type="button"
          onClick={handleButtonClick}
          aria-expanded={isExpanded}
          aria-controls="flush-collapseOne"
        >
          Gender
        </button>
      </h3>
      <div
        id="flush-collapseOne"
        className={`accordion-collapse collapse ${isExpanded ? 'show' : ''}`}
        data-bs-parent="#accordionFlushExample"
      >
        <div className="accordion-body">
          {genders.map((item, index) => (
            <div key={index} className="filter-btn">
              <input
                type="radio"
                id={`gender-${index}`}
                name="gender"
                value={item}
                onClick={() => {
                  setIsExpanded(false);
                  setGender(item);
                  setPageNumber(1);
                }}
              />
              <label
                htmlFor={`gender-${index}`}
                onClick={() => {
                  setIsExpanded(false);
                  setGender(item);
                  setPageNumber(1);
                }}
              >
                {item}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gender;
