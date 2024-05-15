import styled from "styled-components";

export const Container = styled.button`
    gap: 1rem;
    border: 0;
    width: 100%;
    display: flex;
    height: 4.8rem;
    font-weight: 500;
    margin-top: 1.6rem;
    align-items: center;
    border-radius: 0.5rem;
    padding: 1.2rem 3.2rem;
    justify-content: center;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};

    > svg {
        font-size: 2rem;
    }

    &disabled {
        opacity: 0.5;
    }
`;