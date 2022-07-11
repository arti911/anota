import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { get } from "lodash";

import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";

import "./styles/index.scss";

import { store } from "./store";
import { fetchNotes } from "./utils";
import { getNotes } from "./slices/appSlice";

store.subscribe(() => {
  const data = {
    notes: {
      lists: get(store.getState(), "anota.notes", [])
    }
  };

  localStorage.setItem("vuex", JSON.stringify(data));
});

const notes = fetchNotes();

if (notes) {
  store.dispatch(getNotes(notes))
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorkerRegistration.register();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
