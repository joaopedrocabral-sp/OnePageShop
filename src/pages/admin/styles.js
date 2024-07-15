import styled from "styled-components";

export const DeleteButton = styled.button`
    background-color: ${props => props.theme.color.red.primary};
    color: ${props => props.theme.color.white};
    padding: 10px 20px;
    width: 100%;
    margin-top: 10px;

    &:hover{
        background-color: ${props => props.theme.color.red.secondary};
    }
`
export const EditButton = styled.button`
    background-color: ${props => props.theme.color.purple.secondary};
    color: ${props => props.theme.color.white};
    padding: 10px 20px;
    width: 100%;

    &:hover{
        background-color: ${props => props.theme.color.purple.primary};
    }
`

export const AddProductButton = styled.button`
    color: ${props => props.theme.color.backgroundColor};
    background-color: ${props => props.theme.color.textColorAlternative};
    padding: 12px 20px;
`

export const ProductContainer = styled.div`
    
    & img{
        width: 250px;

        @media (max-width: 767px) {
            max-width: 70%;
        }
    }
`