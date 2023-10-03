import React from 'react';
import Plan from "../assetsLearning/plan.png";
import Video from "../assetsLearning/enregistrerVideo.png";
import Cours from "../assetsLearning/lancerCours.png";
import zakaria from "../assetsLearning/zakaria.png";
import samiha from "../assetsLearning/samiha.jpeg";
import formateur from "../assetsLearning/formateur.jpg";
import ScrollToTopOnPageChange from '../utlités/Actualiser';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Enseigner = () => {
    const userData = useSelector((state) => state.user)
    return (
        <div>
            <ScrollToTopOnPageChange />
            <script src="//unpkg.com/alpinejs" defer></script>
            <head>
                <link href="https://fonts.googleapis.com/css2?family=Goldman&display=swap" rel="stylesheet" />
            </head>
            <style>
                {`
        .font-goldman {
          font-family: 'Goldman', sans-serif;
        }
        `}
            </style>
            <main>
                <section class="bg-white">

                    <div class="container mx-auto px-6 py-16 text-center">
                        <div class="mx-auto max-w-lg">

                            <p class="mt-6 text-gray-500 dark:text-gray-500">Construisez votre cours en ligne et monétisez votre expertise en partageant votre savoir partout dans le monde.

                            </p>
                            <button class="mt-6 rounded-lg bg-blue-600 px-6 py-2.5 text-center text-sm font-medium capitalize leading-5 text-white hover:bg-blue-500 focus:outline-none lg:mx-0 lg:w-auto">
                               
                                <Link to={  userData.role === "formateur"?"../Deposer" : "../Authentification" } className="nav-link">
                                    Ayez un impact global
                                </Link></button>
                            <p class="mt-3 text-sm text-gray-400">Aucune carte de crédit n'est requise</p>
                        </div>

                        <div class="mt-10 flex justify-center">
                            <img class="h-96 w-full rounded-xl object-cover lg:w-4/5" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80" />
                        </div>
                    </div>
                </section>



                <section class="bg-white dark:bg-gray-900">
                    <div class="h-[32rem] bg-gray-100 dark:bg-gray-800">
                        <div class="container mx-auto px-6 py-10">
                            <h1 class="text-center text-3xl font-semibold capitalize text-gray-800 dark:text-white lg:text-4xl">Comment se lancer?</h1>

                            <div class="mx-auto mt-6 flex justify-center">
                                <span class="inline-block h-1 w-40 rounded-full bg-blue-500"></span>
                                <span class="mx-1 inline-block h-1 w-3 rounded-full bg-blue-500"></span>
                                <span class="inline-block h-1 w-1 rounded-full bg-blue-500"></span>
                            </div>

                            <p class="mx-auto mt-6 max-w-2xl text-center text-gray-500 dark:text-gray-300">Notre équipe de support E-Ducate est là pour répondre à vos questions et vérifier votre vidéo test, tandis que notre Teaching Center vous offre de nombreuses ressources pour vous aider tout au long du processus. De plus, bénéficiez du soutien de formateurs expérimentés dans notre communauté en ligne.</p>
                        </div>
                    </div>

                    <div class="container mx-auto -mt-72 px-6 py-10 sm:-mt-80 md:-mt-96">
                        <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-16 xl:grid-cols-3">
                            <div class="flex flex-col items-center rounded-xl border p-4 dark:border-gray-700 sm:p-6">

                                <h1 class="mt-4 text-2xl font-semibold capitalize text-gray-700 dark:text-white">Planifiez Votre Programme</h1>

                                <img src={Plan} />

                                <p class="mt-2 capitalize text-gray-500 dark:text-gray-300">Commencez par votre passion et vos connaissances. Choisissez ensuite un sujet prometteur à l'aide de notre outil Marketplace Insights.

                                    La manière dont vous enseignez, ce que vous y apportez, ne dépend que de vous.
                                    E-Ducate vous aide
                                    Nous proposons de nombreuses ressources sur la façon de créer votre premier cours. De plus, notre tableau de bord du formateur et les pages du programme vous aident à rester organisé.</p>


                            </div>

                            <div class="flex flex-col items-center rounded-xl border p-4 dark:border-gray-700 sm:p-6">

                                <h1 class="mt-4 text-2xl font-semibold capitalize text-gray-700 dark:text-white">Enregistrez Votre Video</h1>

                                <img src={Video} />

                                <p class="mt-2 capitalize text-gray-500 dark:text-gray-300">Utilisez des outils de base comme un smartphone ou un appareil photo reflex numérique. Ajoutez un bon microphone et vous êtes prêt à vous lancer.

                                    Si vous n'aimez pas être filmé, il vous suffit de capturer votre écran. Dans tous les cas, nous vous recommandons au moins deux heures de vidéo pour un cours payant.

                                    E-Ducate vous aide
                                    Notre équipe de support est à votre disposition pour vous aider tout au long du processus et vous faire part de ses commentaires sur les vidéos test.</p>

                            </div>

                            <div class="flex flex-col items-center rounded-xl border p-4 dark:border-gray-700 sm:p-6">
                                <h1 class="mt-4 text-2xl font-semibold capitalize text-gray-700 dark:text-white">Lancez votre Cours</h1>
                                <img class="aspect-square w-full rounded-xl object-cover" src={Cours} />

                                <p class="mt-2 capitalize text-gray-500 dark:text-gray-300">Recueillez vos premiers avis et notes en faisant la promotion de votre cours sur les réseaux sociaux et dans vos réseaux professionnels.

                                    Votre cours sera disponible sur notre plate-forme, où vous percevrez des revenus pour chaque inscription payante.

                                    E-Ducate vous aide
                                    Notre outil de coupon personnalisé vous permet d'offrir des incitations à l'inscription, tandis que nos promotions mondiales génèrent du trafic vers les cours. Les cours choisis pour E-Ducate Business bénéficient davantage d'opportunités.</p>


                            </div>
                        </div>
                    </div>
                </section>

                <section class="bg-white dark:bg-gray-900">
                    <div class="container mx-auto px-6 py-10">
                        <h1 class="text-center text-3xl font-semibold capitalize text-gray-800 dark:text-white lg:text-4xl">Vous n'aurez pas à vous lancer tout seul</h1>

                        <div class="mx-auto mt-6 flex justify-center">
                            <span class="inline-block h-1 w-40 rounded-full bg-blue-500"></span>
                            <span class="mx-1 inline-block h-1 w-3 rounded-full bg-blue-500"></span>
                            <span class="inline-block h-1 w-1 rounded-full bg-blue-500"></span>
                        </div>

                        <div class="mx-auto mt-16 flex max-w-6xl items-start">
                            <button class="hidden rounded-full border p-2 text-gray-800 transition-colors duration-300 hover:bg-gray-100 rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:block">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            <div>
                                <p class="flex items-center text-center text-gray-500 lg:mx-8">Notre équipe de support E-Ducate est là pour répondre à vos questions et vérifier votre vidéo test, tandis que notre Teaching Center vous offre de nombreuses ressources pour vous aider tout au long du processus. De plus, bénéficiez du soutien de formateurs expérimentés dans notre communauté en ligne.</p>

                                <div class="flex flex-row  justify-center">
                                    <div class="mt-8 flex flex-col items-center justify-center">
                                        <img class="h-14 w-14 rounded-full object-cover" src={samiha} />
                                        <div class="mt-4 text-center">
                                            <h1 class="font-semibold text-gray-800 dark:text-white">Samiha</h1>
                                            <span class="text-sm text-gray-500 dark:text-gray-400">Elhajjam</span>
                                        </div>
                                    </div>

                                   {/**zzzzzz */}

                                </div>


                            </div>

                            <button class="hidden rounded-full border p-2 text-gray-800 transition-colors duration-300 hover:bg-gray-100 rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:block">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </section>

                <section class="bg-blue-900">
                    <p class="flex flex-row items-center justify-center font-goldman">
                        <div class="flex flex-row items-center justify-center ml-20 text-2xl mx-auto">+ de 62M<br />Participants</div>
                        <div class="flex flex-row items-center justify-center ml-40 text-2xl mx-auto">+ de 75<br />Langues</div>
                        <div class="flex flex-row items-center justify-center ml-60 text-2xl mx-auto">+ de 830 M<br />Inscriptions</div>
                        <div class="flex flex-row items-center justify-center ml-80 text-2xl mx-auto">+ de 14 400<br />Clients Enterprise</div>
                    </p>
                </section>

                


            </main>
        </div>
    )
}
export default Enseigner;

