// Code The Spaceship Component Here
import React from 'react';

class Spaceship extends React.Component {
  renderColors() {
    return this.props.colors.map(color => {
      const currentKey = `${this.props.name.replace(/\s/g,'')}${color.toUpperCase()}`;
      return <li key={currentKey}>{color}</li>;
    });
  }

  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>{this.props.speed}</p>
        <p>{this.props.hasRockets.toString()}</p>
        <ul>
          {this.renderColors()}
        </ul>
      </div>
    );
  }
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red'],
};

export default Spaceship;
