import styled from "styled-components";

export const Container = styled.button`
    border: none;
    background: none;
    font-weight: 500;
    font-size: 1.4rem;
    margin-top: 3.2rem;
    font-style: normal;
    line-height: 2.4rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
`;