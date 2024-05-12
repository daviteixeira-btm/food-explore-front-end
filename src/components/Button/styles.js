import styled from "styled-components";

export const Container = styled.button`
    border: 0;
    width: 100%;
    height: 4.8rem;
    margin-top: 1.6rem;
    font-weight: 500;
    border-radius: 0.5rem;
    padding: 1.2rem 3.2rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};

    &disabled {
        opacity: 0.5;
    }
`;