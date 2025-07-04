import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';
import { Pap } from './Pap.jsx';
export const serverUrl = "https://chatapp-backend-yzxc.onrender.com"

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <Pap/>
    </Provider>
  </BrowserRouter>
);
