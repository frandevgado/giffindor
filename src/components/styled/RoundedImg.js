import styled from "styled-components"

const GifImg = styled.img`
    width: 100%;
    height: 100%;
    margin-bottom: 0;
    object-fit: cover;
    transition: transform .3s ease-out;

    
    &:hover{
        transform: scale(1.05)
    }
    &:active{
        transform: scale(0.95)
    }

@media screen and (max-width: 45rem){

}
`

export default GifImg