import styled, { css } from 'styled-components';

const Button = styled.button`
    transition: all 0.25s ease-out;
    cursor: pointer;
    height: 50px;
    width: 195px;
    border: none;
    outline: none;
    border-radius: 4px;
    font-family: open-sans-bold;
    font-size: 16px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    text-align: center;
    box-shadow: 0 .5rem 1rem rgba(0,0,0,0.2);

    :hover:not([disabled]) {
        transform: translateY(-2px);
        box-shadow: 0 1rem 2rem rgba(0,0,0,0.2);
    }

    :active:not([disabled]){
        transform: translateY(0)
    }
    ${({ primary }) => primary && css`
        background-color: #3b9be4;
        color: #fff;
        :hover:not([disabled]){
            background-color: #2f82c1;
        }
        :disabled{
            background-color: #c3dcff;
            cursor: not-allowed;            
        }
    `}

    ${({ secondary }) => secondary && css`
        color: #3a414a;
        background-color: transparent;
        border: 2px solid #3a414a;
        :hover:not([disabled]){
            color: #fff;
            background-color: #2f343c;
            border-color: #2f343c;
        }
        :disabled{
            cursor: not-allowed;
            color: #bac1c9;
            border: 2px solid #bac1c9;
        }    
    `}

    ${({ error }) => error && css`
        background-color: #dc3545;
        color: #fff;
        :hover{
            background-color: #bd2130;
        }
    `}
    
`

export default Button;