import styled from "styled-components";
import { Link } from "wouter";

const UList = styled.ul`
    margin: 0;
    padding: 0;
    list-style-type: none;
    
    display: flex;
    flex-direction: column;
    align-items: center;
`

const TrendUList = styled.ul`
    padding: 0;
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    gap: 3px 6px;
    justify-content: center;

    @media (min-width: 996px){
        flex-direction: column;
    }
`

const Section = styled.section`
    width: 100%;
    height: fit-content;
    
    display: flex;
    flex-direction: column;
    align-items: center;
`

const StyledTrendLink = styled(Link)`
    width: fit-content;
    background-color: #222;
    color: white;
    list-style-type: circle;
    font-size: 1.2em;
    transition: color 300ms;

    &:hover{
        color: hsl(360, 65%, 50%);
    }
`

export {Section, UList, StyledTrendLink, TrendUList}