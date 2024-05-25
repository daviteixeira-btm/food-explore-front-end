import styled from "styled-components";

export const Container = styled.span`
    font-size: 1.4rem;
    border-radius: 0.5rem;
    padding: 0.5rem 1.4rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    background: ${({ theme }) => theme.COLORS.DARK_100};
`;