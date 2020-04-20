import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './modules';

// STORE : 안에는 현재 어플리케이션(모든 컴포넌트) 상태와 리듀서가 들어가 있다. (생성시 리듀서 함수를 파라미터로 넣는다.)
// 한 개의 프로젝트는 단 하나의 스토어만 가질 수 있다.
// 스토어에 정보에 접근하기 위해서는 리듀서를 통해서만 가능하다. (리듀서 함수 호출 --> state)

// STORE 역할 (스토어 내장함수)
// dispatch(action) : action을 발생시켜서 리듀서로 보낸다. --> 새로운 상태를 만듦
// getState() : 현재 상태를 반환
// subscribe(listener) : 상태가 바뀔 때마다 실행할 함수 등록 (listener --> 상태변경 콜백함수)
// replaceReducer(nextReducer) : 핫리로딩과 코드분할에 사용 (거의 사용하지 않음)
const store = createStore(rootReducer, composeWithDevTools());

// console.log(store.getState());
// const unsubscribe = store.subscribe(() => console.log(store.getState()));
// store.dispatch(actions.increment());
// store.dispatch(actions.increment());
// store.dispatch(actions.decrement());
// store.dispatch(actions.setColor([200, 200, 200]));

// // 추후 구독을 비활성화할 때 호출
// unsubscribe();
// // unsubscribe()로 인해 로그가 남지 않는다.
// store.dispatch(actions.setColor([210, 210, 210]));

// 리액트 컴포넌트에서 스토어를 사용할 수 있도록
// App 컴포넌트를 react-redux에서 제공하는 Provider 컴포넌트로 감싸준다.
// 이 컴포넌트를 사용할 때는 store를 props로 전달해 주어야 한다.
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
