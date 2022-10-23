import styled from 'styled-components'
import gifError from '../assets/no-available.jpg'

const CardStyled = styled.div`
    background-color: white;
    max-inline-size: 20rem;
    border-radius: .5rem;
    box-shadow: 0px 3px 3px  black;
    img{
        inline-size: 100%;
        border-top-left-radius: .5rem;
        border-top-right-radius: .5rem;

    }
    p{
        text-align: center;
        margin: 0;
        margin: 1rem;

    }
`

function Card({title, image}) {
    return (
        <CardStyled>
            <img src={!image ? gifError : image} alt={title}/>
            <p>{!title ? 'Gif  sin titulo': title}</p>
        </CardStyled>
    )
}

export default Card
