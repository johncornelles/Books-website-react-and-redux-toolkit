import {configureStore} from "@reduxjs/toolkit"
import fetcher from '../features/fetch/fetchdata'
export const store = configureStore({
    reducer: fetcher
})

console.log(fetcher)