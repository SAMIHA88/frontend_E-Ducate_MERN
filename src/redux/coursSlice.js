import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast'
const initialState={
    coursList : [],
    panierItem:[]
}
export const coursSlice=createSlice({
    name: "cours",
  initialState,
    reducers:{
        setDataCours:(state,action)=>{
            console.log(action)
            state.coursList=[...action.payload]
        },
        ajouterPanierItems:(state,action)=>{
            console.log(action)
            const check=state.panierItem.some(el=>el._id === action.payload._id)
            console.log(check);
            if(check){
                toast("Déja dans le panier")
            }else{
                const total=action.payload.prixCours
                state.panierItem=[...state.panierItem,{...action.payload,qty:1,total:total}]
               toast("Cours ajouté au Panier")
            }
            
        },
        supprimerPanierItems:(state,action)=>{
            console.log(action.payload)
            
            toast("Cours supprimé du Panier")
            const  index = state.panierItem.findIndex((el)=>el._id===action.payload)
            state.panierItem.splice(index,1)
            console.log(index)

        },
        totalPrixPanierItems:(state,action)=>{

        }
    }
})

export const {setDataCours,ajouterPanierItems,supprimerPanierItems,totalPrixPanierItems}=coursSlice.actions;
export default coursSlice.reducer