import React from 'react';

// Counter 컴포넌트
// { number(숫자), onIncrease(함수), onDecrease(함수) } 객체를 파라미터로 받는다.
const Counter = ({ number, onIncrease, onDecrease }) => {
  return (
    <div>
      <h1>{number}</h1>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </div>
  );
};

export default Counter;
