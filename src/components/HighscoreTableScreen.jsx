import React, { Component } from 'react';
import './HighscoreTableScreen.scss';

class HighscoreTableScreen extends Component {
    render() {
        return (
            <div className="highscore-table-screen-2">
                <span>Game over</span>
                <button onClick={() => location.reload()}>Try again</button>
                <div className="highscore-table">
                    <table>
                        <tr>
                            <th>Name hero</th>
                            <th>Killed monsters</th>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }
}

export default HighscoreTableScreen;