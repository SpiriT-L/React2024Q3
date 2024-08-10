import React, { useState, useEffect, useRef } from 'react';
import FilterBtn from '../FilterBtn';
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
    if (
      accordionRef.current &&
      !accordionRef.current.contains(event.target as Node)
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
            <FilterBtn
              task={setStatus}
              setPageNumber={setPageNumber}
              key={index}
              name="status"
              index={index}
              items={items}
              onClick={() => setIsExpanded(false)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Status;
