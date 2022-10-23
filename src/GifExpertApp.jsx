import styled from 'styled-components'
import Input from './components/Input'
import Card from './components/Card'
import { useEffect, useState } from 'react'

const GifExpertAppStyled = styled.main`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    gap: 1rem;
    h2, h1{
        margin: 0;
    }

    h2{
        text-align: center;
        margin: 1rem;
    }
    .wrapper{
        display: flex;
        flex-wrap: wrap;
        gap: 2rem;
        margin: auto;
        justify-content: center;
        align-items: center;
    }
`

function GifExpertApp() {

    const [categories, setCategories] = useState([])
    const [input, setInput] = useState('')
    const [gifs, setGifs] = useState([])

    useEffect(()=>{
        const getGifs = async (input) =>{

            try {
                const BASE_URL = "https://api.giphy.com/v1/gifs/search?",
                API_KEY = "R9vjEHe7dGrC6LXy6mlyeqUNfGiaHl5W"
                let res = await fetch(`${BASE_URL}api_key=${API_KEY}&q=${input}&limit=15`),
                json = await res.json()
                
                if(!res.ok) throw{err: true, status: res.status, statusText: !res.statusText ? 'ocurrio un error' : null}
                setGifs([])
                json.data.forEach(ele => {
                    let gif = {
                        id: ele.id,
                        title: ele.title,
                        image: ele.images.downsized_medium.url

                    }

                    setGifs(gifs => [gif, ...gifs])
                })


            } catch (err) {
                console.log(err)
            }

        }
        getGifs(input)
    }, [categories])

    const passValue = (e) => {
        e.preventDefault()
        setCategories([input, ...categories])
    }

    return (
        <GifExpertAppStyled>
            <h1>GifExpertApp</h1>
            <Input state={setInput} onSub={passValue} />
            <div className='wrapper'>
                {
                    gifs.map(({id, title, image}) => (
                        <Card key={id} title={title} image={image} />
                    ))
                }
            </div>

        </GifExpertAppStyled>
    )
}

export default GifExpertApp
