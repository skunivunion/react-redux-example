import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker'
import rootReducer from './modules';

// 스토어 만들기
const store = createStore(rootReducer, composeWithDevTools());

// 리액트 컴포넌트에서 스토어를 사용할 수 있도록
// App 컴포넌트를 react-redux에서 제공하는 Provider 컴포넌트로 감싸준다.
// 이 컴포넌트를 사용할 때는 store를 props로 전달해 주어야 한다.
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();