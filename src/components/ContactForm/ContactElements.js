import styled from 'styled-components'
import { css } from 'styled-components'

export const StyledButton = styled.button`
    display: flex;
    border: none;
    background: none;
    justify-content: flex-start;
    font-family: 'Open Sans', sans-serif;
    font-weight: 700;
    font-size: 12px;
    color: #fff;
    line-height: 1.2;
    text-shadow: 0px 0px 3px rgba(0, 0, 0, 0.67);

    &:focus {
        outline: none;
    }
`;  


export const Container = styled.div`
    margin: 100px auto; 
    max-width: 500px;  
    font-family: "Roboto Mono";

    @media screen and (max-width: 786px) {
        max-width: 350px;
    }
`;

export const Form = styled.form`
    display: grid; 
    grid-template-columns: 1fr 1fr; 
    grid-gap: 35px;     
`; 

export const Input = styled.input`
    padding: 1em; 
    width: 100%; 
    border: none;
    font-size: 14px;

    &:focus {
        outline: none;
    }
`; 

export const Textarea = styled.textarea`
    padding: 1em; 
    width: 100%; 
    border: none;
    font-size: 14px;

    &:focus {
        outline: none;
    }
`;


export const StyledTitle = styled.h2`
    color: rgb(0,0,0);
    text-align: center; 
    margin-bottom: 35px;
    line-height: 1.2;
    font-size: 30px;
    font-weight: bold;
    text-shadow: 0px 3px 7px rgba(0, 0, 0, 0.2);
`; 

export const WrapperGrid = styled.div`
    box-shadow: 0px 3px 7px 0px rgba(67, 197, 158, 0.47);

    ${props => props.full && css`
        grid-column: 1 / 3;
    `}
`;

export const Label = styled.span`
    color: #9b7ede;

`