import React from 'react';
import './App.css';
import Character from './components/Character'
import styled from 'styled-components'

const StyledContainer = styled.div`
background: black;
`

const App = () => {
//app(mainpage) -> character(loop, create props) ->charactercard (append props create object) // stretch?
  return (
    <StyledContainer>
      <h1>Rick & Morty Characters</h1>
      <Character />
    </StyledContainer>
  );
}

export default App;
