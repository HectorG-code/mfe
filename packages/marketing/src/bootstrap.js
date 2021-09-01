import React from "react";
import ReactDOM from "react-dom";
import App from './App';

// Mount function to strat up the app
const mount = (el) => {
  ReactDOM.render(<App />, el);
};

// If we are in development and in isolation
if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#_marketinb-dev-root");
  if (el) {
    mount(el);
  }
}

// We are running through container
export { mount };
