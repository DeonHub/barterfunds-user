// import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import { persistReducer, persistStore } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; 
// import userReducer from './userSlice';

// const persistConfig = {
//   key: 'root',
//   storage
// };

// const rootReducer = combineReducers({
//   user: userReducer,
//   // Add other reducers here
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: persistedReducer,
//   // Add middleware, devtools, etc. here
// });

// export const persistor = persistStore(store);

// // Function to clear all redux-persist storage
// export const clearPersistedStorage = () => {
//   storage.removeItem('persist:root');
// };
