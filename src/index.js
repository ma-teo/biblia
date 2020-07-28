import 'react-app-polyfill/ie11'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import * as serviceWorker from './service-worker'
import './index.css'

ReactDOM.render(<App />, document.getElementById('app'))
serviceWorker.register()
