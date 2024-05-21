import styled from "styled-components";

import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
    width: 210px;
    height: 29.2rem;
    border-radius: 0.8rem;
    border: 1px solid ${({ theme }) => theme.COLORS.DARK_200};
    background-color: ${({ theme }) => theme.COLORS.DARK_300};

    color: #fff;
    display: flex;
    font-size: 5rem;
    font-weight: 500;
    align-items: center;
    justify-content: center;

    @media(min-width: ${DEVICE_BREAKPOINTS.MOBILE_M}){
        width: 300px;
    }
`;