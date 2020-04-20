import React from 'react';
import { connect } from 'react-redux';
import { changeInput, insert, toggle, remove } from '../modules/todos';
import Todos from '../components/Todos';

// 이전에 todos 모듈에서 작성한 액션 생성 함수와 상태 안에 있던 값을 컴포넌트의 props로 전달
const TodosContainer = ({
    input,
    todos,
    changeInput,
    insert,
    toggle,
    remove,
}) => {
    return (
        // Todos 컴포넌트로 전달
        <Todos
            input={input}
            todos={todos}
            onChangeInput={changeInput}
            onInsert={insert}
            onToggle={toggle}
            onRemove={remove}
        />
    );
};

export default connect(
    // 비구조화 할당을 통해 todos를 분리하여 state.todos.input 대신 todos.input을 사용
    ({ todos }) => ({   // todos는 export된 todos
        input: todos.input, // --> state.todos.input
        todos: todos.todos, // --> state.todos.todos
    }),
    {
        changeInput,    // --> dispatch(changeInput())
        insert,         // --> dispatch(insert())
        toggle,         // --> toggle(insert())
        remove,         // --> remove(insert())
    },
)(TodosContainer);  // TodosContainer props로 받는다. (input, todos, changeInput, insert, toggle, remove)