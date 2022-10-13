import styled from "styled-components"

const GifImg = styled.img`
    vertical-align: top;
    width: 100%;
    height: 100%;
    margin-bottom: 0;
    object-fit: cover;
    transition: transform .3s ease-out;

    &:nth-child(6n + 1) {
      grid-column: span 2;
      grid-row: span 1;
    }

    &:nth-child(8n+1) {
	  grid-column-end: span 2;
	  grid-row-end: span 2;
    }

    &:nth-child(9n + 3) {
	  grid-column: span 2;
	  grid-row: span 1;
    }
    

    &:hover{
        transform: scale(1.05)
    }
    &:active{
        transform: scale(0.95)
    }

@media screen and (max-width: 45rem)
{
  &:nth-child(11n + 1),
  &:nth-child(8n+1),
  &:nth-child(10n + 3) {
    grid-column: span 1;
    grid-row: span 1;
  }
`

export default GifImg