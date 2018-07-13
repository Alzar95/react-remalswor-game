import React, { Component } from 'react';
import ModalSpellWindow from '../components/ModalSpellWindow';
import SpellSelectionButton from '../components/SpellSelectionButton';
import HeroData from '../components/HeroData';
import EnemyData from '../components/EnemyData';
import Hero from '../components/Hero';
import Enemy from '../components/Enemy';
import HighscoreTableScreen from '../components/HighscoreTableScreen';
import {connect} from "react-redux";
import './game.css';

class App extends Component {
    render() {
        return (
            <div>
                <div className="highscore-table-screen">
                    <HighscoreTableScreen/>
                </div>
                <div className="modal-spell-selection-window">
                    <SpellSelectionButton/>
                    <div className="main-content">
                        <HeroData/>
                        <EnemyData/>
                        <Hero/>
                        <div className="main-central-field"/>
                        <Enemy/>
                        <div className="field-for-therapeutic-rain"/>
                    </div>
                </div>
            </div>
        )
    }
}

App.propTypes = {};

function mapStateToProps(state) {
    return {
        modalSpellWindowIsOpen: state
    }
}

export default connect(mapStateToProps)(App);