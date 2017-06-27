import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { createStore ,compose,applyMiddleware} from 'redux';
import  reducers from './reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import logger from 'redux-logger';


const initState={
  memberList:[],
  teamList:[],
  curTeam:''
}
const  store = createStore(reducers,initState,applyMiddleware(thunk,logger));

ReactDOM.render(
  <Provider store = {store}>
    <div>
      <App />
    </div>
  </Provider>,
  document.getElementById('root')
);
