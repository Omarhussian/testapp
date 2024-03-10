import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { API , handleError } from "../../API/api";



export const GetTodos = createAsyncThunk("Todos/Get", async (id, thunkAPI) => {
  try {
    const { data } = await API.get(`/todos`);
    return data;
  } catch (error) {
    handleError(error, toast);
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});


const initialState = {
  Todos: [],
  loading: false,
  error: null,
  total: 0,
};



export const GetTodosSlice = createSlice({
  name: "GetTodosSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GetTodos.pending, (state) => {
        state.loading = true;
      })
      .addCase(GetTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.Todos = action.payload;
        // state.total = action.payload.total; // If you want to set the total, uncomment this line
        state.error = null;
      })
      .addCase(GetTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default GetTodosSlice.reducer;
