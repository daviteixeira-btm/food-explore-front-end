import styled from "styled-components";

export const Container = styled.div`
    
    width: 100%;
    gap: 0.8rem;
    display: flex;
    align-items: start;
    margin-bottom: 3.2rem;
    flex-direction: column;

    > label {
        font-weight: 400;
        font-size: 1.6rem;
        font-family: 'Roboto';
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }

    > input {

        border: 0;
        width: 100%;
        height: 4.8rem;
        border-radius: 0.8rem;
        padding: 1.6rem 1.4rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
        background-color: ${({ theme }) => theme.COLORS.DARK_900};

        &:focus {
            border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};;
        }

        &:placeholder {
            color: ${({ theme }) => theme.COLORS.LIGHT_500};
        }
    }
`;