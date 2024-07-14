import styled from "styled-components";

export const Button = styled.button`
    background-color: ${props => props.theme.color.textColor};
    padding: 4px 12px;
    
    & svg{
        fill: ${props => props.theme.color.backgroundColor};
    }
`