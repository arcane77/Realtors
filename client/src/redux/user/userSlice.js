import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    currentUser:null,
    error:null,
    loading:false,
};

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        signInStart: (state)=>{
            state.loading =true;
        },
        signInSuccess :(state,action)=>{
            console.log(action.payload)
            state.currentUser=action.payload;
            state.loading=false;
            state.error=null;
        },
        signInFailure:(state,action)=>{
            state.error=action.payload;
            state.loading=false
        },
        

        deleteUserStart:(state)=>{
            state.loading=true;

        }
        ,
        deleteUserSuccess:(state)=>{
            state.currentUser=null;
            state.loading=false;
            state.error=null;
         },

         deleteUserFailure:(state,action)=>{
            state.error=action.payload;
            state.loading=false;


         },
         signoutStart:(state)=>{
            state.loading=true;

        }
        ,
        signoutSuccess:(state)=>{
            state.currentUser=null;
            state.loading=false;
            state.error=null;
         },

         signoutFailure:(state,action)=>{
            state.error=action.payload;
            state.loading=false;


         }

    }
});

export const {
    signInStart,
    signInSuccess,
    signInFailure,
    deleteUserFailure,
    deleteUserStart,
    deleteUserSuccess,
    signoutFailure,
    signoutSuccess,
    signoutStart,}=userSlice.actions;


export default userSlice.reducer;