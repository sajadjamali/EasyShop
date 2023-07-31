import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    inputValue: "",
    selectValue: ""
}

const filterValueSlice = createSlice({
    name: "filterValue",
    initialState,

    reducers: {
        changeInputValue: (state, action) => {
            state.inputValue = action.payload;
        },
        changeSelectValue: (state, action) => {
            state.selectValue = action.payload;
        }
    }
});

export const { changeInputValue, changeSelectValue } = filterValueSlice.actions;
export default filterValueSlice.reducer;