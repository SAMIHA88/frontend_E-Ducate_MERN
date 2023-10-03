import React from 'react'
import { Link } from 'react-router-dom'
import { ajouterPanierItems } from '../redux/coursSlice';
import { useDispatch, useSelector } from 'react-redux'
function CardType({ categorieCours, imageCours, titreCours, prixCours, sousCategorieCours,descriptionCours, id, loading ,nomFormateur,prenomFormateur}) {
  const userData = useSelector((state) => state.user)
  
  const dispatch = useDispatch()
        {/**handleAddCardProduct */}
  const handleAddPanierCours = (e) => {
    e.stopPropagation();//pour ne pas faire une action 
    dispatch(ajouterPanierItems({
      _id:id,
      titreCours : titreCours ,
      imageCours  :   imageCours    ,
      categorieCours:categorieCours,
      sousCategorieCours     : sousCategorieCours      ,
      prixCours:prixCours,
      nomFormateur:nomFormateur,
      prenomFormateur:prenomFormateur

    }))
  };
  return (
    <div className='w-full min-w-[280px] max-w-[280px]  bg-white hover:shadow-2xl transition-shadow duration-200 ease-in mt-10 ml-5 mb-10 rounded-lg  cursor-pointer'>
      {imageCours ? (

        <>
          <Link to={`/Cours/${id}`} onClick={() => window.scrollTo({ top: "0", behavior: "smooth" })}>
            <div className="h-28 flex flex-col justify-center items-center">
              <img src={imageCours} className='h-full object-cover' alt={`${titreCours}`} />
            </div>
            <div className="p-4 ">
              <h3 className="text-lg font-semibold mb-1 truncate my-4 whitespace-nowrap overflow-hidden">{titreCours}</h3>
              <h3 className="  mb-1 truncate my-4 whitespace-nowrap overflow-hidden">{nomFormateur} {prenomFormateur}</h3>
             
              <p className="text-sm font-medium text-green-600">
                ${prixCours ? prixCours : '0'}
              </p>
              <div className="mt-2 flex gap-2">
                <span className="bg-gray-200 rounded-full px-2 py-1 text-xs font-medium text-gray-700">
                  #{categorieCours}
                </span>
                <span className="bg-gray-200 rounded-full px-2 py-1 text-xs font-medium text-gray-700">
                  #{sousCategorieCours}
                </span>
              </div>
            </div> 
            </Link>
            <div className="p-4 bg-gray-100">
  {userData.email && prixCours ? (
    <button className="text-white bg-blue-400 rounded p-1 hover:bg-blue-500 focus:outline-none focus:border-blue-600 focus:ring focus:ring-blue-100 active:bg-blue-600 text-xs w-full" onClick={handleAddPanierCours}>
      Ajouter au Panier
    </button>
  ) : (
    <Link to={`/Cours/${id}`} onClick={() => window.scrollTo({ top: "0", behavior: "smooth" })}>
      <button className="text-white bg-blue-400 rounded p-1 hover:bg-blue-500 focus:outline-none focus:border-blue-600 focus:ring focus:ring-blue-100 active:bg-blue-600 text-xs w-full">
        Consulter
      </button>
    </Link>
  )}
</div>



        </>) : (
        <div>
          <p>{loading}</p>
        </div>
      )

      }




    </div>
  )
}

export default CardType