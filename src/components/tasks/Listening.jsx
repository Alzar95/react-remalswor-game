import React, { Component } from 'react';
import $ from 'jquery';
import { showTheBattlefield } from '../../actions/index';
import {connect} from "react-redux";
import functions from '../../control/index'
import './Listening.scss';

class Listening extends Component {
    randomInteger(min, max) {
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        rand = Math.round(rand);
        return rand;
    }

    render() {
        let that = this;
        let arrayForAudioWords = ['яблоко', 'ураган', 'шар', 'мандарин'];
        let randomWordForAudio = arrayForAudioWords[this.randomInteger(0, arrayForAudioWords.length - 1)];

        $(function () {
            $(".main-content").css("display", "none");
        });

        function comparisonOfTheSpokenWord() {
            let valueFromTheField = document.getElementsByClassName('field-for-the-answer')[0].value;

            if (randomWordForAudio === valueFromTheField) {
                functions.spellHero(that.props.modalSpellWindowIsOpen._root.entries[1][1].spellName);

                if (that.props.modalSpellWindowIsOpen._root.entries[1][1].spellName === 'fireball') {
                    functions.attackOfTheHero();
                } else if (that.props.modalSpellWindowIsOpen._root.entries[1][1].spellName === 'medical-rain') {
                    functions.treatmentHero();
                }
            } else {
                functions.attackOfTheEnemy();
            }

            return that.showTheBattlefield();
        }

        function speechSynthesis() {
            if ('speechSynthesis' in window) window.speechSynthesis.speak(new SpeechSynthesisUtterance('' + randomWordForAudio))
        }

        return (
            <div className="task-listening">
                <div className="listening">
                    <input type="button" value="Прослушать" onClick={speechSynthesis}/>
                    <input type="text" class="field-for-the-answer"/>
                    <input type="button" value="OK"  onClick={comparisonOfTheSpokenWord} />
                </div>
            </div>
        );
    }

    showTheBattlefield = () => this.props.open();
}

Listening.propTypes = {};

function mapStateToProps(state) {
    return {
        modalSpellWindowIsOpen: state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        open: () => { dispatch(showTheBattlefield()[0]); dispatch(showTheBattlefield()[1]); dispatch(showTheBattlefield()[2]); }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Listening);