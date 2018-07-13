import React from 'react';
import {connect} from "react-redux";
import ModalSpellWindow from './ModalSpellWindow';
import { openTheModalSpellWindow } from '../actions/index';
import './SpellSelectionButton.scss'

class SpellSelectionButton extends React.Component {
    render() {
        if (this.props.modalSpellWindowIsOpen2._root.entries[0][1]) {
            return (
                <div>
                    <button className="spell-selection-button spell-selection-button-animation"
                            onClick={this.openTheModalSpellWindow}>SPELL SELECTION!
                    </button>
                </div>
            );
        } else {
            return (
                <div>
                    <ModalSpellWindow/>
                </div>
            )
        }
    }

    openTheModalSpellWindow = () => this.props.dispatch(openTheModalSpellWindow());
}

SpellSelectionButton.propTypes = {};

function mapStateToProps(state) {
    return {
        modalSpellWindowIsOpen2: state
    }
}

export default connect(mapStateToProps)(SpellSelectionButton);