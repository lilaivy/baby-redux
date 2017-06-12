import { CHANGE_GREETING, CHANGE_NAME } from '../constants/constant';



const initialState = {
    name: 'Stranger',
    greeting: 'What up '
};

export default function GreetingApp(state = initialState, action) {
    switch (action.type) {
        case CHANGE_GREETING:
            return {
                ...state,
                greeting: action.payload
            };
        case CHANGE_NAME:
            return {
                ...state,
                name: action.payload
            };
        default:
            return state;
    }
}