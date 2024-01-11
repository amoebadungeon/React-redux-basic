import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger'; // Import Redux Logger

// Define the initial state for the counter
const initialState = {
  value: 0,
};

// Define a reducer function to handle state changes
const counterIncrement = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, value: state.value + 1 };

    default:
      return state;
  }
};

// Create middleware (Redux Logger)
const loggerMiddleware = createLogger();

const store = configureStore({
  reducer: {
    counter: counterIncrement,
    // Add more reducers for other parts of the state if needed
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware),
});

export default store;

 /*Explanation:

    createStore:
        createStore is a function provided by the Redux library. It takes a reducer function as an argument and returns a Redux store.
        In this case, the reducer is counterReducer.

    initialState:
        This object represents the initial state of the application. In this example, it has a single property counter initialized to 0.

    counterReducer:
        The reducer function takes the current state and an action as parameters.
        It uses a switch statement to determine how to update the state based on the action type.
        If the action type is 'INCREMENT', it returns a new state with an incremented counter.
        If the action type doesn't match, it returns the current state.

    store:
        The Redux store is created by calling createStore with the counterReducer and the initial state (initialState).
        The store is a centralized place to hold the state of the entire application. */