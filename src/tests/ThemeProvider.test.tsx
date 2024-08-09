import '@testing-library/jest-dom';
import { describe, expect, it, vi } from 'vitest';

import { act, renderHook } from '@testing-library/react';
import ThemeProvider, {
  THEME_DARK,
  THEME_LIGHT,
  useTheme,
} from '../context/ThemeProvider';
import { changeCssVariables } from '../services/changeCssVariables';

vi.mock('../services/changeCssVariables');

describe('ThemeProvider', () => {
  it('should initialize with null theme', () => {
    const { result } = renderHook(() => useTheme(), {
      wrapper: ({ children }) => <ThemeProvider>{children}</ThemeProvider>,
    });
    expect(result.current.theme).toBeNull();
  });

  it('should change theme to dark', () => {
    const { result } = renderHook(() => useTheme(), {
      wrapper: ({ children }) => <ThemeProvider>{children}</ThemeProvider>,
    });

    act(() => {
      result.current.change(THEME_DARK);
    });

    expect(result.current.theme).toBe(THEME_DARK);
    expect(changeCssVariables).toHaveBeenCalledWith(THEME_DARK);
  });

  it('should change theme to light', () => {
    const { result } = renderHook(() => useTheme(), {
      wrapper: ({ children }) => <ThemeProvider>{children}</ThemeProvider>,
    });

    act(() => {
      result.current.change(THEME_DARK);
    });

    act(() => {
      result.current.change(THEME_LIGHT);
    });

    expect(result.current.theme).toBe(THEME_LIGHT);
    expect(changeCssVariables).toHaveBeenCalledWith(THEME_LIGHT);
  });
});
