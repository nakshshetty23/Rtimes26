import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // This file is critical for the INSPIRE theme base
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);