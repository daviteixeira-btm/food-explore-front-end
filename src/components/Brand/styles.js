import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
    gap: 1.1rem;
    display: flex;
    align-items: center;
    margin-bottom: 7.3rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    > span {
        font-weight: 700;
        font-size: 2.3rem;
        line-height: 4.4rem;
        font-family: 'Roboto';
    }

    @media(min-width: ${DEVICE_BREAKPOINTS.LAPTOP}){
        > span {
            font-size: 4.2rem;
            line-height: 4.9rem;
        }
    }
`;



