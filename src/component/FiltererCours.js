import React, { useState } from 'react';
import { CgPlayListSearch } from 'react-icons/cg';

const FiltererCours = ({ categorieCours, isActive, onClick }) => {
  const handleClick = () => {
    onClick(categorieCours);
  };

  return (
    <div
      className={`flex flex-col items-center ${isActive ? 'text-cyan-800' : ''}`}
      onClick={handleClick}
    >
      <div
        className={`w-12 h-12 bg-cyan-800 flex items-center justify-center rounded-full cursor-pointer`}
      >
        <CgPlayListSearch className="text-2xl" />
      </div>
      <p className="text-center font-medium my-1 capitalize">{categorieCours}</p>
    </div>
  );
};

export default FiltererCours;
