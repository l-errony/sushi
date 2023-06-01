/*
import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchRolls = createAsyncThunk(
    'pizza/fetchPizzasStatus',
    async (params) => {
        const {sortBy, order, category, search, currentPage} = params
        const {data} = await axios.get<Pizza[]>(
            `https://63ac4236da81ba97617ec7e2.mockapi.io/items?limit=4&page=${currentPage}${category}&sortBy=${sortBy}&order=${order}${search}`
        );
        return data as Pizza[]
        //console.log(thunkAPI)
    }
)
*/
