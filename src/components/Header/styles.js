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

    > div {
        display: none;
    }

    > button:nth-child(4), > button:nth-child(5) {
        display: none;
    }

    @media(min-width: ${DEVICE_BREAKPOINTS.LAPTOP}){
        padding: 0;
        align-items: center;
        justify-content: space-around;

        div {
            margin: 0;
            width: auto;
            display: flex;

            > label {
                display: none;
            }

            > span {
                font-size: 2rem;
            }
        }

        input {
            gap: 0;
            margin: 0;
            width: 58.1rem;
            align-self: center;
        }

        button:nth-child(4) {
            margin: 0;
            display: flex;
            width: 21.6rem;
        }

        button:nth-child(5) {
            margin: 0;
            padding: 0;
            width: 5rem;
            display: flex;
            background: transparent;
            
            > svg {
                font-size: 2rem;
                color: ${({ theme }) => theme.COLORS.LIGHT_100};
            }
        }
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