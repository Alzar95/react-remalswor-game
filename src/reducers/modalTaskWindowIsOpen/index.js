import * as reducerType from '../../unit/reducerType';

let initialState = { open: true, spellName: "" };

const modalTaskWindowIsOpen = (state = initialState, action) => {
    switch(action.type) {
        case reducerType.OPEN_THE_MODAL_TASK_WINDOW:
            return { open: action.payload.open, spellName: action.payload.spellName };
        default:
            return state;
    }
};

export default modalTaskWindowIsOpen;