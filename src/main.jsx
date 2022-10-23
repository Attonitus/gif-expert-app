import React from 'react'
import ReactDOM from 'react-dom/client'
import GifExpertApp from './GifExpertApp'
import GlobalStyles from './GlobalStyles'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles/>
    <GifExpertApp/>
  </React.StrictMode>
)
