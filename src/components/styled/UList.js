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
    display: flex;
    gap: 3px;
    align-items: center;
    flex-direction: column;
`

const StyledTrendLink = styled(Link)`
    list-style-type: none;
    color: white;
`

export {UList, StyledTrendLink, TrendUList}