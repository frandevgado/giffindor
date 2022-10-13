import styled from "styled-components";

const GifsContainer = styled.section`
  display: grid;
  width: 100%;
  min-height: 100vh;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 250px;
  grid-template-rows: masonry;
  grid-auto-flow: row dense;
  grid-gap: 6px;
  gap: 8px;
  align-items: center;

  @media screen and (min-width: 37.5rem) {
    grid-auto-rows: 200px;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  }


@media screen and (min-width: 60rem) {
  :root {
    grid-auto-rows: 210px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`

export default GifsContainer