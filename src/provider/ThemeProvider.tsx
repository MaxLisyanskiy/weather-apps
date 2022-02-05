import { ReactNode, useState } from 'react';
import { Theme, ThemeContext } from '../context/ThemeContext';
import { changeCssRootVariables } from '../model/ChanheCssRootVariebles';
import { storageTheme } from '../model/Storage';

interface Props {
  children: ReactNode;
}

export const ThemeProvider = ({ children, ...props }: Props) => {
  const [theme, setTheme] = useState<Theme>(storageTheme.getItem('theme') || Theme.LIGHT);

  changeCssRootVariables(theme);

  function changeTheme(theme: Theme) {
    storageTheme.setItem('theme', theme);
    setTheme(theme);
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        changeTheme,
      }}
      {...props}>
      {children}
    </ThemeContext.Provider>
  );
};
