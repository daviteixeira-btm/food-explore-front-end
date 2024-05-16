import styled from "styled-components";

import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.footer`
    width: 100%;
    display: flex;
    height: 7.7rem;
    grid-area: footer;
    align-items: center;
    padding: 2.9rem 2.7rem;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.COLORS.DARK_600};

    div {

        > img {
            width: 1.5rem;
            height: 1.5rem;
            filter: grayscale(100%);
        }

        > span {
            font-size: 1rem;
            color: ${({ theme }) => theme.COLORS.LIGHT_700};
        }
    }

    span {
        font-size: 0.8rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_200};
    }

    @media(min-width: ${DEVICE_BREAKPOINTS.MOBILE_M}){
        div {
            > img {
                width: 2rem;
                height: 2rem;
            }

            > span {
                font-size: 1.5rem;
            }
        }

        span {
            font-size: 1rem;
        }
    }

    @media(min-width: ${DEVICE_BREAKPOINTS.LAPTOP}){

        padding: 2.37rem 12.3rem;

        div {
            > span {
                font-size: 2rem;
            }
        }
        
        span {
            font-size: 1.2rem;
        }
    }
`;