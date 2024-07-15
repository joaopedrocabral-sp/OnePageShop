import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: ${props => props.theme.color.white};
    background-color: ${props => props.theme.color.purple.primary};

    & div{

        gap: 10px;

        & p{
            font-size: 28px;
            font-weight: 900;
            color: ${props => props.theme.color.white};

            @media (max-width: 767px){
                font-size: 24px;
            }
        }
    }
`

export const ExitButton = styled.button`
    color: ${props => props.theme.color.purple.primary};
    padding: 12px 20px;
`