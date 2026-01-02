import 'material-symbols';

import { FC } from 'react';
import cn from 'clsx';

import { IMaterialSymbolProps } from './interfaces';








export const MaterialSymbol: FC<IMaterialSymbolProps> = (props) => {
  const Component = props.as ?? 'span';

  const type = props.type ?? 'outlined';
  const color = props.color;

  const style = { color, ...props.style };



  if (props.fill) {
    style.fontVariationSettings = [style.fontVariationSettings, `"FILL" ${Number(props.fill)}`]
      .filter(Boolean)
      .join(', ');
  }

  if (props.weight) {
    style.fontVariationSettings = [style.fontVariationSettings, `"wght" ${props.weight}`]
      .filter(Boolean)
      .join(', ');
  }

  if (props.size) {
    style.fontVariationSettings = [style.fontVariationSettings, `"opsz" ${props.size}`]
      .filter(Boolean)
      .join(', ');
    style.fontSize = props.size;
  }



  return <Component className={cn(`material-symbols-${type}`, props.className)} style={style}>{props.icon}</Component>;
};



export default MaterialSymbol;