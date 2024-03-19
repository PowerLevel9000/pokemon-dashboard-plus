import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import Modal from './components/shared/Modal';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <App />
        <Modal />
      </Provider>
    </HashRouter>
  </React.StrictMode>
);

reportWebVitals();
