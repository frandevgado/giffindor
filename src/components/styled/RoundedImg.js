import styled from "styled-components"

const RoundedImg = styled.img`
    border-radius: 10%;
    width: 250px;
    height: 250px;
    object-fit: cover;
    transition: transform .3s ease-out;

    &:hover{
        transform: scale(1.05)
    }
    &:active{
        transform: scale(0.95)
    }
`

export default RoundedImg