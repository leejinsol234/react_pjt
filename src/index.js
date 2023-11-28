import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HelmetProvider } from 'react-helmet-async';
import './i18n';
import ErrorPage from './pages/commons/ErrorPages';
import { BrowserRouter } from 'react-router-dom';
//import UserContext from './modules/User';
import { UserProvider } from './modules/User';
import { MainClassProvider } from './modules/mainClass';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <UserContext.Provider value={{ isLogin: false, userInfo: {} }}> */}

    <UserProvider>
      <HelmetProvider>
        <BrowserRouter>
          <MainClassProvider>
            <ErrorPage>
              <App />
            </ErrorPage>
          </MainClassProvider>
        </BrowserRouter>
      </HelmetProvider>
    </UserProvider>

    {/* </UserContext.Provider> */}
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
