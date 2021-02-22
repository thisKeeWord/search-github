import React, { Component } from 'react';
import styled from 'styled-components'

import Icon from './Icon';
import SearchResultListItem from './SearchResultListItem';
import fakeResults from './fake-results';

const SearchBarStyles = styled.div`
  box-shadow: 3px 3px 3px 3px #373850;
  width: 50%;

  .search {
    display: flex;
    align-items: center;
    width: 100%;

    & > input {
      height: 48px;
      padding: 16px;
      border: none;
      box-sizing: border-box;
      flex: 1;
    }

    & > button {
      height: 48px;
      width: 48px;
      padding: 0;
      background-color: #FF9AAC;
      border: none;
    }
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    height: 384px;
    overflow-y: scroll;
  }
`

class SearchBar extends Component {


  constructor() {
    super();

    this.state = {
      searchTerm: '',
      results: [],
    }
  }

  toggleResults() {
    if (this.state.results.length === 0) {
      this.setState({ results: fakeResults });
    } else {
      this.setState({ results: [] });
    }
  }

  renderResults() {
    return (this.state.results.length)
      ? <ul>
        {
          this.state.results.map((result, index) => (
            <SearchResultListItem
              key={result.id}
              login={result.login}
              avatarURL={result.avatar_url}
              githubURL={result.html_url}
              type={result.type}
            />
          ))
        }
      </ul>
      : null
  }

  componentDidMount() {
    this.toggleResults()
  }

  render() {
    console.log(this.state.results)
    return (
      <SearchBarStyles>
        <div className="search">
          <input
            type="text"
            value={this.state.searchTerm}
            placeholder="Search Users"
          />
          <button
            onClick={(event) => this.toggleResults(event)}
          >
            <Icon className="whiteGlass" />
          </button>
        </div>
        {this.renderResults()}
      </SearchBarStyles>
    );
  }
}

export default SearchBar;
