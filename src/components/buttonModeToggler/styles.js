import styled from "styled-components";

export const Button = styled.button`
    background-color: ${props => props.theme.color.textColor};
    padding: 4px 12px;
    
    & svg{
        fill: ${props => props.theme.color.backgroundColor};
        font-size: 26px;
        margin-top: 4px;

        @media (max-width: 767px){
            width: 20px;
        }
    }
`