import React, { Component } from 'react';
import mock from './helpers/mockdata';
import './styles/App.scss';

import Navigation from './Nav';
import MainContainer from './MainContainer';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      page: 'user',
      searchTerm: '',
      sketches: [],
      group: [],
      oldest: false

    };
  }

  componentWillMount(){
    this.setState({ sketches: mock.sketches, group: mock.users });
  }

  changePageType(input){
    this.setState({ page: input });
  }

  changeSeachTerm(input){
    this.setState({ searchTerm: input });
  }

  toggleOld(){
    this.setState({ oldest: !this.state.oldest });
  }



  render(){
    return (
      <main>
        <button
          onClick={() => this.setState({ oldest: !this.state.oldest })}>
          Oldest
        </button>

        <Navigation
          changePage={(n) => this.changePageType(n)}
          searchTerm={(s) => this.changeSeachTerm(s)}
        />
        <MainContainer
          searchTerm={this.state.searchedTerm }
          pageType={ this.state.page }
          sketches={ this.state.sketches }
          groupMembers={ this.state.group }
          oldest={ this.state.oldest }
        />
        <h2>{ this.state.searchTerm }</h2>
      </main>
    );
  }
}
