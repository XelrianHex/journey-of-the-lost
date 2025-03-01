import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "./header-slice";
import displayReducer from "./display-slice";
import combatReducer from "./combat-slice";
import buttonReducer from "./button-slice";

const store = configureStore({
    reducer: {
        header: headerReducer,
        display: displayReducer,
        combat: combatReducer,
        buttons: buttonReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;