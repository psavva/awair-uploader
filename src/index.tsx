import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store';
import { Provider } from 'react-redux';
import * as ReactDOMClient from 'react-dom/client';
import { AuthorizationProvider,AuthorizationProps } from './utils/authorization';
import constants from './constants';
const container = document.getElementById('root') as HTMLElement;

// Create a root.
const root = ReactDOMClient.createRoot(container);


root.render(
  <React.StrictMode>
      <Provider store={store} >
        <AuthorizationProvider authorizationProps={constants.identityProvider}>
          <App />
        </AuthorizationProvider>  
      </Provider>
    </React.StrictMode>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
