import { useState } from 'react'
import styled from 'styled-components'

const InputStyled = styled.div`
    input{
        padding-block: .5rem;
        font-size: 1.2rem;
        padding-inline: 1rem;
        border: 2px solid purple;
        border-radius: .25rem;
        inline-size: 100%;
    }
`

function Input({state, onSub}) {

    return (
        <InputStyled>
            <form action="" onSubmit={onSub}>
                <input type="search" placeholder='Buscar gifs...' onChange={ e=> state(e.target.value)} />
            </form>
        </InputStyled>
    )
}

export default Input
