import React from 'react';
import ReactDOM from 'react-dom';
import App from './Container/App';
import { GlobalStyles } from './GlobalStyle';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <React.StrictMode>
            <GlobalStyles />
            <App />
        </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
);
