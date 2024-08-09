import { render, screen } from '@testing-library/react';
import {
  ThemeProvider,
  THEME_DARK,
  THEME_LIGHT,
} from '../context/ThemeProvider';
import Header from '../components/Page/Header/Header';

// Мокаем контекст темы
const MockThemeProvider = ({ theme, children }) => {
  return <ThemeProvider value={{ theme }}>{children}</ThemeProvider>;
};

describe('Header Component', () => {
  test('renders Header with light theme', () => {
    render(
      <MockThemeProvider theme={THEME_LIGHT}>
        <Header />
      </MockThemeProvider>
    );

    expect(screen.getByText(/Rick & Morty/i)).toBeInTheDocument();
    expect(screen.getByText(/Character/i)).toBeInTheDocument();
    expect(screen.getByText(/Location/i)).toBeInTheDocument();
    expect(screen.getByText(/Episodes/i)).toBeInTheDocument();

    const iconImg = screen.getByAltText('icon');
  });

  test('renders Header with dark theme', () => {
    render(
      <MockThemeProvider theme={THEME_DARK}>
        <Header />
      </MockThemeProvider>
    );

    expect(screen.getByText(/Rick & Morty/i)).toBeInTheDocument();
    expect(screen.getByText(/Character/i)).toBeInTheDocument();
    expect(screen.getByText(/Location/i)).toBeInTheDocument();
    expect(screen.getByText(/Episodes/i)).toBeInTheDocument();

    const iconImg = screen.getByAltText('icon');
  });
});
