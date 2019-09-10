import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setSearchField, requestMonsters } from './redux/actions';
import CardList from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

const mapStateToProps = state => {
  return{
    searchField: state.setSearchField.searchField,
    monsters: state.requestMonsters.monsters,
    isPending: state.requestMonsters.isPending,
    error: state.requestMonsters.error,
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRquestMonsters: () => dispatch(requestMonsters())
  }
}

class App extends Component {

  componentDidMount() {
    this.props.onRquestMonsters();
  }

  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { searchField, monsters, ispending } = this.props;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className='App'>
        <h1>Monsters Rolodex</h1>
        <SearchBox onSearchChange={this.props.onSearchChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);