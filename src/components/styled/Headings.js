import styled from "styled-components";

const Title = styled.h1`
    color: hsl(0, 70%, 50%);
    font-size: 4em;
`

const Subtitle = styled.h3`
    align-self: ${props => props.left ? "flex-start" : ""};
    display: inline-block;
    width: fit-content;
    margin: ${props => props.topMargin ? "2em 0em 1em" : "1em 0em"};
    padding: 0;
    color: white;
    font-family: 'Montserrat';
    font-size: 1.7em;
    font-weight: bold;

    @media screen and (max-width: 996px){
        align-self: center;
    }
`


export {Subtitle, Title}