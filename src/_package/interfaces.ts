import { CSSProperties, ElementType } from 'react';
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
   * @default "inherit"
   */
  size?: number

  /**
   * Icon tag
   * 
   * @default "span"
   */
  as?: ElementType

  /** Icon weight */
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