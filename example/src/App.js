import React from 'react'

import { IconButton, Button } from 'cns-ui'
import 'cns-ui/dist/index.css'

const App = () => {
  return (
    <>
      <div style={{display : 'flex'}}>
        <IconButton text="Twitter" type="twitter"/>
        <IconButton text="Linkedin" type="linkedin"/>
        <IconButton text="Github" type="github"/>
      </div>
      <div style={{display : 'inline-flex', flexWrap: 'wrap', gap : '12px'}}>
        <Button text="Primary" type="primary"/>
        <Button text="Warning" type="warning"/>
        <Button text="Success" type="success"/>
        <Button text="Danger" type="danger"/>
        <Button text="Light" type="light"/>
        <Button text="Dark" type="dark"/>
      </div>
    </>
  )
}

export default App
