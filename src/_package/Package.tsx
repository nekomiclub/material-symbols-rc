import 'material-symbols';

import { CSSProperties, FC } from 'react';
import cn from 'clsx';

import { IMaterialSymbolProps } from './interfaces';








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



export default MaterialSymbol;