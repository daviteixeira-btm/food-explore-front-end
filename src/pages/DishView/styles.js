import styled from "styled-components";

import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.main`
    width: 100%;
    height: 100%;
    display: grid;
    align-items: center;
    grid-template-columns: auto;
    grid-template-rows: 11.4rem auto 7.7rem;
    
    grid-template-areas: 
    "header"
    "content"
    "footer";
`;

export const DishInformation = styled.section`
    display: flex;
    align-items: center;
    margin: 1.6rem 5.6rem;
    flex-direction: column;
    justify-content: center;

    > div {
        display: flex;
        flex-direction: column;

        > a {
            font-size: 2.5rem;
            margin-bottom: 1.6rem;
            align-self: flex-start;
            color: ${({ theme }) => theme.COLORS.LIGHT_300};
        }

        > h1 {
            font-weight: 500;
            font-size: 2.7rem;
            font-style: normal;
            margin-bottom: 2.4rem;
            font-family: 'Poppins';
            color: ${({ theme }) => theme.COLORS.LIGHT_300};
        }

        > h2 {
            font-weight: 400;
            font-size: 1.6rem;
            text-align: center;
            font-style: normal;
            margin-bottom: 2.4rem;
            color: ${({ theme }) => theme.COLORS.LIGHT_300};
        }

        > div:nth-last-child(2) {
            gap: 2.4rem;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            margin-bottom: 4.2rem;
            justify-content: center;
        }

        div:nth-last-child(1) {
            width: 100%;
            display: flex;
            justify-content: space-between;

            div {
                display: flex;
                align-items: center;
                margin-bottom: 2.4rem;

                span {
                    margin: 0 1rem;
                    font-size: 2rem;
                    font-weight: 600;
                    color: ${({ theme }) => theme.COLORS.LIGHT_300};
                }

                button:nth-child(1),
                button:nth-child(3) {
                    margin: 0;
                    padding: 0;
                    width: 100%;
                    background: transparent;

                    > svg {
                        font-weight: 600;
                        font-size: 2.5rem; 
                    }
                }
            }

            button {
                margin-top: 0;
                width: 18.8rem;
                font-size: 1rem;
            }
        }
    }

    @media(min-width: ${DEVICE_BREAKPOINTS.LAPTOP}){
        gap: 5rem;
        display: flex;
        padding: 2rem 8rem;
        flex-direction: row;

        > div {

            > a {
                font-size: 1.5rem;
                font-weight: bold;
            }

            > img {
                width: 40rem;
                height: 40rem;
            }

            > h2 {
                text-align: left;
            }

            div:nth-last-child(1) {
                gap: 3rem;
                justify-content: flex-start;
            }

            div:nth-last-child(2) {
                gap: 1rem;
                justify-content: flex-start;
            }
        }
    }
`;

export const Dish = styled.img`
    width: 26.4rem;
    height: 26.4rem;
    border-radius: 50%;
    margin-bottom: 1.2rem;
`;