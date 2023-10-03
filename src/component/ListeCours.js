import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import FiltererCours from './FiltererCours'
import CardType from './CardType'
import { BsSearch } from 'react-icons/bs'
import { FaGlobe } from 'react-icons/fa'

const ListeCours = (heading) => {
  const coursData = useSelector((state) => state.cours.coursList)
  console.log(coursData)
  const [activeCategory, setActiveCategory] = useState(null);
  const [datatFilter, setDataFilter] = useState([])
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLangue, setSelectedLangue] = useState(''); // État de la langue sélectionnée

  useEffect(() => {
    setDataFilter(coursData);
  }, [coursData]);

  useEffect(() => {
    // Filtrer les cours en fonction du terme de recherche
    const searchLower = searchTerm.toLowerCase();
    const filteredCours = coursData.filter((el) => {
      return (
        (searchTerm === '' || // Si aucun terme de recherche n'est spécifié (ou)
          (el.titreCours.toLowerCase().includes(searchLower) ||
            el.sousCategorieCours.toLowerCase().includes(searchLower) ||
            el.nomFormateur.toLowerCase().includes(searchLower) ||
            el.prenomFormateur.toLowerCase().includes(searchLower))) &&
        (!selectedLangue || el.langueCours.toLowerCase() === selectedLangue.toLowerCase()) // Et soit aucune langue n'est sélectionnée, soit la langueCours correspond à la langue sélectionnée
      );
    });
    setDataFilter(filteredCours);
    setActiveCategory(null); // Réinitialise la catégorie active
  }, [searchTerm, selectedLangue, coursData]);


  const handleFilterCours = (categorieCours) => {
    const filter = coursData.filter(el => el.categorieCours.toLowerCase() === categorieCours.toLowerCase())
    setDataFilter(() => {
      return [
        ...filter
      ]
    })
  }
  const categorieListe = [...new Set(coursData.map(el => el.categorieCours))]
  console.log(categorieListe)
  // Réinitialisez l'état à la liste complète (ou à toute autre valeur par défaut)
  const resetFilter = () => {
    setDataFilter(coursData);
  };
  const handleLangueChange = (e) => {
    setSelectedLangue(e.target.value);
  };

  const loadingArrayFeature = new Array(10).fill(null)
  return (
    
    <div> <div>
      

      <div className='my-5'>
        <div className='flex gap-4 mt-4 justify-center  overflow-scroll scrollbar-none'>
          <FiltererCours categorieCours="Tous" onClick={resetFilter} />
          {categorieListe[0] ? categorieListe.map(el => {
            return (
              <FiltererCours categorieCours={el} onClick={() => handleFilterCours(el)} />
            )
          }) :
            <div className="flex justify-center items-center space-x-2">
              <p className="text-2xl text-blue-600">Loading..</p>
              <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-blue-600"></div>
            </div>
          }
        </div>

        <div className="flex justify-center mt-4">

          <div className="pt-2 relative mx-auto text-gray-600">
            <input
              className="rounded-full py-1 pl-8 pr-16 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 bg-white h-10 px-5 pr-16 text-sm focus:outline-none"
              type="search"
              name="search"
              placeholder="Recherche E-Ducate..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <BsSearch className="absolute inset-y-0 left-2 top-5 text-gray-500" />
            <button type="submit" className="absolute right-0 top-0 mt-5 mr-4"></button>
            <div className="flex items-center relative">
  <select
    value={selectedLangue}
    onChange={handleLangueChange}
    className="border border-black mt-5 ml-10 bg-black text-white focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-full py-1 px-2 text-gray-700 pr-8" // Ajoutez la classe pr-8 pour la marge à droite
  >
    <option value="">Langue</option>
    <option value="anglais">Anglais</option>
    <option value="français">Français</option>
    <option value="autre">Autre</option>
  </select>
  <span className="absolute ml-28 mt-9 transform -translate-y-1/2 text-white"><FaGlobe /></span>
</div>
          </div>

        </div>


        <div className='flex flex-wrap justify-center'>
          {
            datatFilter[0] ? datatFilter.map(el => {
              return (
                <CardType
                  key={el._id}
                  id={el._id}
                  categorieCours={el.categorieCours}
                  imageCours={el.imageCours}
                  titreCours={el.titreCours}
                  prixCours={el.prixCours}
                  sousCategorieCours={el.sousCategorieCours}
                  nomFormateur={el.nomFormateur}
                  prenomFormateur={el.prenomFormateur}
                />
              )
            }) :

              loadingArrayFeature.map((el, index) => (
                <CardType
                  key={index}
                  loading={<div className="flex justify-center items-center space-x-2">
                    <p className="text-2xl text-blue-600">Loading...</p>
                    <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-blue-600"></div>
                  </div>} />
              ))
          }
        </div>
      </div>
    </div>

    </div>
  )
}

export default ListeCours