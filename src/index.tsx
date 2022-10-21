import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom";
// import './index.css';
import './css/output.css';
import "bootstrap/dist/css/bootstrap.min.css";
// import App from './App';
import Header from './components/header';
import Footer from './components/footer';
import Calculator from './components/Calculator';

// import Header from './components/header';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Header />
    {/*<App />*/}
      <Calculator />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
