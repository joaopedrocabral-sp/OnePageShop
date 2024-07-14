import { createGlobalStyle } from "styled-components";

export const MyGlobalStyles = createGlobalStyle`
    
    html{
        scroll-behavior: smooth;
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        gap: 20px;
        font-family: "Poppins";
        text-align: center;
        color: ${props => props.theme.color.textColorAlternative};
    }
    body{
        background-color: ${props => props.theme.color.backgroundColor};
        margin: 0 auto;
    }
    .header-boxed{
        width: 100%;
        max-width: 1300px;
        margin: 0 auto;
        padding: 30px 0;
    }
    .section-boxed{
        max-width: 1300px;
        margin: 0 auto;
        padding: 100px 0;
    }
    .section-boxed-thin{
        max-width: 1300px;
        margin: 0 auto;
        padding: 50px 0;
    }
    .flex-container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .row-flex-container{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .header-flex-container{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    .grid-container-3{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: auto;
        justify-items: center;
        align-items: center;
    }


    a{
        text-decoration: none;
    }
    a:hover{
        
    }
    button{
        text-transform: uppercase;
        font-weight: 600;
        border-radius: 30px;
        border: none;
        cursor: pointer;
    }

`