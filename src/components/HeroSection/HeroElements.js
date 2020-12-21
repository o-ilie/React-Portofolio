import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations';

export const HeroContainer = styled.div`
    background: #fff;
    height: 770px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    @media screen and (max-width: 480px) {
      height: 450px;
    }
`
export const HeroScreen = styled.div`
    width: 760px;
    height: 440px;
    position: relative;  
    background: black;
    border: 20px solid #474e5d;
    border-radius: 10px;

    @media screen and (max-width: 480px) {
      height: 220px;
    }
`

export const HeroMonitor = styled.div`
    position: absolute;
    width: 100%;

  &::before {
    content: "";
    position: absolute;
    left: 50%;
    top: -10px;
    margin: -3px 0 0 -3px;
    width: 6px;
    height: 6px;
    border-radius: 6px;
    background: #a5adbd;
  }
`
export const HeroP = styled.p`
  margin: 20px 20px 20px 0;

  @media screen and (max-width: 480px) {
    margin: 0;
  }
`

export const HeroH1= styled.h1`
  color: #43C59E;
  margin: 20px 20px 20px 0;
  font-weight: 400;

  @media screen and (max-width: 480px) {
    margin: 0 0 10px 0;
  }
`

export const HeroContent = styled.div`
    width: 100%;
    color: #fff;
    padding: 20px;
    padding-left: 60px;
    font-size: 28px;
    font-family: 'Roboto Mono', monospace;
    font-weight: 400;

    @media screen and (max-width: 480px) {
      font-size: 16px;
      padding-left: 20px;
    }
`
export const bounceAnimation = keyframes`${bounce}`;

export const PageArrow = styled.div`
  animation: 1s ${bounceAnimation} infinite;
  width: 100%;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  color: #43C59E;
  font-size: 26px;
  position: absolute;
  bottom: 125px;
  
  @media screen and (max-width: 480px) {
    bottom: 90px;
  }
`;
