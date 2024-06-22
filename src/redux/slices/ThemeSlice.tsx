import {createSlice} from "@reduxjs/toolkit";

type ThemeSliceType={
    isLight:boolean;
    isDark:boolean
}

const themeInitialState:ThemeSliceType= {
    isLight:true,
    isDark:false
}
export const themeSlice = createSlice({
    name:'themeSlice',
    initialState: themeInitialState,
    reducers: {
        toggleTheme:(state)=>{
            state.isLight=!state.isLight;
            state.isDark=!state.isDark
        }
    },
})
export const themeActions = {
    ...themeSlice.actions,
}