import React from 'react';
import $ from 'jquery';
import 'jquery-ui-dist/jquery-ui.min';
import 'jquery-ui-dist/jquery-ui.min.css';
import './HeroData.scss';

$(function () {
    $(".progressbar-for-hero").progressbar({
        value: 100
    }).find(".ui-progressbar-value").css({
        "background": '#003eff'
    });
});

class PlayerData extends React.Component {
    render() {
        return (
            <div className="data-on-the-hero">
                <span className="character-names">Remalswor</span>
                <div className="progressbar-for-hero"/>
            </div>
        )
    }
}

export default PlayerData;