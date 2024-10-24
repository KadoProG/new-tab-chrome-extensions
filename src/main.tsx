import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from '@/App.tsx';
import '@/index.scss';
import { NetworkStatusProvider } from '@/components/contexts/networkStatus/NetworkStatusProvider';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NetworkStatusProvider>
      <App />
    </NetworkStatusProvider>
  </StrictMode>
);
