// 액션 타입 정의 : 대문자로 정의하고 '모듈이름/액션이름' 형태로 작성 (액션이름 충돌 방지)
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 액션 생성 함수 : 'export'해야 이 함수를 다른 파일에서 불러와 사용 가능하다.
// 불러오는 방식 : import { increase, decrease } from './counter';
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

// counter 모듈의 초기 상태 정의
const initialState = {
    number: 0
};

// 리듀서 함수 정의
function counter(state = initialState, action) {
    switch (action.type) {
        case INCREASE:
            return {
                number: state.number + 1
            };

        case DECREASE:
            return {
                number: state.number - 1
            };

        default:
            return state;
    }
}

// export default 는 단 한 개만 내보낼 수 있다.
// 불러오는 방식 : import counter from './counter';
export default counter;