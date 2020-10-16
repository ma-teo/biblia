import { StrictMode } from 'react'
import { render } from 'react-dom'
import App from './app'
import { register } from './sw'
import './index.css'

render(
  <StrictMode>
    <App />
  </StrictMode>
, document.getElementById('app'))

register()
