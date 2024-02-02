import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    userName: "Reader",
    searchValue: "",
    data: null,
    status: "idle", // idle, loading, success, error
    errorMessage: null,
};

export const fetchData = createAsyncThunk(
    "bookData/fetchData",
    async () => {
        try {
            const response = await axios.get(
                "https://reactnd-books-api.udacity.com/books",
                { headers: { Authorization: "whatever-you-want" } }
            );
            return response.data.books;
        } catch (error) {
            return error;
        }
    }
);


const dataSlice = createSlice({
    name: "bookData",
    initialState,
    reducers: {
        updateSearch:(state, action) => {
            state.searchValue = action.payload.searchValue
        },

        updateUserName: (state, action) => {
            state.userName = action.payload.userName
        }

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.status = "loading";
                state.errorMessage = null; // Reset error state
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                if (Array.isArray(action.payload)){
                    state.status = "success";
                    state.data = action.payload;
                }
                else{
                    // state.errorMessage = action.payload.error.message
                    state.status = "error"
                    state.errorMessage = action.payload.message
                }
            })
    },
});

export const {updateSearch, updateUserName} = dataSlice.actions
export default dataSlice.reducer;