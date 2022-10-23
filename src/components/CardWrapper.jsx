import styled from 'styled-components'

const CardWrapperStyled = styled.div`

`

function CardWrapper() {
    return (
        <CardWrapperStyled>
            {children}
        </CardWrapperStyled>
    )
}

export default CardWrapper
