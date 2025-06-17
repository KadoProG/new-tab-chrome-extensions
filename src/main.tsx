import { createRoot } from 'react-dom/client';
import { App } from '@/App.tsx';
import '@/index.scss';
import '@/index.css';
import { NetworkStatusProvider } from '@/components/contexts/networkStatus/NetworkStatusProvider';
import { LinkProvider } from '@/components/contexts/link/LinkProvider';
import { LinkEditDialogProvider } from '@/components/contexts/llinkEditDialog/LinkEditDialogProvider';

createRoot(document.getElementById('root')!).render(
  <NetworkStatusProvider>
    <LinkProvider>
      <LinkEditDialogProvider>
        <App />
      </LinkEditDialogProvider>
    </LinkProvider>
  </NetworkStatusProvider>
);
