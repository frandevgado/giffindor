import styled from 'styled-components'
import { Link } from 'wouter'

const StyledLogoLink = styled(Link)`
    margin-bottom: .5em;
    margin-top: 1em;

    font-family: 'Montserrat';
    font-size: calc(2em + 2vmin);
    font-weight: 600;
    color: hsl(360, 65%, 50%);
    text-decoration: none;
    text-align: center;

`

export default StyledLogoLink