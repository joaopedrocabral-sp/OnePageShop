import styled from "styled-components";

export const HeroSection = styled.div`

    height: 60vh;
    background-size: cover;
    background-position: top;

    & div{

        height: 100%;

        & h1{
            font-size: 44px;
            color: ${props => props.theme.color.white};

            @media (max-width: 767px){
                font-size: 34px;
            }
        }

        & p{
            width: 60%;
            color: ${props => props.theme.color.white};

            & b{
                color: ${props => props.theme.color.white};
            }

            @media (max-width: 767px) {
                width: 100%;
            }
        }

        & button{
            background-color: ${props => props.theme.color.purple.primary};         
            padding: 12px 40px;
            margin-top: 10px;

            &:hover{
                background-color: ${props => props.theme.color.purple.tertiary};
            }

            & a{
                color: ${props => props.theme.color.white};
                font-size: 20px;

                @media (max-width: 767px){
                    font-size: 18px;
                }
            }
        }
    }
    
`

export const StandardSection = styled.div`
    color: ${props => props.theme.color.textColorAlternative};
`

export const ProductContainer = styled.div`
    
    & img{
        width: 250px;

        @media (max-width: 767px) {
            max-width: 70%;
        }
    }

    & button{
        background-color: ${props => props.theme.color.purple.secondary};         
        padding: 8px 20px;
        margin-top: 10px;
        font-size: 16px;

        &:hover{
            background-color: ${props => props.theme.color.purple.primary};  
        }
    }
`