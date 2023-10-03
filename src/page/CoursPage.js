import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ScrollToTopOnPageChange from '../utlités/Actualiser';
import ListeCours from '../component/ListeCours';
import { ajouterPanierItems } from '../redux/coursSlice';
import { BsSaveFill } from 'react-icons/bs';
import { MdOutlineSaveAlt } from 'react-icons/md';
import jsPDF from 'jspdf';
import logo from "../assetsLearning/logo.png";

const CoursPage = () => {
  const { filterby } = useParams();
  const coursData = useSelector((state) => state.cours.coursList);
  const coursDisplay = coursData.filter((el) => el._id === filterby)[0];
  const dispatch = useDispatch()
  const userData = useSelector((state) => state.user)

  const handleAddPanierCours = (e) => {
    e.stopPropagation();
    dispatch(ajouterPanierItems(coursDisplay))
  }


  const generateCertificate = () => {
    if (coursDisplay) {
      const doc = new jsPDF();

      // Définir une couleur de fond
      doc.setFillColor(255, 255, 255);
      doc.rect(0, 0, 210, 297, 'F');

      // Définir une couleur de texte
      doc.setTextColor(0, 0, 0);

      // Ajouter un logo
      const logoImage = new Image();
      logoImage.src = logo;
      doc.addImage(logoImage, 'PNG', 10, 10, 50, 50); // Position et dimensions du logo

      // Ajouter du texte personnalisé avec des styles
      doc.setFontSize(18);
      doc.text('Certificat de Réussite', 105, 30, { align: 'center' });

      doc.setFontSize(14);
      doc.text(`Décerné à ${userData.nom}`, 105, 50, { align: 'center' });
      doc.text(`Pour avoir complété avec succès le cours :`, 105, 70, { align: 'center' });
      doc.text(`${coursDisplay.titreCours}`, 105, 90, { align: 'center' });
      doc.text(`Catégorie : ${coursDisplay.categorieCours}`, 105, 110, { align: 'center' });
      doc.text(`Sous-catégorie : ${coursDisplay.sousCategorieCours}`, 105, 130, { align: 'center' });
      doc.text(`Formateur : ${coursDisplay.nomFormateur} ${coursDisplay.prenomFormateur}`, 105, 150, { align: 'center' });
      doc.text(`Date de délivrance : ${new Date().toLocaleDateString()}`, 105, 170, { align: 'center' });

      // Enregistrer le PDF et déclencher le téléchargement
      doc.save('certificat.pdf');
    }
  };







  const renderModules = () => {
    if (coursDisplay) {
      return (
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mt-4">Modules:</h3>
          <ul className="mt-2 space-y-4">
            {coursDisplay.fichiersCours.map((pdf, index) => (
              <li key={index} className="border border-gray-200 p-4 rounded-lg">
                <h4 className="text-xl font-semibold text-gray-800">
                  Module {index + 1}:
                  <a
                    href={`http://localhost:8080/${pdf}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700 hover:underline flex items-center"
                  >
                    <MdOutlineSaveAlt className="mr-1" /> Télécharger PDF
                  </a>
                </h4>

              </li>
            ))}
            {coursDisplay.videosCours.map((video, index) => (
              <li key={index} className="border border-gray-200 p-4 rounded-lg">
                <h4 className="text-xl font-semibold text-gray-800">
                  Module {coursDisplay.fichiersCours.length + index + 1}:
                </h4>

                <a
                  href={`http://localhost:8080/${video}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 text-xl font-semibold  hover:text-blue-700 hover:underline flex items-center"
                >
                  <MdOutlineSaveAlt className="mr-1" /> Télécharger Vidéo
                </a>
                <div className="mt-4">
                  <video width="80%" height="auto" controls>
                    <source src={`http://localhost:8080/${video}`} type="video/mp4" />
                    Votre navigateur ne prend pas en charge la lecture de cette vidéo.
                  </video>
                </div>
              </li>
            ))}
          </ul>
        </div>

      );
    }
    return null;
  };

  return (
    <div className="min-w-screen min-h-screen bg-gray-100 py-5">
      <ScrollToTopOnPageChange />
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-900 mt-5">Détails du cours</h1>

        {coursDisplay ?
          <div className="min-w-screen min-h-screen bg-gray-100 py-5">
            <ScrollToTopOnPageChange />
            <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
              <h1 className="text-3xl font-bold text-gray-900 mt-5 text-center">{coursDisplay.titreCours}</h1>
              <p className="mt-2 text-sm text-gray-600 flex flex-row">Par: <h3 className='font-bold'>{coursDisplay.nomFormateur} {coursDisplay.prenomFormateur}</h3></p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img src={coursDisplay.imageCours} alt="Course" className="w-full object-cover h-60" />
                </div>
                <div className="p-6 bg-white">
                  <p className="text-base font-semibold text-gray-700 mt-4">{`Ce cours est un cours ${coursDisplay.typeCours}`}</p>
                  <p className="text-base text-green-600 font-bold">{coursDisplay.prixCours ? `${coursDisplay.prixCours}$` : '0$'}</p>

                  <div className="bg-gray-300 p-4 rounded-lg mt-4">
                    <h2 className='text-blue-500 text-lg font-bold'>Description:</h2>
                    <p className="text-sm text-gray-800">{coursDisplay.descriptionCours}</p>
                  </div>


                </div>
              </div>

              {!coursDisplay.prixCours ? (
                <div className="bg-white rounded-lg shadow-lg p-6 mt-8">
                  <div className="bg-gray-200 p-4 rounded-lg mt-4">
                    <div className="text-sm">

                      <div className='flex flex-col'>
                        <div className='flex items-start'>
                          <h2 className='text-blue-500 text-xl font-bold'>Catégorie:</h2>
                          <p className="text-lg text-gray-800 ml-2"> {coursDisplay.categorieCours}</p>
                        </div>
                        <div className='flex items-start mt-2'>
                          <h2 className='text-blue-500 text-xl font-bold'>Sous-Catégorie:</h2>
                          <p className="text-lg text-gray-800 ml-2"> {coursDisplay.sousCategorieCours}</p>
                        </div>
                        <div className='flex items-start mt-2'>
                          <h2 className='text-blue-500 text-xl font-bold'>Langue:</h2>
                          <p className="text-lg text-gray-800 ml-2"> {coursDisplay.langueCours}</p>
                        </div>
                        <button
                          className="bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600 focus:outline-none focus:border-green-700 focus:ring focus:ring-green-200 active:bg-green-700"
                          onClick={generateCertificate}
                          disabled={!userData.email} // Désactiver le bouton si userData.email n'existe pas
                        >
                          Télécharger certificat
                        </button>
                      </div>

                    </div>
                  </div>

                  <div className="mt-6">
                    {renderModules()}
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center mt-8">
                  {userData.email ? (
                    <button
                      className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200 active:bg-blue-700"
                      onClick={handleAddPanierCours}
                    >
                      Ajouter au Panier
                    </button>
                  ) : (
                    <button
                      className="bg-blue-500 text-white py-2 px-4 rounded-full cursor-not-allowed opacity-50"
                      disabled
                    >
                      Ajouter au Panier - Vous êtes déconnecté -
                    </button>
                  )}
                </div>
              )}
            </div>

          </div> : (
            <div className="flex justify-center items-center space-x-2">
              <p className="text-2xl text-blue-600">Loading...</p>
              <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-blue-600"></div>
            </div>
          )}
      </div>
      <h2 className='text-xl font-bold text-gray-900 mt-6 text-center '> D'autres Cours:</h2>
      <ListeCours heading={"D'autres Cours"} />
    </div>
  );
};

export default CoursPage;
