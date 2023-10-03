import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    
email : "",
    nom : "",
    password : "",  
    profileImage : "" ,
    role : "",
    _id : ""
  
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginRedux:(state,action)=>{
        console.log(action.payload.data)
        //state=action.payload.data
        //state.user=action.payload.data
        state._id=action.payload.data._id
        state.email=action.payload.data.email
        state.password=action.payload.data.password
        state.role=action.payload.data.role
        state.nom=action.payload.data.nom
        state.profileImage=action.payload.data.profileImage
    },
    logoutRedux:(state,action)=>{
       
        state._id=""
        state.email=""
        state.password=""
        state.role=""
        state.nom=""
        state.profileImage=""
    }
}})
export const {loginRedux ,logoutRedux} = userSlice.actions

export default userSlice.reducer