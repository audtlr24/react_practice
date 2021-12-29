const INCREASE = 'counter/INCREASE'; //모듈이름/액션이름 형태로 naming
const DECREASE = 'counter/DECREASE';

export const increase = () => ({type:INCREASE}); // 액션 생성함수 
export const decrease = () => ({type:DECREASE});

const initialization = { //초기함수
    number: 0
};

function counter(state=initialization,action){ // 리듀서 함수
    switch (action.type){
        case INCREASE:
            return{
                number: state.number + 1
            };
        case DECREASE:
            return{
                number: state.number - 1
            };
        default:
            return state;
    }
}

export default counter;