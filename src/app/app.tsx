import { BrowserRouter } from 'react-router-dom';
import { Router } from '@/components/layout/router';
import Providers from '@/providers';

export function App() {
  return (
    <BrowserRouter>
      <Providers>
        <Router />
      </Providers>
    </BrowserRouter>
  );
}
