import {
    EDIT_COUPLE,

    ADD_DATE,
    DELETE_DATE,
    EDIT_DATE
} from '../constants/ActionTypes'

const initialState = {
    couple: {
        you: {
            name: ""
        },
        partner: {
            name: ""
        },
        fistDate: ""
    },
    dates: [
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
    switch(action.type) {
        case EDIT_COUPLE:
            return {
                ...state,
                couple: action.couple,
            };
        case ADD_DATE:
            return {
                ...state,
                dates: dates.concat(action.date),
            };
    }
}