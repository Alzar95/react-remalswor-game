import * as reducerType from '../unit/reducerType';
import $ from 'jquery';

export let openTheModalSpellWindow = (openSpellWindow = false) => {

    return {
        type: reducerType.OPEN_THE_MODAL_SPELL_WINDOW,
        payload: { openSpellWindow }
    }
};

export let openTheModalTaskWindow = (spellName, open = false) => {

    return {
        type: reducerType.OPEN_THE_MODAL_TASK_WINDOW,
        payload: { open, spellName }
    }
};

export let  theTaskWindow = (taskName, openTask = false) => {

    return {
        type: reducerType.OPEN_THE_TASK_WINDOW,
        payload: { openTask, taskName }
    };
};


export let showTheBattlefield = (openSpellWindow = true, open = true, openTask = true) => {
    $(function () {
        $(".main-content").css("display", "block");
    });

    return [{
        type: reducerType.OPEN_THE_MODAL_SPELL_WINDOW,
        payload: {openSpellWindow}
    },
        {
        type: reducerType.OPEN_THE_MODAL_TASK_WINDOW,
        payload: {open}
    },
        {
            type: reducerType.OPEN_THE_TASK_WINDOW,
            payload: {openTask}
        }];
};