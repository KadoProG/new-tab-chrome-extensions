import { createRoot } from 'react-dom/client';
import { App } from '@/App.tsx';
import '@/index.scss';
import { NetworkStatusProvider } from '@/components/contexts/networkStatus/NetworkStatusProvider';
import { LinkProvider } from '@/components/contexts/link/LinkProvider';

createRoot(document.getElementById('root')!).render(
  <NetworkStatusProvider>
    <LinkProvider>
      <App />
    </LinkProvider>
  </NetworkStatusProvider>
);
