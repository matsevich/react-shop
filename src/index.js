import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'semantic-ui-css/semantic.min.css';
import './app.css';

import App from './containers/App';
import createStore from "./store";
import Parent from "./components/ModalCard";

const store = createStore();

ReactDOM.render(
    <Provider store={store}>
      <App /> 
    </Provider>, 
    document.getElementById('root')
  );
ReactDOM.render(<Parent />, document.getElementById('modal-root'));
