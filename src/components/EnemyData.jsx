import React from 'react';
import 'jquery-ui-dist/jquery-ui.min';
import 'jquery-ui-dist/jquery-ui.min.css';
import functions from '../control/index';
import './EnemyData.scss';
import $ from "jquery";

$(function () {
    functions.nameGeneration();
    functions.depictionOfTheEnemy();

    $(".progressbar-for-enemy").progressbar({
        value: 100
    }).find(".ui-progressbar-value").css({
        "background": '#003eff'
    });
});

class EnemyData extends React.Component {
    render() {
        return (
            <div className="data-on-the-enemy">
                <span className="character-names name-of-the-enemy"/>
                <div className="progressbar-for-enemy"/>
            </div>
        )
    }
}

export default EnemyData;