import { configureStore } from "@reduxjs/toolkit";
import authReducer from './auth/authSlice'
import movieReducer from './movie/movieSlice'
import { thunk } from "redux-thunk";
import { combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// rootReducer
const rootReducer = combineReducers({
  auth: authReducer,
  movie: movieReducer,
})

// config persistStore
const persistConfig = {
  key: 'root',
  storage,
}

// create persist reducer
const persistReducer = persistReducer(persistConfig, rootReducer)

// create redux store
export const store = configureStore({
  reducer: persistReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
})

// create persistor
export const persistor = persistStore(store)
