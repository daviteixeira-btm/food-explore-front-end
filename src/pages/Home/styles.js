import styled from "styled-components";

import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.main`
    width: 100%;
    height: 100%;
    display: grid;
    align-items: center;
    grid-template-columns: auto;  
    grid-template-rows: 11.4rem auto auto auto 7.7rem;
    
    grid-template-areas: 
    "header"
    "content"
    "content"
    "content"
    "footer";
`;

export const Section = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    padding: 4rem 3rem;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    > h2 {
        font-weight: 500;
        font-size: 1.8rem;
        font-style: normal;
        margin-bottom: 2.4rem;
        align-self: flex-start;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    @media(min-width: ${DEVICE_BREAKPOINTS.LAPTOP}){
        width: 100%;
        display: flex;
        padding: 2rem 12.4rem;
        justify-content: center;
    }
`;