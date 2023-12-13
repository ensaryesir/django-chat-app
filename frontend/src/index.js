import React from "react";
import { createRoot } from "react-dom/client";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk/dist/redux-thunk.legacy-esm";
import "antd/dist/antd";
import reducer from "./store/reducers/auth";
import App from "./App";

const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function configureStore() {
  const store = createStore(reducer, composeEnhances(applyMiddleware(thunk)));

  if (module.hot) {
    module.hot.accept("./store/reducers", () => {
      const nextRootReducer = require("./store/reducers/auth");
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}

const store = configureStore();
const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

const root = createRoot(document.getElementById("app"));
root.render(app);
