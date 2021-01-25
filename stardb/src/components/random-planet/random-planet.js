import React, { Component } from 'react';

import './random-planet.css';

export default class RandomPlanet extends Component {
    render() {
        return (
            <div className="random-planet junbotron round">
                <img className="planet-image" src="https://starwars-visualguide.com/assets/img/planets/5.jpg" alt="Dagobah" />
            </div>
        )
    }
}