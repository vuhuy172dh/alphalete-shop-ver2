import React, { useCallback, useContext, useState } from 'react';

interface DarkModeValue {
  mode: 'light' | 'dark';
  handleDarkMode: VoidFunction | undefined;
}

export const DarkModeContext = React.createContext<DarkModeValue>({
  mode: 'dark',
  handleDarkMode: undefined
});

interface Props {
  children: React.ReactNode;
}

const DarkMode = ({ children }: Props) => {
  const [mode, setMode] = useState<'dark' | 'light'>('dark');
  const declareDarkMode = (): void => {
    document.documentElement.classList.add('dark');
    document.body.classList.add('body-dark');
  };

  const handleDarkMode = (): void => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('body-dark');
      return;
    }
    document.documentElement.classList.add('dark');
    document.body.classList.add('body-dark');
  };

  declareDarkMode();
  return (
    <DarkModeContext.Provider value={{ mode: mode, handleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkMode;
