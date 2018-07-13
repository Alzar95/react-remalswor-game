import * as reducerType from '../../unit/reducerType';

let initialState = {openTask: true, taskName: ""};

const taskWindowIsOpen = (state = initialState, action) => {
    switch(action.type) {
        case reducerType.OPEN_THE_TASK_WINDOW:
            return { openTask: action.payload.openTask, taskName: action.payload.taskName };
        default:
            return state;
    }
};

export default taskWindowIsOpen;