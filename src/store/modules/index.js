import { combineReducers } from "redux";
import manage from "./manage";

/*
 * combineReducers : 여러개의 리듀서를 하나로 합쳐주는 역할
 * 여러개의 나뉘어진 리듀서 : 서브리듀서, 하나로 합쳐진 리듀서 : 루트리듀서
 */

export default combineReducers({
    manage,
    //다른 리듀서를 만들게되면 여기에 넣어준다
})

/* 합치면 초기값이 아래처럼..
{
    counter: {
        color: "red",
        number: 0,
    },
    //다른 리듀서 초기값들
}
 */