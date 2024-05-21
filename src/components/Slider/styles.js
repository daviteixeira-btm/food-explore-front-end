import styled from "styled-components";

import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  max-width: 26rem;

  @media(min-width: ${DEVICE_BREAKPOINTS.MOBILE_M}){
    max-width: 36rem;
  }

  @media(min-width: ${DEVICE_BREAKPOINTS.TABLET}){
    max-width: 70rem;
  }

  @media(min-width: ${DEVICE_BREAKPOINTS.LAPTOP}){
    max-width: 80rem;
  }

  @media(min-width: 1366px){
    max-width: 110rem;
  }

  @media(min-width: ${DEVICE_BREAKPOINTS.LAPTOP_L}){
    max-width: 100rem;
  }

  @media(min-width: ${DEVICE_BREAKPOINTS.LAPTOP_L}){
    max-width: 180rem;
  }
`;
