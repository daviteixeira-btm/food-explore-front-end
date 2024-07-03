import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    align-items: center;
    grid-template-columns: auto;  
    grid-template-rows: 11.4rem auto 7.7rem;
    
    grid-template-areas: 
    "header"
    "content"
    "footer";

    > main {
        height: 100%;
        grid-area: content;
        overflow-y: scroll;
    }
`;