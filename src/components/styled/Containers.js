import styled from "styled-components";

const XAlignDiv = styled.div`
    width: ${props => props.detailSize ? "fit-contain" : null};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    @media screen and (max-width: 640px){
        width: 90%;
    }
`

const MainContainer = styled.section`
    margin-top: 40px;
    width: 90vw;
    min-height: 130vh;
    display: grid;
    grid-template-columns: 80vw 1fr;
    justify-content: center;
    gap: 26px;

    @media screen and (max-width: 996px){
        grid-template-columns: 90vw;
        grid-template-rows: 1fr;
    }
`

export { XAlignDiv, MainContainer }