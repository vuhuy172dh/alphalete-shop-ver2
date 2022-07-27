import React, { useCallback, useState } from 'react';

interface NavValue {
  mode: 'openDrawer' | 'closeDrawer';
  handleMode: VoidFunction | undefined;
}

export const NavbarContext = React.createContext<NavValue>({
  mode: 'closeDrawer',
  handleMode: undefined
});

interface Props {
  children: React.ReactNode;
}

const NavMode = ({ children }: Props) => {
  const [mode, setMode] = useState<'openDrawer' | 'closeDrawer'>('closeDrawer');

  const handleMode = useCallback(() => {
    if (mode === 'closeDrawer') {
      setMode('openDrawer');
      return;
    }
    setMode('closeDrawer');
  }, [mode]);

  return (
    <NavbarContext.Provider value={{ mode, handleMode }}>
      {children}
    </NavbarContext.Provider>
  );
};

export default NavMode;
