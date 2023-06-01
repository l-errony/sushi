import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    products: [],
    categories: [],
    favoriteCategory: '',
    popup: false,
    productData: {},
    cart: [],
    countInfCart: 0,
    totalPrice: 0,
    amountButtons: false,
    deliveryType: 0,
    address: null,
    mapActive: false,
    addressValue: null,
    searchValue: '',
    filterProduct: []
}


const rollsSlice = createSlice({
    name: 'rolls',
    initialState,
    reducers: {
        setProducts(state, action) {
            state.products = action.payload.products
        },
        setProductPopup(state, action){
            state.popup = action.payload
        },
        setCategories(state, action) {
            state.categories = action.payload.categories.map(i => i.name)
        },
        setFavoriteCategory(state, action){
            state.favoriteCategory = action.payload
        },
        setProductData(state, action) {
            state.productData = action.payload
        },
        setDeliveryType(state, action) {
            state.deliveryType = action.payload
        },
        addItem(state, action){
            const findItem = state.cart.find(obj => obj.num === action.payload.num)

            if (findItem) {
                findItem.count++;
            }else {
                state.cart.push({
                    ...action.payload,
                    count: 1
                })
            }
            state.totalPrice = state.cart.reduce((sum, obj) => {
                return (obj.price * obj.count) + sum
            }, 0)
            state.countInfCart = state.cart.length
        },
        minusItem(state, action){
            const findItem = state.cart.find(obj => obj.num === action.payload)
            if (findItem) findItem.count--;
            state.totalPrice = state.cart.reduce((sum, obj) => {
                return (obj.price * obj.count) + sum
            }, 0)
        },
        removeItem(state, action){
            state.cart = state.cart.filter(obj => obj.num !== action.payload)
            state.totalPrice = state.cart.reduce((sum, obj) => {
                return (obj.price * obj.count) + sum
                }, 0)
            state.countInfCart--
        },
        /*addAddress(state, action){
            state.address = action.payload
        },*/
        setMapActive(state, action){
            state.mapActive = action.payload
        },
        setAddressValue(state, action){
            state.addressValue = action.payload;
        },
        setSearchValue(state, action){
            state.searchValue = action.payload
            state.filterProduct = state.products.filter((products => state.searchValue ? products.name.toLowerCase().includes(state.searchValue) : products))

        }
    },

        /*extraReducers: (builder) => {
            builder.addCase(fetchPizzas.pending, (state, action) => {
                state.status = Status.LOADING;
                state.items = []
            });

            builder.addCase(fetchPizzas.fulfilled, (state, action) => {
                state.items = action.payload;
                state.status = Status.SUCCESS;
            });
            builder.addCase(fetchPizzas.rejected, (state, action) => {
                state.status = Status.ERROR;
                state.items = [];
            });
        },*/
    })


export const { setProducts, setCategories, setProductPopup, setProductData, addItem, minusItem, removeItem, setMapActive, addAddress, setAddressValue, setFavoriteCategory, setSearchValue} = rollsSlice.actions

export default rollsSlice.reducer