import styled from 'styled-components';

export const InfoContainer = styled.div`
    color: #fff;
    background: #f9f9f9;
    height: auto;
    display: flex;
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
    align-items: center;
    grid-template-areas: 'col1 col2';

    @media screen and (max-width: 768px) {
        grid-template-areas: 'col2' 'col1';
    }

`

export const Column1 =styled.div `
    margin-bottom: 15px;
    grid-area: col1;

    @media screen and (max-width: 768px) {
        margin: 30px auto;
        justify-content: center;
    }
`
export const Column2 =styled.div `
    grid-area: col2;
    grid-template-columns: auto auto;
    display: grid;
    justify-content: end;
    width: 500px;

    @media screen and (max-width: 768px) {
        justify-content: center;
    }
`

export const TextWrapper =styled.div `

    @media screen and (max-width: 768px) {
        text-align: center;
    }
`

export const TopLine =styled.p `
    margin-bottom: 16px;
    color: #01bf71;
    font-size: 16px:
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    letter-spacing: 1.4px;
`

export const Heading = styled.h1 `
    margin-bottom: 40px;
    color: black;
    font-size: 48px;
    line-height: 1.2;
    font-weight: 700;
    font-family: 'Roboto Mono', monospace;
    text-shadow: 0px 3px 7px rgba(40, 102, 110, 0.5);

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const Subtitle = styled.p `
    color: #010606;
    font-size: 18px;
    line-height: 1.6;
    max-width: 440px;
    margin-bottom: 35px;
    font-family: 'Open Sans', sans-serif;

    @media screen and (max-width: 480px) {
        font-size: 14px;
        width: 300px;
    }
`

export const BtnWrapp = styled.div `
    display: flex;
    justify-content: flex-start;
    font-family: 'Open Sans', sans-serif;
    padding-top: 50px;
    font-weight: 700;
    font-size: 12px;
    line-height: 1.2;
    text-shadow: 0px 0px 3px rgba(0, 0, 0, 0.67);

    @media screen and (max-width: 768px) {
        justify-content: center;
        padding: 0;
    }
    
`

export const Box = styled.div`
    width: 150px;
    height: 150px;
    display: grid;
    justify-content: center;
    margin: 20px;
    font-size: 20px;
    font-weight: bold;
    color: black; 
    grid-template-rows: 150px ; 
    grid-template-columns: 100px;
    align-items: center;
`

export const Icon = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-shadow: 0px 3px 7px rgba(40, 102, 110, 0.3);
`