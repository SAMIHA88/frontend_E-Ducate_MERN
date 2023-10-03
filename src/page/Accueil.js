import React, {  useRef } from 'react'

import { FaGraduationCap } from 'react-icons/fa'
import { GrNext, GrPrevious } from 'react-icons/gr'
import ScrollToTopOnPageChange from '../utlités/Actualiser';
import CoursCarte from '../component/CoursCarte';
import { useSelector } from 'react-redux';
import CardType from '../component/CardType';
import ListeCours from '../component/ListeCours';



const Accueil = () => {
    const coursData = useSelector((state) => state.cours.coursList)
    console.log(coursData)
    const homeCoursCarteList = coursData.slice(0, 3)
    const homeCoursCarteListDevelopement = coursData.filter(el => el.categorieCours === "Développement", [])
    const homeCoursCarteListBusiness = coursData.filter(el => ["Business", "Marketing"].includes(el.categorieCours));
    const homeCoursCarteListCulture = coursData.filter(el => ["Musique", "Photographie"].includes(el.categorieCours));

    const homeCoursCarteListLangue = coursData.filter(el => el.categorieCours === "Langue", [])

    console.log("homeCoursCarteListDevelopement:", homeCoursCarteListDevelopement);
    console.log("homeCoursCarteListBusiness:", homeCoursCarteListBusiness);
    console.log("homeCoursCarteListCulture:", homeCoursCarteListCulture);
    console.log("homeCoursCarteListLangue:", homeCoursCarteListLangue);

    const loadingArray = new Array(3).fill(null)
const loadingArrayFeature=new Array(10).fill(null)
    const slideCoursRefDev = useRef();
    const slideCoursRefBusiness = useRef();
    const slideCoursRefLangue = useRef();
    const slideCoursRefCulture = useRef();

    const scrollCourses = (ref, direction) => {
        if (ref.current) {
            ref.current.scrollLeft += direction === "next" ? 400 : -400;
        }
    };

    const categorieListe = [...new Set(coursData.map(el => el.categorieCours))]
    console.log(categorieListe)
    //filtered data
    
   
    return (
        <div>
            <ScrollToTopOnPageChange />
            <script src="//unpkg.com/alpinejs" defer></script>
            <head>
                <link href="https://fonts.googleapis.com/css2?family=Goldman&display=swap" rel="stylesheet" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=DynaPuff&family=Goldman:wght@400;700&family=Lumanosimo&family=Pangolin&family=Rubik+Pixels&family=Titillium+Web:wght@700&display=swap" rel="stylesheet" />
            </head>
            <style>
                {`
        .font-pangolin {
            font-family: 'Pangolin', cursive;
        }
        .font-goldman {
            font-family: 'Goldman', sans-serif;
          }
          .font-edu-sa{
                        font-family: 'DynaPuff', cursive;
                        font-family: 'Edu SA Beginner', cursive;
                        font-family: 'Goldman', cursive;
                        font-family: 'Lugrasimo', cursive;
                        font-family: 'Lumanosimo', cursive;
                        font-family: 'Pangolin', cursive;
                        font-family: 'Rubik Pixels', cursive;
                        font-family: 'Titillium Web', sans-serif;
                    }
        `}
            </style>

            <section class="bg-gray-200 flex ">
                <div class="container mx-auto px-6 py-28 md:w-1/2 gap-4">
                    < FaGraduationCap className='text-2xl text-gray-800' />
                    <h1 class="text-2xl font-edu-sa text-gray-800 lg:text-4xl">Une Large Selection De Cours Sur E-Ducate</h1>
                    <p className='py-3'>Découvrez une bibliothèque riche et diversifiée de cours en ligne conçus pour stimuler votre apprentissage. Notre plateforme d'e-learning offre une variété de sujets passionnants, des fondamentaux aux domaines spécialisés, afin de répondre à tous vos besoins éducatifs.</p>
                    <button className='font-bold bg-red-500 rounded-md text-slate-200 px-3 py-1'>Acheter Dés Maintenant</button>
                </div>
                
                <div className='container mx-auto px-6 py-28 md:w-1/2 flex flex-wrap gap-4 p-4 justify-center'>
                    {
                        homeCoursCarteList[0] ? homeCoursCarteList.map(el => {
                            return (

                                <CoursCarte
                                    key={el._id}
                                    id={el._id}
                                    imageCours={el.imageCours}
                                    titreCours={el.titreCours}
                                    nomFormateur={el.nomFormateur}
                                    prenomFormateur={el.prenomFormateur}
                                    prixCours={el.prixCours}
                                    categorieCours={el.categorieCours}
                                    sousCategorieCours={el.sousCategorieCours}
                                />

                            )
                        }) : loadingArray.map((el, index) => {
                            return (
                                <CoursCarte
                                    key={index}
                                    loading={<div className="flex justify-center items-center space-x-2">
                                    <p className="text-2xl text-blue-600">Loading...</p>
                                    <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-blue-600"></div>
                                  </div>}
                                />
                            )
                        })
                    }
                </div>

            </section>
            <div className='bg-gray-200 '>
                <div className='flex w-full items-center'>
                    <h2 className='font-bold text-2xl text-slate-800 underline'>Cours de développement:</h2>
                    <div className='ml-auto'>
                        <button className='bg-slate-300 hover:bg-slate-400 lest-lg rounded p-1 mx-1 ' onClick={() => scrollCourses(slideCoursRefDev, "previous")}><GrPrevious /></button>
                        <button className='bg-slate-300 hover:bg-slate-400 lest-lg rounded p-1 mx-2' onClick={() => scrollCourses(slideCoursRefDev, "next")}><GrNext /></button>
                    </div>
                </div>
                <div className="flex gap-5 overflow-scroll scrollbar-none scroll-smooth" ref={slideCoursRefDev}>
                {
  homeCoursCarteListDevelopement[0]
    ? homeCoursCarteListDevelopement.map(el => {
        return (
          <CardType
            key={el._id}
            id={el._id}
            categorieCours={el.categorieCours}
            imageCours={el.imageCours}
            titreCours={el.titreCours}
            prixCours={el.prixCours}
            sousCategorieCours={el.sousCategorieCours}
          />
        );
      })
    : loadingArray.map((el, index) => {
        return (
            <CardType
                key={index}
                loading={<div className="flex justify-center items-center space-x-2">
                <p className="text-2xl text-blue-600">Loading...</p>
                <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-blue-600"></div>
              </div>}
            />
        )
    })

}


                </div>
            </div>
            <div className='bg-gray-200 '>
                <div className='flex w-full items-center'>
                    <h2 className='font-bold text-2xl text-slate-800 underline'>Cours de Bussiness:</h2>
                    <div className='ml-auto'>
                        <button className='bg-slate-300 hover:bg-slate-400 lest-lg rounded p-1 mx-1 ' onClick={() => scrollCourses(slideCoursRefBusiness, "previous")}><GrPrevious /></button>
                        <button className='bg-slate-300 hover:bg-slate-400 lest-lg rounded p-1 mx-2' onClick={() => scrollCourses(slideCoursRefBusiness, "next")}><GrNext /></button>
                    </div>
                </div>
                <div className="flex gap-5 overflow-scroll scrollbar-none scroll-smooth" ref={slideCoursRefBusiness}>
                {
  homeCoursCarteListBusiness[0]
    ? homeCoursCarteListBusiness.map(el => {
        return (
          <CardType
            key={el._id}
            id={el._id}
            categorieCours={el.categorieCours}
            imageCours={el.imageCours}
            titreCours={el.titreCours}
            prixCours={el.prixCours}
            sousCategorieCours={el.sousCategorieCours}
          />
        );
      })
    : loadingArray.map((el, index) => {
        return (
            <CardType
                key={index}
                loading={<div className="flex justify-center items-center space-x-2">
                <p className="text-2xl text-blue-600">Loading...</p>
                <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-blue-600"></div>
              </div>}
            />
        )
    })
}
                </div>
                <div className='bg-gray-200 '>
                    <div className='flex w-full items-center'>
                        <h2 className='font-bold text-2xl text-slate-800 underline'>Cours de Langues:</h2>
                        <div className='ml-auto'>
                            <button className='bg-slate-300 hover:bg-slate-400 lest-lg rounded p-1 mx-1 ' onClick={() => scrollCourses(slideCoursRefLangue, "previous")}><GrPrevious /></button>
                            <button className='bg-slate-300 hover:bg-slate-400 lest-lg rounded p-1 mx-2' onClick={() => scrollCourses(slideCoursRefLangue, "next")}><GrNext /></button>
                        </div>
                    </div>
                    <div className="flex gap-5 overflow-scroll scrollbar-none scroll-smooth" ref={slideCoursRefLangue}>
                    {
  homeCoursCarteListLangue[0]
    ? homeCoursCarteListLangue.map(el => {
        return (
          <CardType
            key={el._id}
            id={el._id}
            categorieCours={el.categorieCours}
            imageCours={el.imageCours}
            titreCours={el.titreCours}
            prixCours={el.prixCours}
            sousCategorieCours={el.sousCategorieCours}
          />
        );
      })
    : loadingArray.map((el, index) => {
        return (
            <CardType
                key={index}
                loading={<div className="flex justify-center items-center space-x-2">
                <p className="text-2xl text-blue-600">Loading...</p>
                <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-blue-600"></div>
              </div>}
            />
        )
    })
}

                    </div>
                </div>
                <div className='bg-gray-200 '>
                    <div className='flex w-full items-center'>
                        <h2 className='font-bold text-2xl text-slate-800 underline'>Cours de Culture:</h2>
                        <div className='ml-auto'>
                            <button className='bg-slate-300 hover:bg-slate-400 lest-lg rounded p-1 mx-1 ' onClick={() => scrollCourses(slideCoursRefCulture, "previous")}><GrPrevious /></button>
                            <button className='bg-slate-300 hover:bg-slate-400 lest-lg rounded p-1 mx-2' onClick={() => scrollCourses(slideCoursRefCulture, "next")}><GrNext /></button>
                        </div>
                    </div>
                    <div className="flex gap-5 overflow-scroll scrollbar-none scroll-smooth" ref={slideCoursRefCulture}>
                    {
  homeCoursCarteListCulture[0]
    ? homeCoursCarteListCulture.map(el => {
        return (
          <CardType
            key={el._id}
            id={el._id}
            categorieCours={el.categorieCours}
            imageCours={el.imageCours}
            titreCours={el.titreCours}
            prixCours={el.prixCours}
            sousCategorieCours={el.sousCategorieCours}
          />
        );
      })
    : loadingArray.map((el, index) => {
        return (
            <CardType
                key={index}
                loading={<div className="flex justify-center items-center space-x-2">
                <p className="text-2xl text-blue-600">Loading...</p>
                <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-blue-600"></div>
              </div>}
            />
        )
    })
}

                    </div>
                </div>
                <div className='flex w-full items-center'>
        <h2 className='font-bold text-2xl text-slate-800 underline'>Filtrer les cours selon la catégorie que vous souhaités:</h2>


    </div>
              <ListeCours />

            </div>
        </div>
            )
}
            export default Accueil;
