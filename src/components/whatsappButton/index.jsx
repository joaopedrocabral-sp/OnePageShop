import { WhatsDiv } from "./styles";
import { FaWhatsapp } from "react-icons/fa";

export function WhatsAppButton(){
    return(
        <>
            <WhatsDiv href="https://github.com/joaopedrocabral-sp" target="_blank">
                <FaWhatsapp style={{marginBottom: "-5px", fill: "#f0f0f0"}} size={"30px"} />
            </WhatsDiv>
        </>
    )
}