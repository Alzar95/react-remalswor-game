import React from 'react';
import Modal from 'react-modal';
import ModalTaskWindow from './ModalTaskWindow';
import { connect }from 'react-redux';
import { openTheModalTaskWindow } from '../actions/index';
import $ from 'jquery';
import './ModalSpellWindow.scss';

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

class ModalSpellWindow extends React.Component {
    constructor() {
        super();

        this.state = {
            modalIsOpen: true
        };
    }

    render() {
        $(function () {
            $(".ReactModal__Overlay").css("background-color", "rgba(255, 255, 255, 0)");
        });

        if (this.props.modalSpellWindowIsOpen._root.entries[1][1].open) {
            return (
                <div>

                    <Modal
                        isOpen={this.state.modalIsOpen}
                        style={customStyles}
                    >
                        <h2 className="spell-selection-header"
                            ref={subtitle => this.subtitle = subtitle}>Заклинания</h2>
                        <div className="button-item">
                            <a onClick={() => this.openTheModalTaskWindow('fireball')} className="btn-1">Fireball</a>
                        </div>
                        <div className="button-item">
                            <a onClick={() => this.openTheModalTaskWindow('medical-rain')} className="btn-2">Medical rain</a>
                        </div>
                    </Modal>
                </div>
            );
        } else {
            return (
                <div>
                    <ModalTaskWindow/>
                </div>
            )
        }
    }

    openTheModalTaskWindow = (p) => this.props.dispatch(openTheModalTaskWindow(p));
}

ModalSpellWindow.propTypes = {};

function mapStateToProps(state) {
    return {
        modalSpellWindowIsOpen: state
    }
}

export default connect(mapStateToProps)(ModalSpellWindow);