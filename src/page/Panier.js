import React from 'react';
import { useSelector } from 'react-redux';
import CardPanier from '../component/CardPanier';
import panierVide from '../assetsLearning/paniervide2.gif'
import ScrollToTopOnPageChange from '../utlités/Actualiser';
import { Link } from 'react-router-dom';
const Panier = () => {
  const coursPanierItem = useSelector((state) => state.cours.panierItem);
  console.log(coursPanierItem);

  // Calculer le total du panier
  const totalPanier = coursPanierItem.reduce((total, item) => total + item.total, 0);

  return (
    <div className="min-h-screen bg-gray-100 py-6">
       <ScrollToTopOnPageChange />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Votre Panier Des Cours</h2>
        {coursPanierItem.length === 0 ? (
          <div className="flex w-full justify-center items-center flex-col">
            <p className='text-slate-500 text-3xl font-bold'>Votre panier est vide</p>
            {/*<p className="text-5xl">🛒</p>*/}
            <img src={panierVide} className='w-full max-w-sm rounded-full'/>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              {coursPanierItem.map((el) => (
                <CardPanier
                  key={el._id}
                  id={el._id}
                  titreCours={el.titreCours}
                  imageCours={el.imageCours}
                  categorieCours={el.categorieCours}
                  sousCategorieCours={el.sousCategorieCours}
                  prixCours={el.prixCours}
                  qty={el.qty}
                  total={el.total}
                />
              ))}
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-800">Total du panier</h3>
              <div className="mt-4">
                <p className="text-2xl font-bold text-green-600">${totalPanier.toFixed(2)}</p>
              </div>
              <div className="mt-6">
              <Link to="/PayerM" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full focus:outline-none focus:ring focus:ring-blue-200">
                  Payer
               </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Panier;
