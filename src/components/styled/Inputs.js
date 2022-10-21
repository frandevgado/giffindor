import styled from "styled-components";

const StyledForm = styled.form`
    display: flex;
    align-items: center;
`

const StyledButton = styled.button`
    padding: .7em;
    border-style: none;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    background-color: #07f;

    font-family: 'Montserrat';
    font-weight: 600;
    color: white;

    &:active{
        background-color: #09f;
    }
`

const StyledInput = styled.input`
    border-style: none;
    outline: none;
    padding: .7em;
    border-radius: ${props => props.search ?
        "5px 0px 0px 5px" : "0px"};

    font-family: 'Montserrat';

    &:focus{
        outline: solid 1px #07f;
        outline-offset: -2px;
    }
`

export {StyledButton, StyledInput, StyledForm}