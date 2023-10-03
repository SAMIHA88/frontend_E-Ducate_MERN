import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, RouterProvider } from 'react-router-dom'; // Note the import change
import Authentification from './page/Authentification';
import Header from './component/Header';
import Inscription from './page/Inscription';
import Enseigner from './page/Enseigner';
import About from './page/About';
import Deposer from './page/Deposer';
import PaiementA  from './page/paiementA';
import Footer from './component/Footer';
import  { Toaster } from 'react-hot-toast';
import Accueil from './page/Accueil';
import PaiementM from './page/paiementM';
import ChatBot from './page/chatbot';
import { useDispatch, useSelector } from "react-redux";
import { setDataCours } from "./redux/coursSlice"
import CoursPage from './page/CoursPage';
import Panier from './page/Panier';
const App = () => {
 
const dispatch =useDispatch()
const coursData=useSelector((state)=>state.cours)
useEffect(() => {
    (async () => {
        const res=await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/cours`)
        const resData=await res.json()
        console.log(resData)
        dispatch(setDataCours(resData))
    })()


},[])
console.log(coursData)

  return (
    <>
    <Toaster/>
    <div>
      <Header />
      <Routes>
        {/* Other routes */}
        <Route path="/Authentification" element={<Authentification />} />
        <Route path="/Inscription" element={<Inscription />} />
        <Route path="/Enseigner" element={<Enseigner />} />
        <Route path="/Deposer" element={<Deposer />} />
        <Route path="/Cours/:filterby" element={<CoursPage />} />
        <Route path="/About" element={<About />} />
        <Route path="/PayerA" element={<PaiementA />} />
        <Route path="/PayerM" element={<PaiementM />} />
        <Route path="/chatbot" element={<ChatBot />} />
        <Route path="/Panier" element={<Panier />} />
        <Route path="/" element={<Accueil />} />
      </Routes>
      <Footer />
    </div>
    </>
  );


};

export default App;

