 import {
    EDIT_COUPLE,

    ADD_EVENT,
    DELETE_EVENT,
    EDIT_EVENT,
    RESET_ALL,
} from '../constants/ActionTypes'

import moment from 'moment'

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

function isSameDay(d1, d2) {
    return moment(d1).format('DD/MM/YYYY') === moment(d2).format('DD/MM/YYYY')
}

export default function reducer(state = initialState, action) {
    if(action.type == EDIT_COUPLE) {
        return {
            ...state,
            couple: action.payload.couple,
        };
    } else if(action.type == ADD_EVENT) {
        return {
            ...state,
            events: state.events
            // Remove previous event (if any) on same day
            // because we don't want more than one event per day
            .filter((event) => {
                return !isSameDay(event.date, action.payload.event.date);
            })
            // Add new event data
            .concat(action.payload.event),
        };
    } else if(action.type == DELETE_EVENT) {
        return {
            ...state,
            // Remove event on a given day
            events: state.events.filter((event) => {
                return !isSameDay(event.date, payload.date);
            })
        };
    }
    if(action.type == RESET_ALL) {
        return {
            ...initialState,
        };
    }
    return state;
}
