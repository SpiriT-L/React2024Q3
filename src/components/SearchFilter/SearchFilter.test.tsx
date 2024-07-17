import { test } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchFilter from './SearchFilter';

test('SearchFilter component renders correctly', () => {
  const setFilterText = () => {};
  render(<SearchFilter filterText="" setFilterText={setFilterText} />);

  const inputElement = screen.getByPlaceholderText('Filter the characters...');
  expect(inputElement).toBeInTheDocument();

  const buttonElement = screen.getByText('Save');
  expect(buttonElement).toBeInTheDocument();
});

test('SearchFilter updates filterText on input change', () => {
  let filterText = '';
  const setFilterText = (text: string) => {
    filterText = text;
  };
  render(
    <SearchFilter filterText={filterText} setFilterText={setFilterText} />
  );

  const inputElement = screen.getByPlaceholderText('Filter the characters...');
  fireEvent.change(inputElement, { target: { value: 'test' } });
  expect(filterText).toBe('test');
});

test('SearchFilter calls setFilterText on button click', () => {
  let filterText = '';
  const setFilterText = (text: string) => {
    filterText = text;
  };
  render(
    <SearchFilter filterText={filterText} setFilterText={setFilterText} />
  );

  const inputElement = screen.getByPlaceholderText('Filter the characters...');
  fireEvent.change(inputElement, { target: { value: 'test' } });

  const buttonElement = screen.getByText('Save');
  fireEvent.click(buttonElement);

  expect(filterText).toBe('test');
});
