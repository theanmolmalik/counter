import { configureStore } from "@reduxjs/toolkit";

const reducerFunction = (state={counter:0},action) => {
    if(action.type === "INC")
    {
        return {counter:state.counter+1};
    }
    else if(action.type === "DEC")
    {
        return {counter:state.counter-1};
    }
    else if(action.type === "ADD")
    {
        return {counter:state.counter+action.payload};
    }
    return state;
}

const store = configureStore({reducer:reducerFunction});

export default store;