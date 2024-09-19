import React from 'react';
import App from './App'; // Импортируем ваш компонент App
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import { BrowserRouter } from "react-router-dom";

function Root() {
    return (
        <TonConnectUIProvider manifestUrl="https://resilient-madeleine-9ff7c2.netlify.app/tonconnect-manifest.json">
            <BrowserRouter>
                <App />
            </BrowserRouter>  
        </TonConnectUIProvider>
    );
}

export default Root;

