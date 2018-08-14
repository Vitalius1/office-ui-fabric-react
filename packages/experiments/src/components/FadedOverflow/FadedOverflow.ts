import * as React from 'react';
import { FadedOverflowView as view } from './FadedOverflow.view';
import { FadedOverflowStyles as styles } from './FadedOverflow.styles';
import { IFadedOverflowProps, IFadedOverflowStyles } from './FadedOverflow.types';
import { createStatelessComponent } from '../../Foundation';

export const FadedOverflow: React.StatelessComponent<IFadedOverflowProps> = createStatelessComponent<
  IFadedOverflowProps,
  IFadedOverflowStyles
>({
  displayName: 'FadedOverflow',
  view,
  styles
});
