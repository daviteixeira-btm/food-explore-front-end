import styled from "styled-components";

import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.aside`
    z-index: 1;
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-columns: auto;  
    grid-template-rows: 11.4rem auto 7.7rem;
    
    grid-template-areas: 
    "header"
    "menu"
    "footer";

    position: absolute;
    flex-direction: column;
    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;
    background-color: ${({ theme }) => theme.COLORS.DARK_400};

    &[data-menu-is-open="true"]{
        transform: translateX(0);
    }

    @media(min-width: ${DEVICE_BREAKPOINTS.LAPTOP}){
        display: none;
    }
`;

export const Header = styled.header`
    width: 100%;
    gap: 0.5rem;
    display: flex;
    height: 11.4rem;
    grid-area: header;
    align-items: center;
    padding: 5.6rem 2.4rem 2.8rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_700};

    > h1 {
        font-size: 2rem;
        font-weight: 400;
        font-family: 'Roboto', sans-serif;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
`;

export const Button = styled.button`
    border: none;
    display: flex;
    align-self: center;
    background-color: transparent;

    > svg {
        padding: 0;
        font-size: 3rem;
        font-weight: 700;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
`;

export const Nav = styled.nav`
    padding: 1rem;
    grid-area: menu;
    align-items: baseline;
    margin: 3.6rem 2.8rem;
    border-bottom: 1px solid #192227;

    > ul {
        > li {
            > a {
                font-size: 2.4rem;
                color: ${({ theme }) => theme.COLORS.LIGHT_100};
            }
        }
    }
`;