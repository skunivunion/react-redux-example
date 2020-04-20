// 액션 타입 정의 : 대문자로 정의하고 '모듈이름/액션이름' 형태로 작성 (액션이름 충돌 방지)
const CHANGE_INPUT = 'todos/CHANGE_INPUT';  // 인풋 값을 변경
const INSERT = 'todos/INSERT';  // 새로운 todo를 등록함
const TOGGLE = 'todos/TOGGLE';  // todo를 체크하거나 체크 해제함
const REMOVE = 'todos/REMOVE';  // todo를 제거함

// 액션 생성함수 정의

// type = CHANGE_INPUT, input = input 인 객체(state)를 반환하는 함수 정의
export const changeInput = input => ({
    type: CHANGE_INPUT,
    input   // = input: input
});

let id = 3; // insert가 호출될 때마다 1씩 증가

// type = INSERT, todo.text = text 인 객체(state)를 반환하는 함수 정의 
export const insert = text => ({
    type: INSERT,
    todo: {
        id: id++,
        text,   // = text: text
        done: false
    }
});

// type = TOGGLE, id = id 인 객체(state)를 반환하는 함수 정의
export const toggle = id => ({
    type: TOGGLE,
    id  // = id: id
});

// type = REMOVE, id = id 인 객체(state)를 반환하는 함수 정의
export const remove = id => ({
    type: REMOVE,
    id  // = id: id
});

// todos 모듈의 초기 상태 정의 : state 정의
const initialState = {
    input: '',
    todos: [
        {
            id: 1,
            text: '리덕스 기초 배우기',
            done: true
        },
        {
            id: 2,
            text: '리액트와 리덕스 사용하기',
            done: false
        }
    ]
};

// todos 리듀서 함수 정의 : todos의 상태를 바꾸는 함수
function todos(state = initialState, action) {
    switch (action.type) {
        case CHANGE_INPUT:
            return {
                ...state,
                // input state 값 변경
                input: action.input
            };
        case INSERT:
            return {
                ...state,
                // todos state에 action.todo 추가
                todos: state.todos.concat(action.todo)
            };
        case TOGGLE:
            return {
                ...state,
                // todos state 중 id가 action.id 인 todo의 done 값 변경
                todos: state.todos.map(todo =>
                    todo.id === action.id ? { ...todo, done: !todo.done } : todo
                )
            };
        case REMOVE:
            return {
                ...state,
                // todos state 중 id가 action.id 인 todo 삭제
                todos: state.todos.filter(todo => todo.id !== action.id)
            };
        default:
            return state;
    }
}

export default todos;