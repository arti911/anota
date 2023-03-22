import { get } from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from 'App';
import reportWebVitals from 'reportWebVitals';
import * as serviceWorkerRegistration from 'serviceWorkerRegistration';
import { getNotes } from 'slices/appSlice';
import { store } from 'store';
import { fetchNotes } from 'utils';

import './styles/index.scss';

store.subscribe(() => {
  const data = {
    notes: {
      lists: get(store.getState(), 'anota.notes', []),
    },
  };

  localStorage.setItem('vuex', JSON.stringify(data));
});

const notes = fetchNotes();

if (notes) {
  store.dispatch(getNotes(notes));
}

const rootElem = document.getElementById('root');

if (rootElem !== null) {
  const root = ReactDOM.createRoot(rootElem);

  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
}

serviceWorkerRegistration.register();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
