import {
    EDIT_COUPLE,

    ADD_EVENT,
    DELETE_EVENT,
    EDIT_EVENT
} from '../constants/ActionTypes'

const initialState = {
    couple: {
        you: {
            name: ""
        },
        partner: {
            name: ""
        },
        firstDate: null,
    },
    events: [
    /*
        {
            name: "Throwing Inseo off bridges",
            date: ...
            dateNight: false,
            sex: false,
            notes: "",
        },
    */
    ],
};

export default function reducer(state = initialState, action) {
    if(action.type == EDIT_COUPLE) {
        return {
            ...state,
            couple: action.payload.couple,
        };
    } else if(action.type == ADD_EVENT) {
        return {
            ...state,
            events: state.events.concat(action.payload.event),
        };
    }
    return state;
}
