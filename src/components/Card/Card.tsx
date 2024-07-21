import React from 'react';
import { Character } from '../../types/Interface';
import styles from './Card.module.scss';

interface CardProps {
  character?: Character; // Добавляем знак вопроса, чтобы указать, что character может быть undefined.
}

const Card: React.FC<CardProps> = ({ character }) => {
  if (!character) {
    return <div>Loading...</div>; // Можно заменить на другое сообщение или индикатор загрузки
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
