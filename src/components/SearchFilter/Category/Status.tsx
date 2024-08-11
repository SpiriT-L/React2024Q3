'use client';
import React, { useEffect, useRef, useState } from 'react';
import './Accordion.scss';

interface StatusProps {
  setPageNumber: (pageNumber: number) => void;
  setStatus: (status: string) => void;
}

const Status: React.FC<StatusProps> = ({ setPageNumber, setStatus }) => {
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

  const status = ['Alive', 'Dead', 'Unknown'];

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
          Status
        </button>
      </h3>
      <div
        id="flush-collapseOne"
        className={`accordion-collapse collapse ${isExpanded ? 'show' : ''}`}
        data-bs-parent="#accordionFlushExample"
      >
        <div className="accordion-body">
          {status.map((items, index) => (
            <div key={index} className="filter-btn">
              <input
                type="radio"
                id={`status-${index}`}
                name="status"
                value={items}
                onClick={() => {
                  setIsExpanded(false);
                  setStatus(items);
                  setPageNumber(1);
                }}
              />
              <label
                htmlFor={`status-${index}`}
                onClick={() => {
                  setIsExpanded(false);
                  setStatus(items);
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

export default Status;
