import styled from "styled-components";

import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.main`
    width: 100%;
    height: 100vh;
    display: grid;
    align-items: center;
    grid-template-columns: auto;  
    grid-template-rows: 11.4rem auto 7.7rem;
    
    grid-template-areas: 
    "header"
    "content"
    "footer";
`;

export const Section = styled.section`
    width: 100%;
    height: 100%;
    padding: 4rem 3rem;

    @media(min-width: ${DEVICE_BREAKPOINTS.LAPTOP}){
        width: 100%;
        display: flex;
        padding: 0 12.4rem;
        justify-content: center;
    }
`;