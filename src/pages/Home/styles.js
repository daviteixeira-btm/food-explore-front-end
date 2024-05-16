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