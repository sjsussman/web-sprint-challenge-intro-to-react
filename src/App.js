import React from 'react';
import './App.css';
import Character from './components/Character'
import styled, {keyframes} from 'styled-components'


const titleAnimation = keyframes`
  
  30%{
    transform: scale(0.5);
  }
  60% {
    transform: scale(1.5);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`

const StyledContainer = styled.div`
background: ${pr => pr.theme.backgroundColor};
`
const StyledH1 = styled.h1`
font-size: 5rem;
text-align: center;
color: ${pr => pr.theme.titleColor};
animation: ${titleAnimation} 5s;
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
