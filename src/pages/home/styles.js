import styled from "styled-components";

export const StandardSection = styled.div`
    color: ${props => props.theme.color.textColorAlternative}
`

export const AlternativeSection = styled.div`
    background: linear-gradient(${props => props.theme.color.purple.primary}, ${props => props.theme.color.purple.tertiary});
`