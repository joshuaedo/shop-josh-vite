import MenuContext from '@/providers/menu';
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';

export const useMenu = () => {
  const context = useContext(MenuContext);
  // const { pathname } = useLocation();
  // const isHomePage = pathname === '/';
  const isHomePage = false;

  if (context === undefined) {
    throw new Error('useMenu must be used within a MenuProvider');
  }

  const { isOpen, setIsOpen } = context;

  const blurOnOpen: React.CSSProperties = {
    filter: isOpen ? 'blur(5px)' : 'none',
    pointerEvents: isOpen ? 'none' : 'auto',
    opacity: isOpen && !isHomePage ? 0.5 : 1,
    transition: 'opacity 1.5s ease-in-out, filter 1.5s ease-in-out',
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return {
    isOpen,
    setIsOpen,
    blurOnOpen,
    toggleMenu,
  };
};
