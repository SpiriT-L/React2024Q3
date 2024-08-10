import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Filters from '../components/SearchFilter/SearchFilter';
import { vi } from 'vitest';

describe('Filters Component', () => {
  let setPageNumber: vi.Mock;
  let setStatus: vi.Mock;
  let setGender: vi.Mock;
  let setSpecies: vi.Mock;

  beforeEach(() => {
    setPageNumber = vi.fn();
    setStatus = vi.fn();
    setGender = vi.fn();
    setSpecies = vi.fn();
  });

  test('renders Filters component and clears filters', () => {
    render(
      <Filters
        setPageNumber={setPageNumber}
        setStatus={setStatus}
        setGender={setGender}
        setSpecies={setSpecies}
      />
    );

    // Проверяем, что заголовок фильтров отображается
    // expect(screen.getByText(/filter/i)).toBeInTheDocument();

    // Проверяем, что кнопка "Clear Filters" отображается
    const clearButton = screen.getByText(/clear filters/i);
    expect(clearButton).toBeInTheDocument();

    // Нажимаем кнопку "Clear Filters"
    fireEvent.click(clearButton);

    // Проверяем, что функции setPageNumber, setStatus, setGender, и setSpecies были вызваны
    expect(setPageNumber).toHaveBeenCalledWith(1);
    expect(setStatus).toHaveBeenCalledWith('');
    expect(setGender).toHaveBeenCalledWith('');
    expect(setSpecies).toHaveBeenCalledWith('');

    // Проверяем, что произошел рендер дочерних компонентов
    expect(screen.getByText('Status')).toBeInTheDocument(); // Предполагается, что компонент Status имеет заголовок "Status"
    expect(screen.getByText('Species')).toBeInTheDocument(); // Предполагается, что компонент Species имеет заголовок "Species"
    expect(screen.getByText('Gender')).toBeInTheDocument(); // Предполагается, что компонент Gender имеет заголовок "Gender"
  });
});
