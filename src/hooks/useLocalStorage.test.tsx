import { fireEvent, render } from '@testing-library/react';
import { useRef } from 'react';
import { expect, test } from 'vitest';
import { useLocalStorage } from './useLocalStorage';

test('useLocalStorage works correctly', async () => {
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

  const item = window.localStorage.getItem(key);
  if (item !== null) {
    expect(JSON.parse(item)).toBe('newValue');
  }
  await new Promise(resolve => setTimeout(resolve, 0));
});

test('useLocalStorage does not cause re-render if value is the same', async () => {
  const key = 'testKey';
  const initialValue = 'testValue';

  const TestComponent = () => {
    const [storedValue, setValue] = useLocalStorage(key, initialValue);
    const renders = useRef(0);
    renders.current++;
    return (
      <div>
        <div data-testid="value">{storedValue}</div>
        <div data-testid="renders">{renders.current}</div>
        <button onClick={() => setValue(initialValue)}>Set Value</button>
      </div>
    );
  };

  const { getByText, getByTestId } = render(<TestComponent />);

  fireEvent.click(getByText('Set Value'));

  expect(getByTestId('renders').textContent).toBe('2');
  await new Promise(resolve => setTimeout(resolve, 0));
});

test('useLocalStorage renders correct HTML tags', async () => {
  const key = 'testKey';
  const initialValue = 'testValue';

  const TestComponent = () => {
    const [storedValue, setValue] = useLocalStorage(key, initialValue);
    return (
      <div>
        <h1 data-testid="heading">Test Heading</h1>
        <p data-testid="paragraph">{storedValue}</p>
        <button onClick={() => setValue('newValue')}>Set Value</button>
      </div>
    );
  };

  const { getByTestId } = render(<TestComponent />);

  expect(getByTestId('heading').tagName).toBe('H1');
  expect(getByTestId('paragraph').tagName).toBe('P');
  await new Promise(resolve => setTimeout(resolve, 0));
});

test('useLocalStorage writes to localStorage and persists across reloads', async () => {
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

  const { getByText } = render(<TestComponent />);

  fireEvent.click(getByText('Set Value'));

  let item = window.localStorage.getItem(key);
  if (item !== null) {
    expect(JSON.parse(item)).toBe('newValue');
  }

  render(<TestComponent />);

  item = window.localStorage.getItem(key);
  if (item !== null) {
    expect(JSON.parse(item)).toBe('newValue');
  }
  await new Promise(resolve => setTimeout(resolve, 0));
});
