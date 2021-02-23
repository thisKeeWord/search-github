import React, { Component } from 'react';
import styled from 'styled-components'
import axios from 'axios'

import Icon from './Icon';
import SearchResultListItem from './SearchResultListItem';

const url = 'https://api.github.com/search/users'

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

      &:focus {
        outline: none;
      }
    }

    & > button {
      height: 48px;
      width: 48px;
      padding: 0;
      background-color: #FF9AAC;
      border: none;

      &:focus {
        outline: none;
      }
    }
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    max-height: 384px;
    overflow-y: scroll;
  }
`

class SearchBar extends Component {
  constructor() {
    super();

    this.state = {
      searchTerm: '',
      results: [],
      error: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.toggleResults = this.toggleResults.bind(this);

  }

  async toggleResults(event) {
    event.preventDefault();

    try {
      const users = await axios.get(`${url}?q=${this.state.searchTerm}`)
      this.setState({ results: users.data.items, error: '' })
    } catch (error) {
      this.setState({ results: [], error: error.message })
    }
  }

  handleChange(event) {
    this.setState({ searchTerm: event.target.value });
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

  render() {
    return (
      <SearchBarStyles>
        {this.state.error && <span>{this.state.error}</span>}
        <form className="search" onSubmit={this.toggleResults}>
          <input
            type="text"
            value={this.state.searchTerm}
            placeholder="Search Users"
            onChange={this.handleChange}
          />
          <button
            onClick={this.toggleResults}
          >
            <Icon className="whiteGlass" />
          </button>
        </form>
        {this.renderResults()}
      </SearchBarStyles>
    );
  }
}

export default SearchBar;
