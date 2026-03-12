# React Material Symbols
Use [Material Symbols](https://fonts.google.com/icons?icon.set=Material+Symbols) in react with ease 😮‍💨! 

![preview](/preview.jpg)

## 📩 Installation

```bash
$ npm i material-symbols-rc
$ pnpm i material-symbols-rc
$ yarn add material-symbols-rc
```

```tsx
import 'material-symbols-rc/css';

import React from 'react';

import MaterialSymbol from 'material-symbols-rc';



function App() {
  return <>
    <MaterialSymbol icon="bookmark_bag" size={64} />
  </>;
}

```

## 📦 API

```ts
import { CSSProperties, ElementType } from "react"
import { MaterialSymbol as MaterialSymbolIconType } from 'material-symbols';



export interface IMaterialSymbolProps {
  icon: MaterialSymbolIconType

  /** 
   * Style of the icon 
   * 
   * @default "outlined"
   */
  type?: MaterialSymbolType

  /** 
   * Icon color
   * 
   * @default "inherit"
   */
  color?: CSSProperties['color']

  /**
   * Size of the icon in px
   * 
   * @default 24
   */
  size?: number

  /**
   * Icon tag
   * 
   * @default "span"
   */
  as?: ElementType

  /**
   * Icon weight
   * 
   * @default 400
   */
  weight?: MaterialSymbolWeight

  /**
   * Icon fill
   * 
   * @default false
   */
  fill?: boolean

  className?: string
  style?: CSSProperties
}

export type MaterialSymbolWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700
export type MaterialSymbolType = 'outlined' | 'rounded' | 'sharp'



/** @deprecated use MaterialSymbolIconType instead */
export type SymbolCodepoints = MaterialSymbolIconType;
export type { MaterialSymbolIconType };
```

## ©️ License

Material Symbols are created by [Google](https://github.com/google/material-design-icons#license).

> We have made these icons available for you to incorporate into your products under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0.txt). Feel free to remix and re-share these icons and documentation in your products. We'd love attribution in your app's about screen, but it's not required.