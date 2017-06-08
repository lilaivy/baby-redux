import * as actions from '../constants/constant';

export function changeGreeting(payload) {
    return {
        type: actions.CHANGE_GREETING,
        payload
    };
}

export function changeName(payload) {
    return{
        type: actions.CHANGE_NAME,
        payload
    };
}