import styled from "styled-components";

import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.header`
    width: 100%;
    display: flex;
    height: 11.4rem;
    grid-area: header;
    padding: 5.6rem 2.4rem 2.8rem;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.COLORS.DARK_700};

    @media(min-width: ${DEVICE_BREAKPOINTS.LAPTOP}){
        padding: 3.7rem 12.3rem;
    }
`;

export const Menu = styled.button`
    border: none;
    display: block;
    background: none;

    > svg {
        font-size: 3rem;
        font-weight: 700;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    @media(min-width: ${DEVICE_BREAKPOINTS.LAPTOP}){
        display: none;
    }
`;