import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider, THEME_LIGHT } from '../context/ThemeProvider';
import '@testing-library/jest-dom';
import Checkbox from '../components/Input/Checkbox/Checkbox';
import { expect, test } from 'vitest';

const renderWithThemeProvider = (ui: React.ReactElement) => {
  return render(<ThemeProvider>{ui}</ThemeProvider>);
};

test('renders Checkbox component and toggles theme', () => {
  renderWithThemeProvider(<Checkbox />);

  const checkbox = screen.getByRole('checkbox');
  const sunIcon = screen.getByAltText('Sun');
  const moonIcon = screen.getByAltText('Moon');

  expect(checkbox).toBeInTheDocument();
  expect(sunIcon).toBeInTheDocument();
  expect(moonIcon).toBeInTheDocument();

  expect(checkbox).not.toBeChecked();

  fireEvent.click(checkbox);
  expect(checkbox).not.toBeChecked();
  expect(document.documentElement).toHaveAttribute('data-theme', THEME_LIGHT);
});
