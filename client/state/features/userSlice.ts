import { createSlice,PayloadAction } from "@reduxjs/toolkit";
interface InitialProps{
    user:{
        name:string
    }
}

const initialState:InitialProps = {
    user:{
        name:'Arya'
    }
}
export const userSlice= createSlice({
    name:"user",
    initialState,
    reducers:{
        setUser:(state,action:PayloadAction<InitialProps["user"]>)=>{
            state.user = action.payload
        }
    }
})

export const {setUser} = userSlice.actions

export default userSlice.reducer