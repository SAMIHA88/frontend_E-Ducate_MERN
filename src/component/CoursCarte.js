import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function CoursCarte({ imageCours, titreCours, nomFormateur, prixCours, categorieCours, sousCategorieCours, prenomFormateur, loading ,id}) {

  {/*const coursPanierItem=useSelector((state)=>state.cours.panierItem)
console.log(coursPanierItem)*/}
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out cursor-pointer w-64">
      {
        titreCours ? (<>
        <Link to={`/Cours/${id}`} onClick={()=>window.scrollTo({top:"0",behavior:"smooth"})}>
      
         <img src={imageCours} alt={titreCours} className="w-full h-24 object-cover rounded-t-lg" />
</Link>
          <div className="p-3">
            <h3 className="text-lg font-semibold mb-1 truncate">{titreCours}</h3>
            <p className="text-xs text-gray-700 mb-1">Par: {nomFormateur} {prenomFormateur} </p>
            <p className="text-sm font-medium text-green-600">
              ${prixCours ? prixCours : '0'}
            </p>
            <div className="mt-2">
              <span className="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs font-medium text-gray-700">
                #{categorieCours}
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs font-medium text-gray-700">
                #{sousCategorieCours}
              </span>
            </div>

          </div>

          <div className="p-3 flex justify-between items-center">
            
            <div className="text-xs">
              <i className="fas fa-star text-yellow-400">E-DUCATE</i>
            </div>
          </div>
        </>) : ((
          <div className="flex justify-center items-center space-x-2">
  <p className="text-2xl text-blue-600">Loading...</p>
  <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-blue-600"></div>
</div>
)
      )
      }
    </div>
  );
}

export default CoursCarte;
