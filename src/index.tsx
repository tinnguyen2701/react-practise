import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './i18n';
import reportWebVitals from './reportWebVitals';
import { setupStore } from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import ErrorBoundary from './components/ErrorBoundary';

// Store
const store = setupStore()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    // <React.StrictMode>
      <ErrorBoundary>
        <BrowserRouter>
          <Provider store={store}>
            <App />
        </Provider>
      </BrowserRouter>
      </ErrorBoundary>
    // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
