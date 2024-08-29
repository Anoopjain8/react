import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import {jsx as _jsx} from 'react/jsx-runtime'

const anotherElement = 'Anoop'
const reactElement = React.createElement(
    'a',
    {href: 'http://google.com',target: '_blank'},
    'click me to visit google',
    anotherElement
)
 
ReactDOM.createRoot(document.getElementById('root')).render(
    // <App />
    reactElement
)
