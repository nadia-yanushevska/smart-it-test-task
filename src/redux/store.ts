import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        adverts: advertsReducer,
    },
});

export const persistor = persistStore(store);
