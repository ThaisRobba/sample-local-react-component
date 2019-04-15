import React from 'react'
import './styles.css'
import hello from './second'

const MyComponent = () => (
  <div>
    <h1>{hello()}</h1>
  </div>
)

export default MyComponent
