import React from 'react'
import ReactDom from 'react-dom'
import App, { Hey } from './App'

// render("what to show","where to show")
ReactDom.render(
    <>
        <App/>
        <Hey/>
    </>
    ,document.getElementById("root")
)