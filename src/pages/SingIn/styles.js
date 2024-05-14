import styled from "styled-components";

import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.main`
    height: 100vh;
    display: flex;
    margin: 0 auto;
    padding: 0 5.6rem;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
    max-width: ${DEVICE_BREAKPOINTS.TABLET};

    @media(min-width: ${DEVICE_BREAKPOINTS.LAPTOP}){
        max-width: 100%;
        flex-direction: row;
        justify-content: space-around;
    }

`;

export const Form = styled.form`
    width: 100%;
    display: flex;
    text-align: center;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    > h1 {
        display: none;
    }

    > p {
        font-family: "Roboto", sans-serif;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    > a {
        font-weight: 500;
        font-size: 1.4rem;
        margin-top: 3.2rem;
        font-style: normal;
        line-height: 2.4rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    @media(min-width: ${DEVICE_BREAKPOINTS.LAPTOP}){
        padding: 6.4rem;
        max-width: 47.6rem;
        border-radius: 1.6rem;
        background-color: ${({ theme }) => theme.COLORS.DARK_700};

        > h1 {
            display: block;
            font-weight: 500;
            font-size: 2.5rem;
            font-style: normal;
            text-align: center;
            margin-bottom: 3.2rem;
            color: ${({ theme }) => theme.COLORS.LIGHT_300};
        }
    }
`;