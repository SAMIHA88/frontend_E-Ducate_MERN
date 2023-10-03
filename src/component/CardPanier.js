import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { supprimerPanierItems } from '../redux/coursSlice';
const CardPanier = ({ id, titreCours, imageCours, categorieCours, sousCategorieCours, prixCours, qty, total }) => {
    const dispatch=useDispatch()

    return (
    <div className='bg-slate-300 p-4 border mb-1 border-black rounded-lg shadow-md relative'>
      <button className='p-2 text-slate-600 cursor-pointer hover:text-red-600 focus:outline-none absolute top-2 right-2' onClick={()=>dispatch(supprimerPanierItems(id))}>
        <AiFillDelete className='w-4 h-4 ' />
      </button>
      <div className='flex flex-row items-center justify-between'>
        <div className='md:flex-shrink-0'>
          <img src={imageCours} alt={titreCours} className='h-36 w-48 object-cover rounded-lg' />
        </div>
        <div className='flex-1 ml-4'>
          <h2 className='text-2xl font-semibold text-gray-800'>{titreCours}</h2>
          <div className='flex flex-wrap mt-2'>
            <span className='inline-block px-2 py-1 mr-2 mb-2 bg-gray-200 rounded-lg text-sm text-gray-600'>
              {categorieCours}
            </span>
            <span className='inline-block px-2 py-1 mb-2 bg-gray-200 rounded-lg text-sm text-gray-600'>
              {sousCategorieCours}
            </span>
          </div>
          <p className='text-xl font-bold text-green-600 mt-2'>{prixCours} $</p>
        </div>
      </div>
      <div className='mt-4 flex justify-between items-center'>
        <div className='flex items-center space-x-2'></div>
        <div className='flex items-center space-x-2'>
          <p className='text-gray-700'>Total:</p>
          <p className='font-semibold text-green-600'>{total} $</p>
        </div>
      </div>
    </div>
  );
};

export default CardPanier;
