import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import Authentification from './page/Authentification';
import Inscription from './page/Inscription';
import About from './page/About';
import Enseigner from './page/Enseigner';
import Deposer from './page/Deposer';
import { store } from './redux/index';
import { Provider } from 'react-redux';
import Accueil from './page/Accueil';
import PaiementA from './page/paiementA';
import PaiementM from './page/paiementM';
import ChatBot from './page/chatbot';
import CoursPage from './page/CoursPage';
import Panier from './page/Panier';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<App />}>
      <Route path='/' element={<Accueil />} />
      <Route index element={<About />} />
      <Route path='Enseigner' element={<Enseigner />} />
      <Route path='Deposer' element={<Deposer />} />
      <Route path='Authentification' element={<Authentification />} />
      <Route path='Inscription' element={<Inscription />} />
      <Route path='About' element={<About />} />
      <Route path='PayerM' element={<PaiementM />} />
      <Route path='PayerA' element={<PaiementA />} />
      <Route path="/Cours/:filterby" element={<CoursPage />} />
      <Route path="/Panier" element={<Panier />} />
      <Route path="/chatbot" element={<ChatBot />} />
    </Route>
  )
);

const root = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
  root
);

reportWebVitals();
