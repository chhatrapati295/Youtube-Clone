import {configureStore} from '@reduxjs/toolkit'
import AppSlice from './AppSlice';
import ChatSlice from './ChatSlice';

const store = configureStore({
    reducer : {
        app : AppSlice,
        chat : ChatSlice
    }
})
export default store;
