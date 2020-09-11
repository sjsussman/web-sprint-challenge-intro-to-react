import React from 'react'
import styled, {keyframes} from 'styled-components'

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const CardContainer = styled.div`
display: flex;
flex-direction: column;
border-bottom: 3px double red;
justify-content: center;
align-items: center;
`
const StyledH2 = styled.h2`
font-size: ${pr => pr.theme.nameSize};
text-decoration: underline;
color: ${pr => pr.theme.white};

transition: all 0.3s ease-in-out;
&:hover {
transition: all 0.3s ease-in-out;
color: ${pr => pr.theme.primaryColor};
}
`

const Image = styled.img`
&:hover{
animation: ${spin} 3s;
}
`

const StyledH3 = styled.h3`
font-size: ${pr => pr.theme.infoSize};
margin: ${pr => pr.theme.infoMargin};
color: ${pr => pr.theme.white};
`
const StyledSpan = styled.span`
color: ${pr => pr.theme.primaryColor};
`

const Spoiler = styled.span`
opacity: 0;

&:hover {
    opacity: 1;
    transition: 1s;
}
`

const Break = styled.div`
margin: 2%;
`




const CharacterCard = (props) => {
    return(
        <CardContainer>
            <StyledH2>{props.name}</StyledH2>
            <Image src = {props.photo} alt = 'character img' />
            <StyledH3><StyledSpan>Last Known Location:</StyledSpan> {props.location.name}</StyledH3>
            <StyledH3><StyledSpan>Status: </StyledSpan><Spoiler>{props.status}</Spoiler></StyledH3>
            <StyledH3><StyledSpan>Gender: </StyledSpan>{props.gender}</StyledH3>
            <StyledH3><StyledSpan>Species: </StyledSpan>{props.species}</StyledH3>
            <Break></Break>
        </CardContainer>
    );
}

export default CharacterCard;