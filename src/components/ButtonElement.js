import styled from 'styled-components';

export const Button = styled.a`
    border-radius: 50px;
    background: ${({ primary }) => (primary ?  'rgb(67, 197, 158)' : 'rgb(155, 126, 222)')};
    white-space: nowrap;
    padding: 12px 30px;
    color: #fff;
    font-size: 16px;
    border: none;
    cursor: pointer;
    display: flex;
    outline: none;
    justify-content: center;
    transition: all 0.2s ease-in-out;
    align-items: center;
    box-shadow: 0px 3px 7px 0px rgba(67, 197, 158, 0.47);
    
    &:hover {
        color: #fff;
        transition: all 0.2s ease-in-out;
        background: ${({ primary }) => (primary ? 'rgb(146, 221, 199)' : 'rgb(179, 158, 230)')};
        box-shadow: 5px 6px 7px 0px rgba(67, 197, 158, 0.47);
    }

    @media screen and (max-width: 480px) {
        font-size: 12px;
    }
`