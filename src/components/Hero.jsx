import React, { Component } from 'react';
import './Hero.scss';

class Hero extends Component {
    render() {
        return (
        <svg className="hero">
            <circle cx="90" cy="100" r="30" fill="black">
                <animate attributeName="cy" dur="2s" repeatCount="indefinite" values="100; 90; 100"/>
            </circle>
            <circle cx="115" cy="90" r="5" fill="red">
                <animate attributeName="cy" dur="2s" repeatCount="indefinite" values="95; 85; 95"/>
            </circle>
            <circle cx="100" cy="90" r="5" fill="red">
                <animate attributeName="cy" dur="2s" repeatCount="indefinite" values="95; 85; 95"/>
            </circle>
            <line x1="90" y1="100" x2="90" y2="250" stroke="black" stroke-width="8" />
            <polyline points="90,130 50,155 75,185" fill="none" stroke="black" stroke-width="8"/>
            <polyline points="90,130 110,185 135,185" fill="none" stroke="black" stroke-width="8"/>
            <line x1="90" y1="250" x2="70" y2="300" stroke="black" stroke-width="8" />
            <line x1="90" y1="250" x2="110" y2="300" stroke="black" stroke-width="8" />
        </svg>
    )
    }
}

export default Hero;