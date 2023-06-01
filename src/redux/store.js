import {configureStore} from "@reduxjs/toolkit";
import rolls from './rolls/rollsSlice'


export const store = configureStore({
    reducer: {
        rolls
        }
    },
)
