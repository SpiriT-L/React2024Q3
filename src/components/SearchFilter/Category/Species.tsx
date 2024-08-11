'use client';
import React, { useEffect, useRef, useState } from 'react';
import './Accordion.scss';

interface SpeciesProps {
  setSpecies: (species: string) => void;
  setPageNumber: (pageNumber: number) => void;
}

const Species: React.FC<SpeciesProps> = ({ setSpecies, setPageNumber }) => {
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

  const species = [
    'Human',
    'Alien',
    'Humanoid',
    'Poopybutthole',
    'Mythological',
    'Unknown',
    'Animal',
    'Disease',
    'Robot',
    'Cronenberg',
    'Planet',
  ];

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
          Species
        </button>
      </h3>
      <div
        id="flush-collapseOne"
        className={`accordion-collapse collapse ${isExpanded ? 'show' : ''}`}
        data-bs-parent="#accordionFlushExample"
      >
        <div className="accordion-body species">
          {species.map((items, index) => (
            <div key={index} className="filter-btn">
              <input
                type="radio"
                id={`species-${index}`}
                name="species"
                value={items}
                onClick={() => {
                  setIsExpanded(false);
                  setSpecies(items);
                  setPageNumber(1);
                }}
              />
              <label
                htmlFor={`species-${index}`}
                onClick={() => {
                  setIsExpanded(false);
                  setSpecies(items);
                  setPageNumber(1);
                }}
              >
                {items}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Species;
