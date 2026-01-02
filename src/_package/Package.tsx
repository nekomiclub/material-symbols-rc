import 'material-symbols';

import { CSSProperties, ElementType, FC } from 'react';
import cn from 'clsx';
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



export const MaterialSymbol: FC<IMaterialSymbolProps> = ({ icon, ...props }) => {
  const Component = props.as ?? 'span';

  const type = props.type ?? 'outlined';
  const fill = props.fill ? 1 : 0;
  const weight = props.weight ?? 400;
  const color: CSSProperties['color'] = props.color ?? 'inherit';
  const size = props.size ?? 24;

  const style = {
    'font-variation-settings': `'FILL' ${fill}, 'wght' ${weight}, 'opsz' ${size}`,
    color,
    fontSize: size,
    ...props.style
  };



  return <Component className={cn(`material-symbols-${type}`, props.className)} style={style}>{icon}</Component>;
};



/** @deprecated use MaterialSymbolIconType instead */
export type SymbolCodepoints = MaterialSymbolIconType

export default MaterialSymbol;