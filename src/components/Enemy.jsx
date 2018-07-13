import React, { Component } from 'react';
import "./Enemy.scss";

class Enemy extends Component {
    render() {
        return (
            <svg className="enemy">
                <circle cx="90" cy="100" r="30" fill="yellow">
                    <animate attributeName="cy" dur="2s" repeatCount="indefinite" values="100; 90; 100"/>
                </circle>
                <circle cx="65" cy="90" r="5" fill="red">
                    <animate attributeName="cy" dur="2s" repeatCount="indefinite" values="95; 85; 95"/>
                </circle>
                <circle cx="80" cy="90" r="5" fill="red">
                    <animate attributeName="cy" dur="2s" repeatCount="indefinite" values="95; 85; 95"/>
                </circle>
                <line x1="90" y1="100" x2="90" y2="250" stroke="yellow" stroke-width="8" />
                <polyline points="90,130 70,185 45,185" fill="none" stroke="yellow" stroke-width="8"/>
                <polyline points="90,130 130,155 105,185" fill="none" stroke="yellow" stroke-width="8"/>
                <line x1="90" y1="250" x2="70" y2="300" stroke="yellow" stroke-width="8" />
                <line x1="90" y1="250" x2="110" y2="300" stroke="yellow" stroke-width="8" />
            </svg>
        )
    }
}

export default Enemy;