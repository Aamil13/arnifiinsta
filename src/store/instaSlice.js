import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl ="https://dummyapi.io/data/v1/"

export const fetchPost = createAsyncThunk(
    "fetchAllPosts",
    async()=>{
       try {
        const res = await axios.get(`https://dummyapi.io/data/v1/post?limit=10`,{
            headers: {"app-id":"65578f96b9862e6c46134feb"}
        })
        // console.log(res.data);
        return res.data
       } catch (error) {
            console.log(error);
       }
    }
)

export const getcomments = createAsyncThunk(
    "getComments",
    async(id)=>{
        // console.log(id);
       try {
        const res = await axios.get(`https://dummyapi.io/data/v1/post/${id}/comment`,{
            headers: {"app-id":"65578f96b9862e6c46134feb"}
        })
        // console.log(res.data);
        return res.data
       } catch (error) {
            console.log(error);
       }
    }
)

export const signUp = createAsyncThunk(
    "SighUP",
    async(data)=>{
        console.log(data);
       try {
        const res = await axios.post(`https://dummyapi.io/data/v1/user/create`,{
            firstName: data.firstName,
            lastName:data.lastName,
             email:data.email
        },{
            headers: {"app-id":"65578f96b9862e6c46134feb"},
       
        })
        console.log(res.data);
        return res.data
       } catch (error) {
            console.log(error);
       }
    }
)



const instaSlice = createSlice({
    name: "post",
    initialState:{
        isLoading: false,
        data: [],
        Comments:[],
        user:[],
        isError: false,
       
    },
    reducers:{
        
    },
    extraReducers:(builder)=>{
           builder.addCase(fetchPost.pending,(state,action)=>{
            state.isLoading = true
           }),
           builder.addCase(fetchPost.fulfilled,(state,action)=>{
            state.isLoading = false
            state.data = action.payload
            // localStorage.setItem("userID",state.data.users._id)
           }),
           builder.addCase(fetchPost.rejected,(state,action)=>{
            state.isLoading = false
            state.isError = true
           }),
           builder.addCase(getcomments.fulfilled,(state,action)=>{
            
            state.Comments = action.payload
            // localStorage.setItem("userID",state.data.users._id)
           }),
           builder.addCase(signUp.fulfilled,(state,action)=>{
            // console.log(action.payload);
            state.user = action.payload
            localStorage.setItem("userID",action.payload.id)
            localStorage.setItem("userName",action.payload.firstName)
           })
    }
})

export default instaSlice.reducer