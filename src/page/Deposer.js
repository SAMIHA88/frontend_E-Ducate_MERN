import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import ScrollToTopOnPageChange from '../utlités/Actualiser';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import logo from '../assetsLearning/logo.png'
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { BsCloudUpload } from 'react-icons/bs';
import { MdOutlineUploadFile } from 'react-icons/md';
import { ImageToBase64 } from '../utlités/ImageToBase64';
import { FileToBase64 } from '../utlités/FileToBase64';
import { RiFilePdfFill, RiImageAddFill, RiVideoAddFill, RiVideoUploadLine } from 'react-icons/ri';
import { useSelector } from 'react-redux';
//import logo from '../assetsLearning/bc.png'


const categoriesAvecSousCategories = {
    Développement: ["Web", "Mobile", "Front-end", "Back-end", "Game"],
    Langue: ["Anglais", "Français", "Allemand", "Arabe", "Espagnole"],
    Business: ["Entrepreneuriat", "Finance", "Marketing", "Gestion de Projet"],
    Informatique: ["Réseaux et Sécurité", "Systèmes d'Exploitation", "Bases de Données", "Cloud Computing", "DevOps"],
    Marketing: ["Marketing Numérique", "Marketing sur les Réseaux Sociaux", "SEO", "Branding"],
    Photographie: [" Photographie Numérique", "Photographie Commerciale", "Photographie de Portrait"],
    Musique: ["Notions de Musique", "Guitare", "Piano"]
}


