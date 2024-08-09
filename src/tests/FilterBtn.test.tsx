import { render, screen, fireEvent } from '@testing-library/react';
import FilterBtn from '../components/SearchFilter/FilterBtn';
import { vi } from 'vitest';

vi.mock('./SearchFilter.module.scss', () => ({
  'filter-btn': 'filter-btn',
}));

describe('FilterBtn', () => {
  const mockTask = vi.fn();
  const mockSetPageNumber = vi.fn();
  const name = 'example';
  const index = 1;
  const items = 'Test Filter';

  beforeEach(() => {
    mockTask.mockClear();
    mockSetPageNumber.mockClear();
  });

  test('renders correctly with provided props', () => {
    render(
      <FilterBtn
        name={name}
        index={index}
        items={items}
        task={mockTask}
        setPageNumber={mockSetPageNumber}
      />
    );

    expect(screen.getByLabelText(`${items}`)).toBeInTheDocument();
    expect(screen.getByRole('radio', { name: items })).toBeInTheDocument();
  });

  test('calls setPageNumber and task on click', () => {
    render(
      <FilterBtn
        name={name}
        index={index}
        items={items}
        task={mockTask}
        setPageNumber={mockSetPageNumber}
      />
    );

    const radioButton = screen.getByRole('radio', { name: items });

    fireEvent.click(radioButton);

    expect(mockSetPageNumber).toHaveBeenCalledWith(1);
    expect(mockTask).toHaveBeenCalledWith(items);
  });
});
