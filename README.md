# cns-ui

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/cns-ui.svg)](https://www.npmjs.com/package/cns-ui) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## 📦 Install

```bash
npm install  cns-ui
```

```bash
yarn add  cns-ui
```

## 🔨 Usage

```jsx
import { IconButton, Button } from 'cns-ui'
import 'cns-ui/dist/index.css'

const App = () => {
  return (
    <>
        <IconButton text="Twitter" type="twitter"/>
        <IconButton text="Linkedin" type="linkedin"/>
        <IconButton text="Github" type="github"/>
        <Button text="Primary" type="primary"/>
        <Button text="Warning" type="warning"/>
        <Button text="Success" type="success"/>
        <Button text="Danger" type="danger"/>
        <Button text="Light" type="light"/>
        <Button text="Dark" type="dark"/>
    </>
  )
}
```

## ✨ Components Overview

![overview](overview.PNG)

![overview-hover](overview-hover.PNG)

Button has 2 properties.
- Type : {primary, success, warning, danger, light, dark}
- Text : any text.

IconButton has 2 properties.
- Type : {twitter, linkedin, github}
- Text : your social media username


## License

MIT © [cnsbelirdi](https://github.com/cnsbelirdi)
