import React from "react";
import logo from "../assetsLearning/logoblanc.png";
import { Link } from "react-router-dom";
import { SiIbm, SiVolkswagen, SiOracle } from "react-icons/si";
import { AiOutlineDropbox } from "react-icons/ai"
import { RiVisaFill } from "react-icons/ri"
//import logo from '../assetsLearning/bc.png'
const Footer = () => {
  return (
    <div >
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=DynaPuff&family=Goldman:wght@400;700&family=Lugrasimo&family=Lumanosimo&family=Pangolin&family=Rubik+Pixels&family=Titillium+Web:wght@700&display=swap" rel="stylesheet" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=DynaPuff&family=Goldman:wght@400;700&family=Lumanosimo&family=Rubik+Pixels&family=Titillium+Web:wght@700&display=swap" rel="stylesheet" />
      <style>
        {`
        .font-goldman {
          font-family: 'Goldman', sans-serif;
        }
        .font-lugrasimo{
            font-family: 'DynaPuff', cursive;
font-family: 'Goldman', cursive;
font-family: 'Lugrasimo', cursive;
font-family: 'Lumanosimo', cursive;
font-family: 'Pangolin', cursive;
font-family: 'Rubik Pixels', cursive;
font-family: 'Titillium Web', sans-serif;
        }
        `}
      </style>
      <footer class="bg-white dark:bg-gray-900">
        <div class="container mx-auto px-6 py-12">
          <div class="md:-mx-3 md:flex md:items-center md:justify-between">
            <h1 class="text-3xl font-semibold font-lugrasimo tracking-tight text-gray-800 dark:text-white md:mx-3 xl:text-2xl ">Les meilleures entreprises choisissent E-Ducate pour développer <br />les compétences professionnelles dont elles ont besoin.</h1>

            <div class="mt-6 shrink-0 md:mx-3 md:mt-0 md:w-auto text-gray-800 dark:text-white xl:text-4xl ">
              <SiIbm class="inline-block mr-4  text-5xl" />
              <SiVolkswagen class="inline-block mr-4  text-3xl" />
              <AiOutlineDropbox class="inline-block mr-4  text-3xl" />
              <SiOracle class="inline-block mr-4  text-3xl" />
              <RiVisaFill class="inline-block mr-4  text-3xl" />
            </div>
          </div>

          <hr class="my-6 border-gray-200 dark:border-gray-700 md:my-10" />

          <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">


            <div >
              <p class="font-semibold text-gray-800 dark:text-white">Services</p>

              <div class="mt-5 flex flex-col items-start space-y-2">
                <a href="../Authentification" class="text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400">E-Ducate Business</a>
                <a href="../Enseigner" class="text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400">Enseigner sur E-Ducate</a>
                <a href="../About" class="text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400">À propos d'E-Ducate</a>
              </div>
            </div>

            <div>
              <p class="font-semibold text-gray-800 dark:text-white">Contactez-nous</p>

              <div class="mt-5 flex flex-col items-start space-y-2">
                <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300">
                  <a href="tel:+2127687683768">+212 768 768 3768</a>
                </p>
                <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300">
                  <a href="mailto:e-ducate@gatech.com">e-ducate@gatech.com</a>
                </p></div>
            </div>
          </div>

          <hr class="my-6 border-gray-200 dark:border-gray-700 md:my-10" />

          <div class="flex flex-col items-center justify-between sm:flex-row">
            <div className="flex items-center h-full justify-between">
              <Link to={""}>
                <div className="h-12">
                  <img src={logo} className="h-full" alt="Logo" />
                </div>
              </Link>
            </div>
            <p class="mt-2 text-sm text-gray-500 dark:text-gray-300 sm:mt-0">©2023 E-Ducate,Inc.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
