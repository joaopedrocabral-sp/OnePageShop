import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: ${props => props.theme.color.white};
    background-color: ${props => props.theme.color.purple.primary};

    & div{
        & p{
            font-size: 26px;
            font-weight: 900;
            color: ${props => props.theme.color.white};
        }
    }
`