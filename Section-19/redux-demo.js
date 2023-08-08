const redux = require("redux"); // standard redux import

// Reducer
// notice we set a default value for state here, because the first time this is run, state will be undefined (which would cause an error) unless we provide it with a default value
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  } else if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};

// Store
const store = redux.createStore(counterReducer); // createStore is a redux method

const counterSubscriber = () => {
  const latestState = store.getState(); // getState is a redux method
  console.log(latestState);
};

// Subscribe
store.subscribe(counterSubscriber);

// Dispatch
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
