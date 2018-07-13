import React from 'react';
import Modal from 'react-modal';
import Arithmetic from './tasks/Arithmetic';
import Listening from './tasks/Listening';
import {connect} from "react-redux";
import { theTaskWindow } from '../actions/index';
import './ModalTaskWindow.scss'

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    }
};

class ModalTaskWindow extends React.Component {
    constructor() {
        super();

        this.state = {
            modalIsOpen: true
        };
    }

    render() {
        if(this.props.taskWindowIsOpen._root.entries[2][1].openTask) {
            return (
                <div>
                    <Modal
                        isOpen={this.state.modalIsOpen}
                        style={customStyles}
                    >

                        <h2 className="task-selection-header" ref={subtitle => this.subtitle = subtitle}>Задачи</h2>

                        <form className="list-tasks">
                            <ul>
                                <li className="button-item">
                                  <a onClick={() => this.theTaskWindow('arithmetic')} className="btn-task-1">Арифметика</a>
                                </li>
                                <li className="button-item">
                                    <a onClick={() => this.theTaskWindow('listening')} className="btn-task-2">Аудирование</a>
                                </li>
                            </ul>
                        </form>
                    </Modal>
                </div>
            );
        } else {
            if(this.props.taskWindowIsOpen._root.entries[2][1].taskName === "arithmetic") {
                return (
                    <div>
                        <Arithmetic/>
                    </div>
                )
            } else if(this.props.taskWindowIsOpen._root.entries[2][1].taskName === "listening") {
                return (
                    <div>
                        <Listening/>
                    </div>
                )
            }
        }
    }

    theTaskWindow = (p) => this.props.dispatch(theTaskWindow(p));
}

ModalTaskWindow.propTypes = {};

function mapStateToProps(state) {
    return {
        taskWindowIsOpen: state
    }
}

export default connect(mapStateToProps)(ModalTaskWindow);