import React from 'react'
import styled from 'styled-components'

const SearchResultStyles = styled.li`
  background-color: #F2F2F6;
  height: 96px;
  border-top: 1px solid #CECEDF;
  

  a {
    display: flex;
    text-decoration: none;

    &:hover {
      background-color: #EBECEE;
    }

    & > img {
      height: 64px;
      width: 64px;
      margin: 16px;
    }

    & > .description {
      display: flex;
      flex-direction: column;
      justify-content: center;

      & > .login {
        color: #5B5894;
      }

      & > .github {
        color: #7D7D9E;
        font-size: 12px;
      }
    }
  }
`

export default function SearchResultListItem({
  login,
  avatarURL,
  githubURL,
}) {
  return (
    <SearchResultStyles>
      <a href={githubURL} target="_blank">
        <img src={avatarURL} alt="avatar" />
        <div className="description">
          <span className="login">{login}</span>
          <span className="github">{githubURL}</span>
        </div>
      </a>
    </SearchResultStyles>
  )
}
