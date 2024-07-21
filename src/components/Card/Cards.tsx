import React from 'react';
import { Character } from '../../types/Interface';
import styles from './Cards.module.scss';

interface CardProps {
  character?: Character;
}

const Card: React.FC<CardProps> = ({ character }) => {
  if (!character) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.card}>
      <img src={character.image} alt={character.name} />
      <h2>{character.name}</h2>
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      <p>Location: {character.location.name}</p>
    </div>
  );
};

export default Card;
