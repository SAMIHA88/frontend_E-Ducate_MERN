import React, { useState } from 'react'
import ScrollToTopOnPageChange from '../utlités/Actualiser';
import login from "../assetsLearning/login.jpg";
import profil from "../assetsLearning/profile.png";
import { Link, useNavigate } from 'react-router-dom';
import { BiHide, BiShow } from "react-icons/bi";
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { ImageToBase64 } from '../utlités/ImageToBase64';
import { toast } from 'react-hot-toast';

const isEmailValid = (email) => {
    const emailRegex = /^[a-zA-Z][a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };
  
  const isNameValid = (name) => {
    const nameRegex = /^[a-zA-Z\s]*$/;
    return nameRegex.test(name);
  };

const Inscription = () => {
    const [showMDP, setShowMDP] = useState(false)
    const [showCMDP, setShowCMDP] = useState(false)
    const [data, setData] = useState({
        email: "",
        nom:"",
        password: "",
        cpassword: "",
        profileImage: "",
        role: ""
    })
    console.log(data)
    const handleShowMDP = () => {
        setShowMDP(previous => !previous)
    }
    const handleShowCMDP = () => {
        setShowCMDP(previous => !previous)
    }
    const handleOnChange = (e) => {
        const { name, value } = e.target
        setData((previous) => {
            return {
                ...previous,
                [name]: value
            }
        })
    }
    const handleUploadProfileImage = async (e) => {
        const data = await ImageToBase64(e.target.files[0])
        console.log(data);

        setData((preve) => {
            return {
                ...preve,
                profileImage: data
            }
        })
    }
    console.log(process.env.REACT_APP_SERVER_DOMAIN)
   
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const { nom, email, password, cpassword, role } = data;
    
        if (nom && email && password && cpassword && role) {
          if (password === cpassword) {
            if (isEmailValid(email) && isNameValid(nom)) {
              const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/Inscription`, {
                method: "POST",
                headers: {
                  "content-type": "application/json"
                },
                body: JSON.stringify(data)
              });
    
              const dataRes = await fetchData.json();
              console.log(dataRes);
    
              toast(dataRes.message);
              if (dataRes.alert) {
                navigate("/Authentification");
              }
            } else {
              if (!isNameValid(nom)) {
                toast("Nom invalide : utilisez uniquement des lettres");
              } else {
                toast("Adresse email invalide");
              }
            }
          } else {
            toast("Mots de passe différents");
          }
        } else {
          toast("Veuillez remplir tous les champs");
        }
      };
    const navigate = useNavigate()
    return (
        <div>
            <ScrollToTopOnPageChange />
            <script src="//unpkg.com/alpinejs" defer></script>
            <head>
                <link href="https://fonts.googleapis.com/css2?family=Goldman&display=swap" rel="stylesheet" />
            </head>
            <style>
                {`
        .font-goldman {
          font-family: 'Goldman', sans-serif;
        }
        `}
            </style>
            <main>
                <section className="bg-white">


                    <body>
                        <section className="min-h-screen flex items-stretch text-white ">
                            <div className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center" style={{ backgroundImage: `url(${login})` }}>
                                <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
                                <div className="w-full px-24 z-10">
                                    <h1 className="text-5xl font-bold text-left tracking-wide">Créer votre compte</h1>
                                    <p className="text-3xl my-4">Pour pouvoir accéder à E-Ducate.</p>
                                </div>
                                <div className="bottom-0 absolute p-4 text-center right-0 left-0 flex justify-center space-x-4">
                                    <span>
                                        <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                                    </span>
                                    <span>
                                        <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
                                    </span>
                                    <span>
                                        <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                                    </span>
                                </div>
                            </div>
                            <div className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0" style={{ backgroundColor: "#111827" }}>
                                <div className="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center" style={{ backgroundImage: `url(${login})` }}>    <div class="absolute bg-black opacity-60 inset-0 z-0"></div>
                                </div>
                                <div className="w-full py-6 z-20 ">
                                    <div className="my-6 flex flex-col items-center justify-center mt-8">
                                        <img src={data.profileImage ? data.profileImage : profil} className="h-20 mb-2" alt="Profile Image" />
                                        <div className="flex flex-col items-center mt-18">
                                            <label htmlFor="profileImage" className="cursor-pointer bg-sky-900 text-white px-4 py-2 rounded-md">
                                                <div className="flex items-center">
                                                    <AiOutlineCloudUpload className="mr-2" />
                                                    <span className="text-sm">Importer la photo</span>
                                                </div>
                                            </label>
                                            <input type="file" id="profileImage" name="profileImage" className="hidden" onChange={handleUploadProfileImage} accept="image/*" />
                                        </div>

                                    </div>
                                    <div className="py-6 space-x-2">
                                    </div>

                                    <form action="" className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto" onSubmit={handleSubmit}>
                                        <div className="pb-2 pt-4 text-xl ">
                                           
                                            <div className="flex items-center justify-center">
                                                <input
                                                    type="radio"
                                                    name="role"
                                                    value="etudiant"
                                                    checked={data.role === "etudiant"}
                                                    onChange={handleOnChange}
                                                    className="mr-2"
                                                />
                                                <label htmlFor="etudiant" className="text-gray-100 mr-4">Étudiant</label>
                                                <input
                                                    type="radio"
                                                    name="role"
                                                    value="formateur"
                                                    checked={data.role === "formateur"}
                                                    onChange={handleOnChange}
                                                    className="mr-2"
                                                />
                                                <label htmlFor="formateur" className="text-gray-100">Formateur</label>
                                            </div>
                                        </div>
                                        <div className="pb-2 pt-4">
                                            <input type="text" name="nom" value={data.nom} onChange={handleOnChange} id="nom" placeholder="Nom Complet" class="block w-full p-4 text-lg rounded-sm bg-gray-800" />
                                        </div>
                                        <div className="pb-2 pt-4">
                                            <input type="email" name="email" value={data.email} onChange={handleOnChange} id="email" placeholder="Email" class="block w-full p-4 text-lg rounded-sm bg-gray-800" />
                                        </div>

                                        <div className="pb-2 pt-4 flex bg-gray-800 p-4 mt-2 focus-within:outline focus-within:outline-gray-50 focus-within:border-1 ">
                                            <input class="block w-full  text-lg outline-none border-none bg-gray-800 " value={data.password} onChange={handleOnChange} type={showMDP ? "text" : "password"} name="password" id="password" placeholder="Password" />
                                            <span className="flex text-xl" value={data.cpassword} onClick={handleShowMDP}>{showMDP ? <BiHide /> : <BiShow />}</span>
                                        </div>
                                        <div className="pb-2 pt-4 flex bg-gray-800 p-4 mt-4 focus-within:outline focus-within:outline-gray-50 focus-within:border-1">
                                            <input class="block w-full  text-lg outline-none border-none bg-gray-800" type={showCMDP ? "text" : "password"} value={data.cpassword} onChange={handleOnChange} name="cpassword" id="cpassword" placeholder=" Confirmer Password" />
                                            <span className="flex text-xl" onClick={handleShowCMDP}>{showCMDP ? <BiHide /> : <BiShow />}</span>
                                        </div>
                                        <div className="pb-2 pt-4 flex items-center">
                                            <input type="checkbox" name="terms" id="terms" className="mr-2" required />
                                            <label htmlFor="terms" className="text-gray-100">
                                                J'accepte toutes les conditions
                                            </label>
                                        </div>

                                        <div className="text-right text-gray-400 hover:underline hover:text-gray-100">
                                            <Link to={"../Authentification"} className="nav-link">
                                                <a href="#">Avez vous déjà un compte?</a>
                                            </Link>
                                        </div>
                                        <div className="px-4 pb-2 pt-4">
                                            <button className="uppercase block w-full p-4 text-lg rounded-full bg-gray-800 hover:bg-sky-950 focus:outline-none">S'inscrire</button>
                                        </div>

                                        <div className="p-4 text-center right-0 left-0 flex justify-center space-x-4 mt-16 lg:hidden ">
                                            <a href="#">
                                                <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                                            </a>
                                            <a href="#">
                                                <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
                                            </a>
                                            <a href="#">
                                                <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                                            </a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </section>
                    </body>




                </section>




            </main>
        </div>
    )
}

export default Inscription;