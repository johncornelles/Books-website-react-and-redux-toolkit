// configure store is used to create and maintain a redux store
import {configureStore} from "@reduxjs/toolkit"
import fetcher from '../features/fetch/fetchdata'
// import the reducer function from the fetchdata 
export const store = configureStore({
    reducer: fetcher // this is the root reducer this combines ultiple reducers and into a single function
})
// export the store so that other files can access it. This allows us to use the state in our components by importing
// the configureStore returns a configured redux store