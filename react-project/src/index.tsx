import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(
    document.getElementById('root') as HTMLElement // type assertion
);

function App() {
    return <h1>Kaupungin perhoset</h1>;
}

root.render(
    <StrictMode>
        <App />
    </StrictMode>
);