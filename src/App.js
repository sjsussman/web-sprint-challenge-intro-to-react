import React from 'react';
import './App.css';
import Character from './components/Character'
import styled from 'styled-components'

const StyledContainer = styled.div`
background: ${pr => pr.theme.backgroundColor};
`
const StyledH1 = styled.h1`
font-size: 5rem;
text-align: center;
color: ${pr => pr.theme.titleColor}
`

const App = () => {
//app(mainpage) -> character(loop, create props) ->charactercard (append props create object) // stretch?
  return (
    <StyledContainer>
      <StyledH1>Rick & Morty Characters</StyledH1>
      <Character />
    </StyledContainer>
  );
}

export default App;
