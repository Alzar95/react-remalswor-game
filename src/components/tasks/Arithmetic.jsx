import React, { Component } from 'react';
import $ from 'jquery';
import { showTheBattlefield } from '../../actions/index';
import {connect} from "react-redux";
import functions from '../../control/index';
import './Arithmetic.scss';

class Arithmetic extends Component {
    randomInteger(min, max) {
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        rand = Math.round(rand);
        return rand;
    }

    render() {
        let that = this;
        let firstNumber = this.randomInteger(0, 20);
        let secondNumber = this.randomInteger(0, 20);
        let arraySigns = ['+', '-', '*'];
        let randElementArraySign = Math.floor(Math.random() * arraySigns.length);
        let stringNumericResult = '' + firstNumber + arraySigns[randElementArraySign] + secondNumber;

        let numericResult = eval(stringNumericResult);

        $(function () {
            $(".main-content").css("display", "none");
        });

        function comparisonOfNumbers() {
            let valueFromTheField = document.getElementsByClassName('field-for-the-answer')[0].value;

            if (numericResult === +valueFromTheField) {
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

        return (
            <div className="task-arithmetic">
                <div className="arithmetic">
                    {stringNumericResult + ' = '}<input type="text" className="field-for-the-answer"/>
                    <input type="button" value="OK" onClick={comparisonOfNumbers}/>
                </div>
            </div>
        );
    }

    showTheBattlefield = () => this.props.open();
}

Arithmetic.propTypes = {};

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

export default connect(mapStateToProps, mapDispatchToProps)(Arithmetic);