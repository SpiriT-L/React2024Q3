import { fireEvent, render, screen } from '@testing-library/react';

import Status from '../components/SearchFilter/Category/Status';
import { vi } from 'vitest';

// Мокаем компонент FilterBtn
vi.mock('../FilterBtn', () => {
  return ({ items, onClick }) => (
    <button data-testid={items} onClick={onClick}>
      {items}
    </button>
  );
});

describe('Status Component', () => {
  let setPageNumberMock;
  let setStatusMock;

  beforeEach(() => {
    setPageNumberMock = vi.fn();
    setStatusMock = vi.fn();
    render(
      <Status setPageNumber={setPageNumberMock} setStatus={setStatusMock} />
    );
  });

  it('renders the accordion header', () => {
    const header = screen.getByText(/Status/i);
    expect(header).toBeInTheDocument();
  });

  it('toggles the accordion when the button is clicked', () => {
    const button = screen.getByRole('button', { name: /Status/i });

    fireEvent.click(button);
    expect(screen.getByText('Alive')).toBeInTheDocument();

    fireEvent.click(button);
  });

  it('renders FilterBtn for each status', () => {
    const button = screen.getByRole('button', { name: /Status/i });
    fireEvent.click(button);
  });

  it('closes the accordion when clicking outside', () => {
    const button = screen.getByRole('button', { name: /Status/i });
    fireEvent.click(button);
    expect(screen.getByText('Alive')).toBeInTheDocument();

    fireEvent.mouseDown(document);
  });
});
