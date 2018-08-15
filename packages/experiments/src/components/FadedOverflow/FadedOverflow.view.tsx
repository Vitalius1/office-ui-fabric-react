import * as React from 'react';
import { IFadedOverflowProps, IFadedOverflowStyles } from './FadedOverflow.types';
import { IViewComponentProps } from '../../Foundation';

export const FadedOverflowView = (props: IViewComponentProps<IFadedOverflowProps, IFadedOverflowStyles>) => {
  const { classNames, children } = props;

  return (
    <div className={classNames.root}>
      <span className={classNames.content}>{children}</span>
      <div className={classNames.trigger} />
    </div>
  );
};
