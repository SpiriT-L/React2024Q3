export const changeCssVariables = (theme: string) => {
  const root = document.querySelector(':root') as HTMLElement;

  if (root) {
    root.style.setProperty('--bg-color-light', `var(--bg-color-${theme})`);
  }

  const cssVariables = ['bg', 'text', 'search', 'searchText', 'placeholder'];

  cssVariables.forEach(element => {
    root.style.setProperty(
      `--${element}-color-light`,
      `var(--${element}-color-${theme})`
    );
  });
};
