import { combineReducers } from 'redux-immutable';
import modalSpellWindowIsOpen from './modalSpellWindowIsOpen';
import modalTaskWindowIsOpen from './modalTaskWindowIsOpen';
import taskWindowIsOpen from './taskWindowIsOpen';

const rootReducer = combineReducers({
    modalSpellWindowIsOpen,
    modalTaskWindowIsOpen,
    taskWindowIsOpen
});

export default rootReducer;