import styled from 'styled-components';

export const InfoContainer = styled.div`
    color: #fff;
    background: #010606;
    height: auto;
    display: flex;
    flex-direction: column;
`;

export const InfoWrapper = styled.div `
    display: grid;
    z-index: 1;
    width: 100%;
    max-width: 1100px;
    margin: 100px auto;
    justify-content: center;

`;

export const InfoRow = styled.div `
    display: grid;
    grid-auto-columns: minmax(auto,1fr);
    align-items: center;
    grid-template-areas: 'col2 col1';

    @media screen and (max-width: 768px) {
        grid-template-areas: 'col1' 'col2';
    }
`

export const Column1 =styled.div `
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;

    @media screen and (max-width: 800px) {
        margin: 20px;
    }
`
export const Column2 =styled.div `
    grid-area: col2;
    grid-template-columns: 1fr 1fr;
    margin: 0 auto;
    display: grid;
    align-items: center;
    grid-gap: 16px;

    @media screen and (max-width: 800px) {
        grid-template-columns: 1fr 1fr;
        padding: 0 20px;
    }
`

export const TextWrapper =styled.div `
    padding-top: 0;
    text-align: right;

    @media screen and (max-width: 800px) {
        text-align: center;
        padding: 25px;
    }
`

export const Heading = styled.h1 `
    margin-bottom: 40px;
    color: #fff;
    font-size: 48px;
    line-height: 1.2;
    font-weight: 700;
    font-family: 'Roboto Mono', monospace;

    @media screen and (max-width: 800px) {
        font-size: 32px;
        margin-bottom: 25px;
    }
`

export const Subtitle = styled.p `
    color: #fff;
    font-size: 18px;
    line-height: 1.6;
    margin-bottom: 35px;
    font-family: 'Open Sans', sans-serif;

    @media screen and (max-width: 800px) {
        font-size: 14px;
        margin-bottom: 0;
    }
`

export const BtnWrapp = styled.div `
    display: flex;
    justify-content: flex-end;
    font-family: 'Open Sans', sans-serif;
    padding-top: 50px;
    font-weight: 700;
    font-size: 12px;
    line-height: 1.2;
    text-shadow: 0px 0px 3px rgba(0, 0, 0, 0.67);
    transition: background 0.8s;

   
    @media screen and (max-width: 800px) {
        justify-content: center;
    }
`

export const Box = styled.div`
    width: 250px;
    height: 250px;
    display: flex;
    justify-content: flex-start;
    margin: 10px;
    background: #fff;
    max-height: 340px;

    @media screen and (max-width: 800px) {
        width: 200px;
        height: 200px;
    }

    @media screen and (max-width: 480px) {
        width: 160px;
        height: 160px;
    }

    &:hover {
        box-shadow: 0px 3px 7px 0px rgba(155, 126, 222, 0.47);
    }
`

export const Img = styled.img `
    width: 250px;
    height: 250px;
    cursor: pointer;

    @media screen and (max-width: 800px) {
        width: 200px;
        height: 200px;
    }

    @media screen and (max-width: 480px) {
        width: 160px;
        height: 160px;
    }
`

export const CalcLink = styled.a `
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 22px;
    font-weight: bold;
    text-align: center;

    &:hover {
        color: #43C59E;
    }
`