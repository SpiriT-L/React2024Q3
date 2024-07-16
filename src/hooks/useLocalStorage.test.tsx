import { fireEvent, render } from '@testing-library/react';
import { expect, test } from 'vitest';
import { useLocalStorage } from './useLocalStorage';
//
test('useLocalStorage works correctly', () => {
  const key = 'testKey';
  const initialValue = 'testValue';

  const TestComponent = () => {
    const [storedValue, setValue] = useLocalStorage(key, initialValue);
    return (
      <div>
        <div data-testid="value">{storedValue}</div>
        <button onClick={() => setValue('newValue')}>Set Value</button>
      </div>
    );
  };

  const { getByText, getByTestId } = render(<TestComponent />);

  expect(getByTestId('value').textContent).toBe(initialValue);

  fireEvent.click(getByText('Set Value'));
  expect(getByTestId('value').textContent).toBe('newValue');

  expect(JSON.parse(window.localStorage.getItem(key))).toBe('newValue');
});
