import { useEffect } from 'react';
import { useInRouterContext, useLocation } from 'react-router-dom';

const useScrollToTop = () => {
  const location = useLocation();
  const routerContext = useInRouterContext();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location, routerContext]);
};

export default useScrollToTop;
