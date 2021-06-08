import React, { Component } from 'react';

export default class Fetcher extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      pokemon: null,
    };
  }

  async componentDidMount() {
    const URL = 'https://pokeapi.co/api/v2/pokemon';
    const response = await fetch(URL);
    const data = await response.json();
    this.setState({ pokemon: data.results, loading: false });
    console.log(this.state.pokemon);
  }

  render() {
    return (
      <div>
        {this.state.loading || !this.state.pokemon ? (
          <div>Loading...</div>
        ) : (
          <div>
            {this.state.pokemon.map((pokemon, index) => {
              return <div key={index}>{pokemon.name}</div>;
            })}
          </div>
        )}
      </div>
    );
  }
}
