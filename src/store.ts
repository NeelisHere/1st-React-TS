import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./slices/taskSlice";

const store = configureStore({
    reducer: {
        [taskSlice.name]: taskSlice.reducer
    }
})

export default store