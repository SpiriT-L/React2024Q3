import { useState } from 'react';
import FilterBtn from '../FilterBtn';
import './Accordion.scss';

interface SpeciesProps {
  setSpecies: (species: string) => void;
  setPageNumber: (pageNumber: number) => void;
}

const Species: React.FC<SpeciesProps> = ({ setSpecies, setPageNumber }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleButtonClick = () => {
    setIsExpanded(!isExpanded);
  };
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
    <div className={`accordion-item ${isExpanded ? 'expanded' : ''}`}>
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
            <FilterBtn
              task={setSpecies}
              setPageNumber={setPageNumber}
              key={index}
              name="species"
              index={index}
              items={items}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Species;
