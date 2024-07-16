import { fireEvent, render, screen } from '@testing-library/react';
import { test } from 'vitest';
import SearchFilter from './SearchFilter';

test('SearchFilter component works correctly', () => {
  const setFilterText = (text: string) => {};
  const { rerender } = render(
    <SearchFilter filterText="" setFilterText={setFilterText} />
  );

  let inputElement = screen.getByPlaceholderText('Filter the characters...');
  const buttonElement = screen.getByText('Save');

  fireEvent.change(inputElement, { target: { value: 'test' } });

  fireEvent.click(buttonElement);
  rerender(<SearchFilter filterText="test" setFilterText={setFilterText} />);

  inputElement = screen.getByPlaceholderText('Filter the characters...');
  expect((inputElement as HTMLInputElement).value).toBe('test');
});