{/*<section class="min-h-screen bg-gradient-to-r from-blue-600 via-blue-800 to-blue-900 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900">
                    <div class="container mx-auto flex justify-center items-center min-h-screen flex-col px-6 py-12 ">
                        <div class="flex-1 lg:-mx-6 lg:flex lg:items-center ">
                            <div class="text-white lg:mx-6 lg:w-1/2">
                                <h1 class="text-3xl font-semibold capitalize lg:text-5xl">Devenez formateur dès aujourd'hui</h1>

                                <p class="mt-10 max-w-xl">Rejoignez l'une des plus grandes plates-formes d'apprentissage en ligne au monde.</p>
                                <img class="mt-8 h-100 w-full rounded-lg object-cover" src={formateur} />


                            </div>
                            <div className='flex-1 flex pt-[200px]'>


                                <div class="flex-1 lg:mx-6 lg:w-1/2">

                                    <div class=" w-full  overflow-hidden rounded-xl bg-white px-8 py-10 shadow-2xl dark:bg-gray-900 lg:max-w-xl">

                                        <h1 class="text-2xl font-medium text-gray-700 dark:text-gray-200">Authentification</h1>

                                        <form class="mt-6">


                                            <div class="mt-6 flex-1">
                                                <label class="mb-2 block text-sm text-gray-600 dark:text-gray-200">Address email</label>
                                                <input type="email" placeholder="johndoe@example.com" class="mt-2 block w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
                                            </div>


                                            <div class="mt-6 flex-1">
                                                <label class="mb-2 block text-sm text-gray-600 dark:text-gray-200">Password</label>
                                                <input type="password" placeholder="*********" class="mt-2 block w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
                                            </div>
                                            <div class="text-right text-gray-400 hover:underline hover:text-gray-100">
                                                <Link to={"../Inscription"} className="nav-link">
                                                    <a href="#">Vous n'avez pas de compte?</a>
                                                </Link>
                                            </div>

                                            <button class="mt-6 w-full transform rounded-md bg-blue-600 px-6 py-3 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">Se connecter</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    </section>*/}
//Link Lumanosimo:
//<link rel="preconnect" href="https://fonts.googleapis.com">
//<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
//<link href="https://fonts.googleapis.com/css2?family=Lumanosimo&display=swap" rel="stylesheet"></link>
//font-family: 'DynaPuff', cursive;
//font-family: 'Lumanosimo', cursive;
//font-family: 'Rubik Pixels', cursive;
//font-family: 'Titillium Web', sans-serif;
//@import url('https://fonts.googleapis.com/css2?family=DynaPuff&family=Lumanosimo&family=Rubik+Pixels&family=Titillium+Web:wght@700&display=swap');