const Deposer = () => {

    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [uploadedVideos, setUploadedVideos] = useState([]);
    const [showOtherCategory, setShowOtherCategory] = useState(false);
    const [showOtherSubCategory, setShowOtherSubCategory] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedSubCategory, setSelectedSubCategory] = useState('');

    const userData = useSelector((state) => state.user)
  
    const [data, setData] = useState({
        nomFormateur: "",
        prenomFormateur: "",
        emailFormateur: "",
        titreCours: "",
        imageCours: "",
        videosCours: "",
        fichiersCours: "",
        typeCours: "",
        langueCours: "",
        niveauCours: "",
        categorieCours: "",
        sousCategorieCours: "",
        prixCours: "",
        descriptionCours: ""
    });
    const [files, setFiles] = useState({
        videosCours: [],
        fichiersCours: []
    });

    const handleFileChange = (field) => (e) => {
        const fileList = Array.from(e.target.files);
        setFiles(prevState => ({
            ...prevState,
            [field]: fileList
        }));
    };


    const handleOnChange = (e) => {


        const selectedCategory = e.target.value;
        setSelectedCategory(selectedCategory);
        const selectedValue = e.target.value;
        setSelectedSubCategory(selectedValue);
        const selectedValueCategory = e.target.value;
        setSelectedCategory(selectedValue);




        // Show input field for category if "other" is selected
        if (selectedValueCategory === 'autre') {
            setShowOtherCategory(true);
        } else {
            setShowOtherCategory(false);
        }



        const selectedValueSub = e.target.value;
        setSelectedSubCategory(selectedValue);

        // Show input field for sub-category if "other" is selected
        if (selectedValueSub === 'autre') {
            setShowOtherSubCategory(true);
        } else {
            setShowOtherSubCategory(false);
        }


        const { name, value } = e.target
        setData((previous) => {
            return {
                ...previous,
                [name]: value
            }
        })

    }
    const uploadImage = async (e) => {
        const imageData = await ImageToBase64(e.target.files[0]);
        console.log(imageData)
        setData((preve) => {
            return {
                ...preve,
                imageCours: imageData
            }
        })
    }
    {/** 
    const uploadFichiers = async (e) => {

        const files = e.target.files;
        const uploadedFilesData = await Promise.all(
            Array.from(files).map(async (file) => {
                const fileData = await FileToBase64(file);
                return {
                    name: file.name,
                    url: fileData,
                };
            })
        );
        setUploadedFiles([...uploadedFiles, ...uploadedFilesData]);
        console.log(uploadedFilesData)
        setData((preve) => {
            return {
                ...preve,
                fichiersCours: [...uploadedFilesData]
            }
        })
    };



    const uploadVideos = async (e) => {
        const files = e.target.files;
        const uploadedVideosData = await Promise.all(
            Array.from(files).map(async (file) => await FileToBase64(file))
        );
        setUploadedVideos([...uploadedVideos, ...uploadedVideosData]);
        console.log(uploadedVideosData)
        setData((preve) => {
            return {
                ...preve,
                videosCours: [...uploadedVideosData]
            }
        })
    };
   */}

   const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(data);
        const { nomFormateur, prenomFormateur, emailFormateur, titreCours, typeCours, langueCours, sousCategorieCours, niveauCours, categorieCours, descriptionCours, imageCours } = data
        if (nomFormateur && prenomFormateur && emailFormateur && titreCours && typeCours && sousCategorieCours && langueCours && niveauCours && imageCours && categorieCours && descriptionCours) {
            if (userData.email === emailFormateur) {
            const formData = new FormData();

            Object.keys(data).forEach(key => {
                formData.append(key, data[key]);
            });

            // Ajouter les fichiers vidéos
            for (const file of files.videosCours) {
                formData.append('videosCours', file);
            }

            // Ajouter les fichiers PDF
            for (const file of files.fichiersCours) {
                formData.append('fichiersCours', file);
            }

            try {
                const response = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/ajouterCours`, {
                    method: 'POST',
                    body: formData
                });

                const result = await response.json();
                console.log(result);
                // Réinitialisez l'état, affichez des toasts, etc.
                toast(result.message);

            } catch (err) {
                console.log("Erreur lors de l'ajout du cours:", err);
            }
            setFiles({
                videosCours: [],
                fichiersCours: []
            });
            setData(() => {
                return {

                    nomFormateur: "",
                    prenomFormateur: "",
                    emailFormateur: "",
                    titreCours: "",
                    imageCours: "",
                    typeCours: "",
                    langueCours: "",
                    niveauCours: "",
                    categorieCours: "",
                    sousCategorieCours: "",
                    prixCours: "",
                    descriptionCours: ""

                }
            })
            navigate("/");
            }else{
                toast("Email différent du formateur connecté");
            }
        } else {
            toast("Veuillez remplir tous les champs");
        }
    };





    return (

        <div className="bg-gradient-to-r from-sky-800 to-slate-900 min-h-screen">
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
            <div className="container mx-auto py-12 flex flex-col items-center">

                <img
                    src={logo}
                    alt="Course Image"
                    className="w-32 h-32  mb-4"
                />
                <div className="max-w-xl w-full bg-white rounded-lg shadow-md overflow-hidden mb-8">

                    <div className="max-w-xl w-full rounded-lg shadow-md overflow-hidden mb-8 bg-sky-700 p-4">
                        <p className="text-center text-white font-bold text-3xl "><p className="text-center font-goldman text-4xl mb-8">Formulaire de dépôt des cours</p></p>
                    </div>
                    <form className='px-6 py-8' onSubmit={handleSubmit}>

                        <div className="max-w-xl w-full rounded-lg shadow-md overflow-hidden mb-8 bg-sky-700 p-4">
                            <p className="text-center text-white font-bold text-3xl ">Informations du formateur</p>
                        </div>
                        <label htmlFor='nomFormateur' className="block text-gray-700 text-sm font-bold mb-2">Nom:</label>
                        <input type={"text"} name="nomFormateur" placeholder="Donner votre nom" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' onChange={handleOnChange} value={data.nomFormateur} />
                        <label htmlFor='prenomFormateur' className="block text-gray-700 text-sm font-bold mb-2">Prénom:</label>
                        <input type={"text"} placeholder="Donner votre prénom" name="prenomFormateur" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' onChange={handleOnChange} value={data.prenomFormateur} />
                        <label htmlFor='emailFormateur' className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
                        <input type={"text"} name="emailFormateur" placeholder="Donner votre email" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' onChange={handleOnChange} value={data.emailFormateur} />

                        <div className="max-w-xl w-full rounded-lg shadow-md overflow-hidden mt-6 mb-6 bg-sky-700 p-4">
                            <p className="text-center text-white font-bold text-3xl ">Informations du cours</p>
                        </div>
                        <label htmlFor='titreCours' className="block text-gray-700 text-sm font-bold mb-2">Titre:</label>
                        <input type={"text"} name="titreCours" placeholder="Donner le titre" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' onChange={handleOnChange} value={data.titreCours} />
                        <label htmlFor='typeCours' className="block text-gray-700 text-sm font-bold mb-2">Type:</label>
                        <select className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='typeCours' name='typeCours' onChange={handleOnChange} value={data.typeCours}>
                            <option value="">Selectionnez une option</option>
                            <option>Gratuit</option>
                            <option>Payant</option>
                        </select>

                        {data.typeCours === "Payant" && (
                            <div>
                                <label htmlFor='prixCours' className="block text-gray-700 text-sm font-bold mb-2" >Prix:</label>
                                <input
                                    type="text"
                                    name="prixCours"
                                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                    onChange={handleOnChange}
                                    value={data.prixCours}
                                />
                            </div>
                        )}
                        <label htmlFor='langueCours' className="block text-gray-700 text-sm font-bold mb-2">Langue:</label>
                        <select className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='langueCours' name='langueCours' onChange={handleOnChange} value={data.langueCours}>
                            <option>Selectionnez une option</option>
                            <option>Anglais</option>
                            <option>Français</option>
                            <option>autre</option>
                        </select>
                        <label htmlFor='niveauCours' className="block text-gray-700 text-sm font-bold mb-2">Niveau:</label>
                        <select className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='niveauCours' name='niveauCours' onChange={handleOnChange} value={data.niveauCours}>
                            <option>Selectionnez une option</option>
                            <option value="debutant">Débutant</option>
                            <option value="intermediaire">Intermédiaire</option>
                            <option value="avance">Avancé</option>
                        </select>
                        <label htmlFor="categorieCours" className="block text-gray-700 text-sm font-bold mb-2">Catégorie:</label>
                        <select
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="categorieCours"
                            name="categorieCours"
                            onChange={handleOnChange}
                            value={selectedCategory}
                        >
                            <option value="">Sélectionnez une option</option>
                            {Object.keys(categoriesAvecSousCategories).map((category) => (
                                <option key={category} value={category} className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'>
                                    {category}
                                </option>
                            ))}
                            <option value="autre">autre</option>
                        </select>
                        {showOtherCategory && (
                            <div className="mt-2">
                                <label htmlFor="otherCategorie" className="block text-gray-700 text-sm font-bold mb-2">Autre catégorie :</label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="otherCategorie"
                                    name="otherCategorie"
                                    type="text"
                                    placeholder="Saisissez la nouvelle catégorie"
                                    required
                                />
                            </div>
                        )}

                        {/* Afficher la sous-catégorie toujours */}
                        <div>
                            <label htmlFor="sousCategorieCours" className="block text-gray-700 text-sm font-bold mb-2">Sous Catégorie:</label>
                            <select
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="sousCategorieCours"
                                name="sousCategorieCours"
                                value={selectedSubCategory}
                                onChange={handleOnChange}
                            >
                                <option className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'>Sélectionnez une option</option>
                                {categoriesAvecSousCategories[selectedCategory]?.map((subcategory) => (
                                    <option key={subcategory} value={subcategory}>
                                        {subcategory}
                                    </option>
                                ))}
                                <option value="autres">autre</option>
                            </select>
                            {showOtherSubCategory && (
                                <div className="mt-2">
                                    <label htmlFor="otherSubCategorie" className="block text-gray-700 text-sm font-bold mb-2">Autre sous-catégorie :</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="otherSubCategorie"
                                        name="otherSubCategorie"
                                        type="text"
                                        placeholder="Saisissez la nouvelle sous-catégorie"
                                        required
                                    />
                                </div>
                            )}
                        </div>
                        <label htmlFor='imageCours' className="block text-gray-700 text-sm font-bold mb-2">Image:
                            <div className='h-40 w-full bg-slate-300 my-3 rounded flex items-center justify-center cursor-pointer '>
                                {data.imageCours ? <img src={data.imageCours} className='h-full' />
                                    : <span className='text-5xl '><RiImageAddFill /></span>
                                }
                                <input type={"file"} accept="image/*" id="imageCours" name='imageCours' onChange={uploadImage} className='hidden' />
                            </div></label>



                        <label htmlFor='descriptionCours' className="block text-gray-700 text-sm font-bold mb-2">Description:</label>
                        <textarea rows={3}
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' onChange={handleOnChange}
                            name='descriptionCours'
                            placeholder="Decriver votre cours"
                            value={data.descriptionCours}
                        />

                        <div className="max-w-xl w-full rounded-lg shadow-md overflow-hidden mb-8 bg-sky-700 p-4">
                            <p className="text-center text-white font-bold text-3xl ">Importation des ressources</p>
                        </div>
                       {/* Pour les vidéos */}
<label htmlFor='videosCours' className="block text-gray-700 text-sm font-bold mb-2">Vidéos:
    <div className='h-40 w-full bg-slate-300 my-3 rounded flex items-center justify-center cursor-pointer '>
        {files.videosCours.length ? (
            files.videosCours.map((video, index) => (
                <div key={index} className="m-2">
                    <video width="100" height="100" controls>
                        <source src={URL.createObjectURL(video)} type="video/mp4" />
                    </video>
                </div>
            ))
        ) : (
            <span className='text-5xl '><RiVideoAddFill /></span>
        )}
        <input type={"file"} multiple accept="video/*" id="videosCours" name='videosCours' onChange={handleFileChange('videosCours')} className='hidden' />
    </div>
</label>

{/* Pour les fichiers PDF */}
<label htmlFor='fichiersCours' className="block text-gray-700 text-sm font-bold mb-2">PDFs:
    <div className='h-40 w-full bg-slate-300 my-3 rounded flex items-center justify-center cursor-pointer '>
        {files.fichiersCours.length ? (
            files.fichiersCours.map((pdf, index) => (
                <div key={index} className="m-2">
                    <iframe src={URL.createObjectURL(pdf)} width="100" height="100"></iframe>
                </div>
            ))
        ) : (
            <span className='text-5xl '><RiFilePdfFill /></span>
        )}
        <input type={"file"} multiple accept="application/pdf" id="fichiersCours" name='fichiersCours' onChange={handleFileChange('fichiersCours')} className='hidden' />
    </div>
</label>

                        {/*
                        <label htmlFor='videosCours'className="block text-gray-700 text-sm font-bold mb-2">Videos:
                            <div className='h-40 w-full bg-slate-300 my-3 rounded flex items-center justify-center cursor-pointer'>
                                <span className='text-5xl '><RiVideoUploadLine /></span>
                                <input type={"file"} id="videosCours" accept="video/*" name='videosCours' onChange={uploadVideos} className='hidden' multiple />

                            </div></label>
                        {uploadedVideos.map((videoData, index) => (
                            <div key={index}>
                                <video controls>
                                    <source src={videoData} type="video/mp4" />
                                    Votre navigateur ne supporte pas cette tag de videos
                                </video>
                            </div>
                        ))}
                        <label htmlFor='fichiersCours'className="block text-gray-700 text-sm font-bold mb-2">Fichiers:
                            <div className='h-40 w-full bg-slate-300 my-3 rounded flex items-center justify-center cursor-pointer'>
                                <span className='text-5xl '><MdOutlineUploadFile /></span>
                                <input type={"file"} accept=".pdf" id="fichiersCours" name='fichiersCours' onChange={uploadFichiers} className='hidden' multiple />

                            </div></label>
                        {uploadedFiles.map((fileData, index) => (
                            <div key={index}>
                                <p>{fileData.name}</p>
                                <embed src={fileData.url} type="application/pdf" width="100%" height="500px" />
                                {fileData.progress && (
                                    <progress value={fileData.progress}></progress>
                                )}
                            </div>
                        ))}
                        */}
                        <div className="flex items-center justify-center mt-6">
                            <button
                                type="submit"
                                className="bg-sky-700 hover:bg-sky-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors transform hover:scale-110"
                            >
                                Déposer
                            </button>
                        </div>
                    </form>
                </div >


            </div >

        </div >

    );
}

export default Deposer;