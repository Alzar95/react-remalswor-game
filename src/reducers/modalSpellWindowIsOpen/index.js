import * as reducerType from '../../unit/reducerType';

let initialState = true;

const modalSpellWindowIsOpen = (state = initialState, action) => {
    switch(action.type) {
        case reducerType.OPEN_THE_MODAL_SPELL_WINDOW:
            return action.payload.openSpellWindow;
        default:
            return state;
    }
};

export default modalSpellWindowIsOpen;