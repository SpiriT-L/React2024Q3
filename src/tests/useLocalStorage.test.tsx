import { describe, beforeEach, it, expect } from 'vitest';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { act, renderHook } from '@testing-library/react';

describe('useLocalStorage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should return initial value if no value is stored', () => {
    const { result } = renderHook(() => useLocalStorage('key', 'initial'));
    const [storedValue] = result.current;
    expect(storedValue).toBe('initial');
  });

  it('should store and retrieve a value', () => {
    const { result } = renderHook(() => useLocalStorage('key', 'initial'));
    const [, setValue] = result.current;

    act(() => {
      setValue('newValue');
    });

    const [storedValue] = result.current;
    expect(storedValue).toBe('newValue');
    expect(localStorage.getItem('key')).toBe(JSON.stringify('newValue'));
  });

  it('should return stored value if it exists', () => {
    localStorage.setItem('key', JSON.stringify('storedValue'));
    const { result } = renderHook(() => useLocalStorage('key', 'initial'));
    const [storedValue] = result.current;
    expect(storedValue).toBe('storedValue');
  });
});
