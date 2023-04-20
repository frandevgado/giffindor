import styled from "styled-components";

const GifsContainer = styled.section`
  box-sizing: border-box;
  margin: 0 auto;
  width: 100%;
  min-height: 100vh;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 250px;
  grid-gap: 8px;
  align-items: center;

  @media screen and (max-width: 640px) {
    background-color: green;

    grid-auto-rows: 250px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }

@media screen and (min-width: 641px) and (max-width: 1280px) {

  :root {
    grid-auto-rows: 250px;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
  


`

export default GifsContainer