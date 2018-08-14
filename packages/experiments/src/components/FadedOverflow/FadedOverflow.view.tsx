import * as React from 'react';
import { IFadedOverflowViewProps, IFadedOverflowStyles } from './FadedOverflow.types';
import { IViewComponentProps } from '../../Foundation';

export const FadedOverflowView = (props: IViewComponentProps<IFadedOverflowViewProps, IFadedOverflowStyles>) => {
  const { classNames, children } = props;

  return <div className={classNames.root}>{children}</div>;
};
