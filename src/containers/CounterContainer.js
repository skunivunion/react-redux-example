import React from 'react';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';
// import { bindActionCreators } from 'redux';

// Container Component : 리덕스 스토어와 연동된 컴포넌트
// 리덕스와 연동하려면 react-redux에서 제공하는 connect 함수를 사용해야 한다.
// 사용법 : connect(mapStateToProps, mapDispatchToProps)(연동할 컴포넌트) --> 리덕스와 연동된 컴포넌트 반환
// mapStateToProps : 리덕스 스토어 안의 상태를 컴포넌트의 props로 넘겨주기 위해 설정
// mapDispatchToProps : 액션 생성 함수를 컴포넌트의 props로 넘겨주기 위해 사용

const CounterContainer = ({ number, increase, decrease }) => {
  // Counter 컴포넌트에게 스토어로부터 받은 상태(객체) 값을 넘겨준다.
  return (
    // Counter 컴포넌트로 전달
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

// Store가 가진 state를 어떻게 props와 연동 (필요한 것만 받으면 된다.)
// mapStateToProps에서 반환하는 객체 내부의 값들은 컴포넌트의 props로 전달된다.
const mapStateToProps = (state) => ({
  number: state.counter.number,
});

// Reducer에 action을 알리는 함수 dispatch를 어떻게 props 연동
// mapDispatchToProps에서 반환하는 객체 내부의 값들은 컴포넌트의 props로 전달된다.
// dispatch() : 리듀서에 action을 통지
const mapDispatchToProps = (dispatch) => ({
  increase: () => {       // increase는
    // increase()는 increase를 수행한 결과를 의미한다. <-- import { increase } from '../modules/counter';
    dispatch(increase()); // 리듀서함수(counter)를 수행한다. (파라미터로 increase()가 리턴하는 값을 넘긴다.)
  },
  decrease: () => {       // decrease는
    // decrease()는 decrease를 수행한 결과를 의미한다. <-- import { decrease } from '../modules/counter';
    dispatch(decrease()); // 리듀서함수(counter)를 수행한다. (파라미터로 decrease()가 리턴하는 값을 넘긴다.)
  },
});

// Store와 Reducer를 연결시킬 수 있도록 만들어진 Component가 number, increase, decrease 반환
// CounterContainer가 props로 받는다.
export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);

// 1.
// // `increase: () => dispatch(increase()),` === `increase: () => { return dispatch(increase()) },`
// export default connect(
//     state => ({
//         number: state.counter.number,
//     }),
//     dispatch => ({
//         increase: () => dispatch(increase()),
//         decrease: () => dispatch(decrease()),
//     }),
// )(CounterContainer);

// 2. import { bindActionCreators } from 'redux';
// export default connect(
//     state => ({
//         number: state.counter.number,
//     }),
//     dispatch =>
//         bindActionCreators(
//             {
//                 increase,
//                 decrease,
//             },
//             dispatch,
//         ),
// )(CounterContainer);

// 3.
// export default connect(
//     state => ({
//         number: state.counter.number,
//     }),
//     {
//         increase,
//         decrease,
//     },
// )(CounterContainer);
