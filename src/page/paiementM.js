import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../assetsLearning/paiement.css';

const PaiementM = () => {
  const form = useRef();
  const [isSuccessToastVisible, setIsSuccessToastVisible] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_rc3oa6y', 'template_42sx4fb', form.current, 'sCdfoIIqcUwcoCtDr')
      .then((result) => {
        console.log(result.text);
        toast('Message envoyé');

        setIsSuccessToastVisible(true);
        form.current.reset();
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <div>
      <div class="min-w-screen min-h-screen bg-gray-50 py-5">
        <div class="px-5">
          <div class="mb-2">
            <a href="#" class="focus:outline-none hover:underline text-gray-500 text-sm">
              <i class="mdi mdi-arrow-left text-gray-400"></i>Back
            </a>
          </div>
          <div class="mb-2">
            <h1 class="text-3xl md:text-5xl font-bold text-gray-600">Paiement Annuel</h1>
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail}>
        <div class="-mx-3 md:flex items-start">
                <div class="px-3 md:w-7/12 lg:pr-10">
                    <div class="w-full mx-auto text-gray-800 font-light mb-6 border-b border-gray-200 pb-6">
                        <div class="w-full flex items-center">
                            
                            <div class="flex-grow pl-3">
                                <h6 class="font-semibold uppercase text-gray-600">Pack annuel</h6>
                                
                            </div>
                            <div>
                                <span class="font-semibold text-gray-600 text-xl">$20</span><span class="font-semibold text-gray-600 text-sm">.00</span>
                            </div>
                        </div>
                    </div>
                    <div class="mb-6 pb-6 border-b border-gray-200">
                        <div class="-mx-2 flex items-end justify-end">
                            <div class="flex-grow px-2 lg:max-w-xs">
                                <label class="text-gray-600 font-semibold text-sm mb-2 ml-1">Code de réduction</label>
                                <div>
                                    <input name="code_reduction" class="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="XXXXXX" type="text"/>
                                </div>
                            </div>
                            <div class="px-2">
                                <button class="block w-full max-w-xs mx-auto border border-transparent bg-gray-400 hover:bg-gray-500 focus:bg-gray-500 text-white rounded-md px-5 py-2 font-semibold">APPLIQUER</button>
                            </div>
                        </div>
                    </div>
                    
                    <div class="mb-6 pb-6 border-b border-gray-200 md:border-none text-gray-800 text-xl">
                        <div class="w-full flex items-center">
                            <div class="flex-grow">
                                <span class="text-gray-600">Total</span>
                            </div>
                            <div class="pl-3">
                                <span class="font-semibold text-gray-400 text-sm">AN</span> <span class="font-semibold">$20.00</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="px-3 md:w-5/12">
                    <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-3 text-gray-800 font-light mb-6">
                        <div class="w-full flex mb-3 items-center">
                            <div class="w-32">
                                <span class="text-gray-600 font-semibold">Destination</span>
                            </div>
                            <div class="flex-grow pl-3">
                                {/*nom  */}
                                <span>BC Skills Academy</span>
                            </div>
                        </div>
                        <div class="w-full flex items-center">
                            <div class="w-32">
                                <span class="text-gray-600 font-semibold"> Address</span>
                            </div>
                            <div class="flex-grow pl-3">
                                <span>8PFV+J6F, Av. Mohamed Belkhadir, Safi</span>
                            </div>
                        </div>
                    </div>
                    <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 text-gray-800 font-light mb-6">
                        <div class="w-full p-3 border-b border-gray-200">
                            <div class="mb-5">
                                <label for="type1" class="flex items-center cursor-pointer">
                                    <input type="radio" class="form-radio h-5 w-5 text-indigo-500" name="type" value="Par carte" id="type1" checked/>
                                    <img src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png" class="h-6 ml-3"/>
                                </label>
                            </div>
                            <div>
                                <div class="mb-3">
                                    <label class="text-gray-600 font-semibold text-sm mb-2 ml-1">Email de l'étudiant</label>
                                    <div>
                                        <input class="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" name="from_email" placeholder="Votre email" type="email"/>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label class="text-gray-600 font-semibold text-sm mb-2 ml-1">Nom dans la carte</label>
                                    <div>
                                        <input class="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Votre nom dans la carte" type="text" name="nom_carte"/>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label class="text-gray-600 font-semibold text-sm mb-2 ml-1">Numéro de la carte</label>
                                    <div>
                                        <input class="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" name="num_carte" placeholder="0000 0000 0000 0000" type="text"/>
                                    </div>
                                </div>
                                <div class="mb-3 -mx-2 flex items-end">
                                    
                                  
<div>  <label class="text-gray-600 font-semibold text-sm mb-2 ml-1">Date de paiement</label>
    <select class="form-select w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer" name="mois">
        <option value="01">01 - January</option>
        <option value="02">02 - February</option>
        <option value="03">03 - March</option>
        <option value="04">04 - April</option>
        <option value="05">05 - May</option>
        <option value="06">06 - June</option>
        <option value="07">07 - July</option>
        <option value="08">08 - August</option>
        <option value="09">09 - September</option>
        <option value="10">10 - October</option>
        <option value="11">11 - November</option>
        <option value="12">12 - December</option>
    </select>
</div>
                                    <div class="px-2 w-1/4">
                                        <select class="form-select w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer" name="annee">
                                            <option value="2020">2020</option>
                                            <option value="2021">2021</option>
                                            <option value="2022">2022</option>
                                            <option value="2023">2023</option>
                                            <option value="2024">2024</option>
                                            <option value="2025">2025</option>
                                            <option value="2026">2026</option>
                                            <option value="2027">2027</option>
                                            <option value="2028">2028</option>
                                            <option value="2029">2029</option>
                                        </select>
                                    </div>
                                    <div class="px-2 w-1/4">
                                        <label class="text-gray-600 font-semibold text-sm mb-2 ml-1">Code de sécurité</label>
                                        <div>
                                            <input class="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="000" type="text" name="code_securite"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="w-full p-3">
                            <label for="type2" class="flex items-center cursor-pointer">
                                <input type="radio" class="form-radio h-5 w-5 text-indigo-500" name="type" value="Par paypal" id="type2"/>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" width="80" class="ml-3"/>
                            </label>
                        </div>
                    </div>
                    <div>
                        <button class="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-2 font-semibold" type="submit"><i class="mdi mdi-lock-outline mr-1"></i>  PAYER MAINTENANT</button>
                    </div>
                    {isSuccessToastVisible && (
        <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      )}
                </div>
            </div>
          
        </form>
        {isSuccessToastVisible && (
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss={false}
            draggable={false}
            pauseOnHover={false}
          />
        )}
      </div>
    </div>
  );
};

export default PaiementM;

