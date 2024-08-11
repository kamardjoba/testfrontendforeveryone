import React from 'react';
import App from './App'; // Импортируем ваш компонент App
import { TonConnectUIProvider } from '@tonconnect/ui-react';

function Root() {
    return (
        <TonConnectUIProvider manifestUrl="https://resilient-madeleine-9ff7c2.netlify.app/tonconnect-manifest.json">
            <App />
        </TonConnectUIProvider>
    );
}

export default Root;

