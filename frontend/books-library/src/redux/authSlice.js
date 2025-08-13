import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../utils/axiosInstance";

export const loginUser = createAsyncThunk("auth/login", async (formData, thunkAPI) => {
    try {
        const res = await axiosInstance.post("/auth/login", formData);
        return res.data;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.response.data.message);
    }
});

export const registerUser = createAsyncThunk("auth/register", async (formData, thunkAPI) => {
    try {
        const res = await axiosInstance.post("/auth/register", formData);
        return res.data;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.response.data.message);
    }
});

export const logoutUser = createAsyncThunk("auth/logout", async () => {
    await axiosInstance.get("/auth/logout");
    return null;
});

const authSlice = createSlice({
    name: "auth",
    initialState: { user: null, loading: false, error: null },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => { state.loading = true; state.error = null; })
            .addCase(loginUser.fulfilled, (state, action) => { state.loading = false; state.user = action.payload; })
            .addCase(loginUser.rejected, (state, action) => { state.loading = false; state.error = action.payload; })
            .addCase(registerUser.fulfilled, (state, action) => { state.user = action.payload; })
            .addCase(logoutUser.fulfilled, (state) => { state.user = null; });
    }
});
export default authSlice.reducer;
