import styled from "styled-components";

import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
    width: 100%;
    height: 10rem;
    display: flex;
    align-items: center;
    border-radius: 0.3rem;
    justify-content: space-between;
    background: ${({ theme }) => theme.COLORS.GRADIENTS_200};

    img {
        top: -1rem;
        left: -2rem;
        width: 13rem;
        height: 12rem;
        position: relative;
    }

    img:nth-child(2){
        display: none;
    }

    h2 {
        font-weight: 700;
        font-size: 1.8rem;
        margin-bottom: 0.3rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    p {
        display: none;
    }

    @media(min-width: ${DEVICE_BREAKPOINTS.MOBILE_M}){

        height: 12rem;

        img {
            height: 14rem;
            width: 15.2rem;
        }

        p {
            display: block;
            font-size: 0.9rem;
            color: ${({ theme }) => theme.COLORS.LIGHT_300};
        }
    }

    @media(min-width: ${DEVICE_BREAKPOINTS.MOBILE_M}){
        p {
            font-size: 1.2rem;
        }
    }

    @media(min-width: ${DEVICE_BREAKPOINTS.LAPTOP}){
        width: 100%;
        height: 20rem;
        margin-top: 12rem;
        justify-content: center;

        img:nth-child(1){
            display: none;
        }

        img:nth-child(2){
            display: block;
        }

        img {
            top: -4rem;
            left: -8rem;
            width: 40rem;
            height: 30rem;
        }

        h2 {
            font-size: 3rem;
            font-weight: 500;
        }

        p {
            font-size: 2rem;
        }
    }

    @media(min-width: ${DEVICE_BREAKPOINTS.LAPTOP_L}){
        width: 80%;
    }
`;