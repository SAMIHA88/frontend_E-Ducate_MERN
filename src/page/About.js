import React from 'react'

import zakaria from "../assetsLearning/zakaria.png";

import samiha from "../assetsLearning/samiha.jpeg";
import ScrollToTopOnPageChange from '../utlités/Actualiser';
import { Link } from 'react-router-dom';
const Enseigner = () => {
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
        `}
            </style>





            <div class="container mx-auto px-6 py-16 pt-28 text-center ">
                <div class="mx-auto max-w-lg">
                    <h1 class="text-3xl font-bold text-gray-800  md:text-4xl font-goldman">Améliorer des vies grâce à l'apprentissage</h1>

                    <p class="mt-6 text-gray-500 ">La première place de marché internationale pour l'apprentissage et la formation</p>

                    <div class="mx-auto mt-6 w-full max-w-sm rounded-md border bg-transparent focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300 focus-within:ring-opacity-40 dark:border-gray-700 dark:focus-within:border-blue-300">

                    </div>
                </div>

                <p class="font-pangolin text-2xl "> En mettant en relation des participants du monde entier avec les meilleurs formateurs, <strong>E-Ducate</strong> aide les personnes à atteindre leurs objectifs et à réaliser leurs rêves.</p>

            </div>

            <section class="bg-white dark:bg-gray-900">
                <div class="container mx-auto px-6 pt-28">
                    <h1 class="text-2xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Quelques cours proposés</h1>

                    <div class="mt-8 lg:-mx-12 lg:flex xl:mt-16">
                        <div class="lg:mx-12">

                        </div>

                        <div class="mt-8 flex-1 lg:mx-12 lg:mt-0">
                            <div class="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
                                <div>
                                    <img class="h-96 w-full rounded-lg object-cover" src="https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80" alt="" />
                                    <h2 class="mt-4 text-2xl font-semibold capitalize text-gray-800 dark:text-white">Réalisation des sites Web </h2>
                                    <p class="mt-2 text-lg uppercase tracking-wider text-blue-500 dark:text-blue-400">Laravel</p>
                                </div>

                                <div>
                                    <img class="h-96 w-full rounded-lg object-cover" src="https://images.unsplash.com/photo-1621609764180-2ca554a9d6f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />
                                    <h2 class="mt-4 text-2xl font-semibold capitalize text-gray-800 dark:text-white">Réalisation des applications mobiles</h2>
                                    <p class="mt-2 text-lg uppercase tracking-wider text-blue-500 dark:text-blue-400">Flutter</p>
                                </div>

                                <div>
                                    <img class="h-96 w-full rounded-lg object-cover" src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
                                    <h2 class="mt-4 text-2xl font-semibold capitalize text-gray-800 dark:text-white">Réalisation des Mockups</h2>
                                    <p class="mt-2 text-lg uppercase tracking-wider text-blue-500 dark:text-blue-400">Mockups</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="bg-white dark:bg-gray-900">

                <div class="container mx-auto px-6 pt-28">
                    <h1 class="text-3xl font-semibold capitalize text-gray-800 dark:text-white lg:text-4xl">Notre équipe</h1>

                    <p class="my-6 max-w-2xl text-gray-500 dark:text-gray-300">Notre plateforme E-Ducate est réalisé par une équipe dynamique et innovante.</p>
                    <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-16 xl:grid-cols-4">
                        <div class="group flex transform cursor-pointer flex-col items-center rounded-xl p-8 transition-colors duration-300 hover:bg-blue-600 my-auto">
                            <img class="h-32 w-32 rounded-full object-cover ring-4 ring-gray-300" src={zakaria} alt="" />

                            <h1 class="mt-4 text-2xl font-semibold capitalize text-gray-700 group-hover:text-white dark:text-white">Amellal Zakaria</h1>

                            <p class="mt-2 capitalize text-gray-500 group-hover:text-gray-300 dark:text-gray-300">Software engeneer</p>

                            <div class="-mx-2 mt-3 flex">
                                <a href="#" class="mx-2 text-gray-600 hover:text-gray-500 group-hover:text-white dark:text-gray-300 dark:hover:text-gray-300" aria-label="Reddit">
                                    <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM6.807 10.543C6.20862 10.5433 5.67102 10.9088 5.45054 11.465C5.23006 12.0213 5.37133 12.6558 5.807 13.066C5.92217 13.1751 6.05463 13.2643 6.199 13.33C6.18644 13.4761 6.18644 13.6229 6.199 13.769C6.199 16.009 8.814 17.831 12.028 17.831C15.242 17.831 17.858 16.009 17.858 13.769C17.8696 13.6229 17.8696 13.4761 17.858 13.33C18.4649 13.0351 18.786 12.3585 18.6305 11.7019C18.475 11.0453 17.8847 10.5844 17.21 10.593H17.157C16.7988 10.6062 16.458 10.7512 16.2 11C15.0625 10.2265 13.7252 9.79927 12.35 9.77L13 6.65L15.138 7.1C15.1931 7.60706 15.621 7.99141 16.131 7.992C16.1674 7.99196 16.2038 7.98995 16.24 7.986C16.7702 7.93278 17.1655 7.47314 17.1389 6.94094C17.1122 6.40873 16.6729 5.991 16.14 5.991C16.1022 5.99191 16.0645 5.99491 16.027 6C15.71 6.03367 15.4281 6.21641 15.268 6.492L12.82 6C12.7983 5.99535 12.7762 5.993 12.754 5.993C12.6094 5.99472 12.4851 6.09583 12.454 6.237L11.706 9.71C10.3138 9.7297 8.95795 10.157 7.806 10.939C7.53601 10.6839 7.17843 10.5422 6.807 10.543ZM12.18 16.524C12.124 16.524 12.067 16.524 12.011 16.524C11.955 16.524 11.898 16.524 11.842 16.524C11.0121 16.5208 10.2054 16.2497 9.542 15.751C9.49626 15.6958 9.47445 15.6246 9.4814 15.5533C9.48834 15.482 9.52348 15.4163 9.579 15.371C9.62737 15.3318 9.68771 15.3102 9.75 15.31C9.81233 15.31 9.87275 15.3315 9.921 15.371C10.4816 15.7818 11.159 16.0022 11.854 16C11.9027 16 11.9513 16 12 16C12.059 16 12.119 16 12.178 16C12.864 16.0011 13.5329 15.7863 14.09 15.386C14.1427 15.3322 14.2147 15.302 14.29 15.302C14.3653 15.302 14.4373 15.3322 14.49 15.386C14.5985 15.4981 14.5962 15.6767 14.485 15.786V15.746C13.8213 16.2481 13.0123 16.5208 12.18 16.523V16.524ZM14.307 14.08H14.291L14.299 14.041C13.8591 14.011 13.4994 13.6789 13.4343 13.2429C13.3691 12.8068 13.6162 12.3842 14.028 12.2269C14.4399 12.0697 14.9058 12.2202 15.1478 12.5887C15.3899 12.9572 15.3429 13.4445 15.035 13.76C14.856 13.9554 14.6059 14.0707 14.341 14.08H14.306H14.307ZM9.67 14C9.11772 14 8.67 13.5523 8.67 13C8.67 12.4477 9.11772 12 9.67 12C10.2223 12 10.67 12.4477 10.67 13C10.67 13.5523 10.2223 14 9.67 14Z"></path>
                                    </svg>
                                </a>

                                <a href="#" class="mx-2 text-gray-600 hover:text-gray-500 group-hover:text-white dark:text-gray-300 dark:hover:text-gray-300" aria-label="Facebook">
                                    <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z"></path>
                                    </svg>
                                </a>

                                <a href="#" class="mx-2 text-gray-600 hover:text-gray-500 group-hover:text-white dark:text-gray-300 dark:hover:text-gray-300" aria-label="Github">
                                    <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"></path>
                                    </svg>
                                </a>
                            </div>

                        </div>

                        <div class="group flex transform cursor-pointer flex-col items-center rounded-xl p-8 transition-colors duration-300 hover:bg-blue-600">
                            <img class="h-32 w-32 rounded-full object-cover ring-4 ring-gray-300" src={samiha} alt="" />

                            <h1 class="mt-4 text-2xl font-semibold capitalize text-gray-700 group-hover:text-white dark:text-white">Elhajjam Samiha</h1>

                            <p class="mt-2 capitalize text-gray-500 group-hover:text-gray-300 dark:text-gray-300">Fullstack Developer</p>

                            <div class="-mx-2 mt-3 flex">
                                <a href="#" class="mx-2 text-gray-600 hover:text-gray-500 group-hover:text-white dark:text-gray-300 dark:hover:text-gray-300" aria-label="Reddit">
                                    <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM6.807 10.543C6.20862 10.5433 5.67102 10.9088 5.45054 11.465C5.23006 12.0213 5.37133 12.6558 5.807 13.066C5.92217 13.1751 6.05463 13.2643 6.199 13.33C6.18644 13.4761 6.18644 13.6229 6.199 13.769C6.199 16.009 8.814 17.831 12.028 17.831C15.242 17.831 17.858 16.009 17.858 13.769C17.8696 13.6229 17.8696 13.4761 17.858 13.33C18.4649 13.0351 18.786 12.3585 18.6305 11.7019C18.475 11.0453 17.8847 10.5844 17.21 10.593H17.157C16.7988 10.6062 16.458 10.7512 16.2 11C15.0625 10.2265 13.7252 9.79927 12.35 9.77L13 6.65L15.138 7.1C15.1931 7.60706 15.621 7.99141 16.131 7.992C16.1674 7.99196 16.2038 7.98995 16.24 7.986C16.7702 7.93278 17.1655 7.47314 17.1389 6.94094C17.1122 6.40873 16.6729 5.991 16.14 5.991C16.1022 5.99191 16.0645 5.99491 16.027 6C15.71 6.03367 15.4281 6.21641 15.268 6.492L12.82 6C12.7983 5.99535 12.7762 5.993 12.754 5.993C12.6094 5.99472 12.4851 6.09583 12.454 6.237L11.706 9.71C10.3138 9.7297 8.95795 10.157 7.806 10.939C7.53601 10.6839 7.17843 10.5422 6.807 10.543ZM12.18 16.524C12.124 16.524 12.067 16.524 12.011 16.524C11.955 16.524 11.898 16.524 11.842 16.524C11.0121 16.5208 10.2054 16.2497 9.542 15.751C9.49626 15.6958 9.47445 15.6246 9.4814 15.5533C9.48834 15.482 9.52348 15.4163 9.579 15.371C9.62737 15.3318 9.68771 15.3102 9.75 15.31C9.81233 15.31 9.87275 15.3315 9.921 15.371C10.4816 15.7818 11.159 16.0022 11.854 16C11.9027 16 11.9513 16 12 16C12.059 16 12.119 16 12.178 16C12.864 16.0011 13.5329 15.7863 14.09 15.386C14.1427 15.3322 14.2147 15.302 14.29 15.302C14.3653 15.302 14.4373 15.3322 14.49 15.386C14.5985 15.4981 14.5962 15.6767 14.485 15.786V15.746C13.8213 16.2481 13.0123 16.5208 12.18 16.523V16.524ZM14.307 14.08H14.291L14.299 14.041C13.8591 14.011 13.4994 13.6789 13.4343 13.2429C13.3691 12.8068 13.6162 12.3842 14.028 12.2269C14.4399 12.0697 14.9058 12.2202 15.1478 12.5887C15.3899 12.9572 15.3429 13.4445 15.035 13.76C14.856 13.9554 14.6059 14.0707 14.341 14.08H14.306H14.307ZM9.67 14C9.11772 14 8.67 13.5523 8.67 13C8.67 12.4477 9.11772 12 9.67 12C10.2223 12 10.67 12.4477 10.67 13C10.67 13.5523 10.2223 14 9.67 14Z"></path>
                                    </svg>
                                </a>

                                <a href="#" class="mx-2 text-gray-600 hover:text-gray-500 group-hover:text-white dark:text-gray-300 dark:hover:text-gray-300" aria-label="Facebook">
                                    <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z"></path>
                                    </svg>
                                </a>

                                <a href="#" class="mx-2 text-gray-600 hover:text-gray-500 group-hover:text-white dark:text-gray-300 dark:hover:text-gray-300" aria-label="Github">
                                    <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="bg-white dark:bg-gray-900">
                <div class="container mx-auto px-6 pt-28">
                    <div class="mt-6 md:flex md:items-center md:justify-between">
                        <div>
                            <h1 class="text-3xl font-semibold capitalize text-gray-800 dark:text-white lg:text-4xl">Qui sommes nous?</h1>

                            <div class="mx-auto mt-6 flex">
                                <span class="inline-block h-1 w-40 rounded-full bg-blue-500"></span>
                                <span class="mx-1 inline-block h-1 w-3 rounded-full bg-blue-500"></span>
                                <span class="inline-block h-1 w-1 rounded-full bg-blue-500"></span>
                            </div>
                        </div>

                        <div class="mt-8 flex justify-between md:mt-0">
                            <button title="left arrow" class="mx-3 rounded-full border p-2 text-gray-800 transition-colors duration-300 hover:bg-gray-100 rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            <button title="right arrow" class="rounded-full border p-2 text-gray-800 transition-colors duration-300 hover:bg-gray-100 rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <section class="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 xl:mt-12 xl:grid-cols-3">

                        <div class="rounded-lg border p-8 dark:border-gray-700">
                            <div class="mx-2">
                                <h1 class="font-semibold text-gray-800 dark:text-white">Nos formateurs</h1>
                            </div>
                            <p class="leading-loose text-gray-500 dark:text-gray-400">“Les formateurs E-Ducate sont désireux de partager leurs connaissances et d’aider les participants. Ce sont des experts dans leur domaine qui restent impliqués afin de fournir le contenu le plus à jour.”.</p>

                            <div class="-mx-2 mt-8 flex items-center">


                            </div>
                        </div>
                        <div class="rounded-lg border p-8 dark:border-gray-700">
                            <div class="mx-2">
                                <h1 class="font-semibold text-gray-800 dark:text-white">Nos origines</h1>
                            </div>
                            <p class="leading-loose text-gray-500 dark:text-gray-400">“Les formateurs E-Ducate sont désireux de partager leurs connaissances et d’aider les participants. Ce sont des experts dans leur domaine qui restent impliqués afin de fournir le contenu le plus à jour.”.</p>

                            <div class="-mx-2 mt-8 flex items-center">


                            </div>
                        </div>



                        <div class="rounded-lg border p-8 dark:border-gray-700">
                            <div class="mx-2">
                                <h1 class="font-semibold text-gray-800 dark:text-white"> Notre place de marché  </h1>
                            </div>
                            <p class="leading-loose text-gray-500 dark:text-gray-400">“Chez E-Ducate, nous pensons que les meilleurs enseignants du monde ne se trouvent pas toujours dans les salles de classe. Nos formateurs viennent de presque tous les pays et proposent des cours dans plus de 65 langues sur quasiment tous les thèmes.
                                .”</p>

                            <div class="-mx-2 mt-8 flex items-center">
                            </div>
                        </div>


                    </section>
                </div>
            </section>



            <div class="bg-white dark:bg-gray-900">
                <div class="container mx-auto px-6 pt-28">
                    <div class="xl:-mx-8 xl:flex xl:items-center">
                        <div class="flex flex-col items-center xl:mx-8 xl:items-start">
                            <h1 class="text-3xl font-medium capitalize text-gray-800 dark:text-white lg:text-4xl">Plan de tarification</h1>

                            <div class="mt-4">
                                <span class="inline-block h-1 w-40 rounded-full bg-blue-500"></span>
                                <span class="mx-1 inline-block h-1 w-3 rounded-full bg-blue-500"></span>
                                <span class="inline-block h-1 w-1 rounded-full bg-blue-500"></span>
                            </div>

                            <p class="mt-4 font-medium text-gray-500 dark:text-gray-300">Vous pouvez bénéficier de l'accès intégral en sélectionnant votre plan !</p>

                            <a href="#" class="-mx-1 mt-4 flex items-center text-sm capitalize text-gray-700 hover:text-blue-600 hover:underline dark:text-blue-400 dark:hover:text-blue-500">
                                <span class="mx-1">Savoir plus</span>
                                <svg class="mx-1 h-4 w-4 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </a>
                        </div>

                        <div class="flex-1 xl:mx-8">
                            <div class="mt-8 space-y-8 md:-mx-4 md:flex md:items-center md:justify-center md:space-y-0 xl:mt-0">
                                <div class="mx-auto max-w-sm rounded-lg border dark:border-gray-700 md:mx-4">
                                    <div class="p-6">
                                        <h1 class="text-xl font-medium capitalize text-gray-700 dark:text-white lg:text-3xl">Essential</h1>


                                        <h2 class="mt-4 text-2xl font-medium text-gray-700 dark:text-gray-300 sm:text-4xl">$3.00 <span class="text-base font-medium">/Mois</span></h2>

                                        <p class="mt-1 text-gray-500 dark:text-gray-300">Paiement mensuel</p>

                                        <button
                                            className="mt-6 w-full transform rounded-md bg-blue-600 px-4 py-2 capitalize tracking-wide text-white transition-colors duration-300 hover:bg-blue-500 focus:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
                                            onClick={() => {
                                                window.location.href = '../PayerM';
                                            }}
                                        >
                                            Commencer
                                        </button>
                                        </div>

                                    <hr class="border-gray-200 dark:border-gray-700" />

                                    <div class="p-6">
                                        <h1 class="text-lg font-medium capitalize text-gray-700 dark:text-white lg:text-xl">Ce qui est inclus:</h1>

                                        <div class="mt-8 space-y-4">
                                            <div class="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                                </svg>

                                                <span class="mx-4 text-gray-700 dark:text-gray-300">Tous les liens illimités</span>
                                            </div>



                                            <div class="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                                </svg>

                                                <span class="mx-4 text-gray-700 dark:text-gray-300">Téléchargement des cours</span>
                                            </div>

                                            <div class="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                                </svg>

                                                <span class="mx-4 text-gray-700 dark:text-gray-300">Optimizer les annonces</span>
                                            </div>

                                            <div class="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clip-rule="evenodd" />
                                                </svg>

                                                <span class="mx-4 text-gray-700 dark:text-gray-300">Application mobile</span>
                                            </div>

                                            <div class="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clip-rule="evenodd" />
                                                </svg>

                                                <span class="mx-4 text-gray-700 dark:text-gray-300">Utilisateurs illimités</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="mx-auto max-w-sm rounded-lg border dark:border-gray-700 md:mx-4">
                                    <div class="p-6">
                                        <h1 class="text-xl font-medium capitalize text-gray-700 dark:text-white lg:text-3xl">Premium</h1>


                                        <h2 class="mt-4 text-2xl font-medium text-gray-700 dark:text-gray-300 sm:text-4xl">$20.00 <span class="text-base font-medium">/An</span></h2>

                                        <p class="mt-1 text-gray-500 dark:text-gray-300">Paiement annuel</p>

                                        <button
                                            className="mt-6 w-full transform rounded-md bg-blue-600 px-4 py-2 capitalize tracking-wide text-white transition-colors duration-300 hover:bg-blue-500 focus:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
                                            onClick={() => {
                                                window.location.href = '../PayerA';
                                            }}
                                        >
                                            Commencer
                                        </button>
                                    </div>

                                    <hr class="border-gray-200 dark:border-gray-700" />

                                    <div class="p-6">
                                        <h1 class="text-lg font-medium capitalize text-gray-700 dark:text-white lg:text-xl">Ce qui est inclus:</h1>

                                        <div class="mt-8 space-y-4">
                                            <div class="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                                </svg>

                                                <span class="mx-4 text-gray-700 dark:text-gray-300">Tous les liens limités</span>
                                            </div>



                                            <div class="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                                </svg>

                                                <span class="mx-4 text-gray-700 dark:text-gray-300">Téléchargement des cours</span>
                                            </div>

                                            <div class="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                                </svg>

                                                <span class="mx-4 text-gray-700 dark:text-gray-300">Optimizer les annonces</span>
                                            </div>

                                            <div class="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                                </svg>

                                                <span class="mx-4 text-gray-700 dark:text-gray-300">Application mobile</span>
                                            </div>

                                            <div class="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                                </svg>
                                                <span class="mx-4 text-gray-700 dark:text-gray-300">Utilisateurs illimités</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section class="bg-white dark:bg-gray-900">
                <div class="container mx-auto px-6 py-28">
                    <h1 class="text-2xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Questions fréquemment posées.</h1>

                    <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:mt-16 xl:grid-cols-3">
                        <div>
                            <div class="inline-block rounded-lg bg-blue-600 p-3 text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>

                            <div>
                                <h1 class="text-xl font-semibold text-gray-700 dark:text-white">Qu'est-ce que ce site de e-learning propose ?</h1>

                                <p class="mt-2 text-sm text-gray-500 dark:text-gray-300">Notre site E-Ducate propose une vaste gamme de cours en ligne dans différents domaines, tels que la technologie, les langues, les arts, les sciences, le développement personnel, etc. Vous trouverez des cours pour tous les niveaux, des débutants aux avancés.</p>
                            </div>
                        </div>

                        <div>
                            <div class="inline-block rounded-lg bg-blue-600 p-3 text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>

                            <div>
                                <h1 class="text-xl font-semibold text-gray-700 dark:text-white">Les cours sont-ils gratuits?</h1>

                                <p class="mt-2 text-sm text-gray-500 dark:text-gray-300">Nous proposons à la fois des cours gratuits et des cours payants sur notre plateforme. Certains cours sont accessibles sans frais, tandis que d'autres nécessitent un paiement pour un accès complet au contenu.</p>
                            </div>
                        </div>

                        <div>
                            <div class="inline-block rounded-lg bg-blue-600 p-3 text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>

                            <div>
                                <h1 class="text-xl font-semibold text-gray-700 dark:text-white">Les cours proposent-ils des certifications ?</h1>

                                <p class="mt-2 text-sm text-gray-500 dark:text-gray-300">Oui, nous offrons des certifications pour les cours sélectionnés. Une fois que vous aurez terminé le cours et satisfait aux exigences, vous pourrez obtenir un certificat électronique attestant de votre réussite.</p>
                            </div>
                        </div>

                        <div>
                            <div class="inline-block rounded-lg bg-blue-600 p-3 text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>

                            <div>
                                <h1 class="text-xl font-semibold text-gray-700 dark:text-white">Puis-je étudier hors ligne ?</h1>

                                <p class="mt-2 text-sm text-gray-500 dark:text-gray-300">Notre plateforme est principalement basée sur une connexion Internet, mais nous offrons également une option de téléchargement pour certaines leçons, ce qui vous permettra de les étudier hors ligne.</p>
                            </div>
                        </div>

                        <div>
                            <div class="inline-block rounded-lg bg-blue-600 p-3 text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>

                            <div>
                                <h1 class="text-xl font-semibold text-gray-700 dark:text-white">Comment puis-je suivre ma progression ?</h1>

                                <p class="mt-2 text-sm text-gray-500 dark:text-gray-300">Vous pouvez suivre votre progression à travers votre tableau de bord personnel. Vous y trouverez des informations sur les cours que vous avez terminés, vos scores aux quiz et vos certificats obtenus.</p>
                            </div>
                        </div>

                        <div>
                            <div class="inline-block rounded-lg bg-blue-600 p-3 text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>

                            <div>
                                <h1 class="text-xl font-semibold text-gray-700 dark:text-white">Comment m'inscrire sur le site ?</h1>

                                <p class="mt-2 text-sm text-gray-500 dark:text-gray-300">Pour vous inscrire sur notre site, cliquez sur le bouton "Inscription" en haut à droite de la page d'accueil. Remplissez le formulaire d'inscription avec vos informations personnelles, créez un nom d'utilisateur et un mot de passe.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>





        </div>
    )
}
export default Enseigner;


//Link Lumanosimo:
//<link rel="preconnect" href="https://fonts.googleapis.com">
//<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
//<link href="https://fonts.googleapis.com/css2?family=Lumanosimo&display=swap" rel="stylesheet"></link>
//font-family: 'DynaPuff', cursive;
//font-family: 'Lumanosimo', cursive;
//font-family: 'Rubik Pixels', cursive;
//font-family: 'Titillium Web', sans-serif;
//@import url('https://fonts.googleapis.com/css2?family=DynaPuff&family=Lumanosimo&family=Rubik+Pixels&family=Titillium+Web:wght@700&display=swap');