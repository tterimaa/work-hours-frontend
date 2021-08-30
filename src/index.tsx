import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "semantic-ui-css/semantic.min.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, Store } from "redux";
import thunk from "redux-thunk";
import rootReducer, { RootState } from "./store";
import { composeWithDevTools } from "redux-devtools-extension";
import "./index.css";

const store: Store<RootState> = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
