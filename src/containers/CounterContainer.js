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
        <Counter number={number} onIncrease={increase} onDecrease={decrease} />
    );
};

// mapStateToProps에서 반환하는 객체 내부의 값들은 컴포넌트의 props로 전달된다.
const mapStateToProps = state => ({
    number: state.counter.number,
});

// mapDispatchToProps에서 반환하는 객체 내부의 값들은 컴포넌트의 props로 전달된다.
const mapDispatchToProps = dispatch => ({
    increase: () => {
        dispatch(increase());
    },
    decrease: () => {
        dispatch(decrease());        
    },
});

// 리덕스와 연동된 컴포넌트를 반환
export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);

// 1
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

// 2
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

// 3
// export default connect(
//     state => ({
//         number: state.counter.number,
//     }),
//     {
//         increase,
//         decrease,
//     },
// )(CounterContainer);
