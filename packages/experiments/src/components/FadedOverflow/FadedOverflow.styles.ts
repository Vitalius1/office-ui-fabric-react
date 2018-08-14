import { IFadedOverflowStyleProps, IFadedOverflowStyles } from './FadedOverflow.types';
import { normalize, getGlobalClassNames } from '../../Styling';
import { getRTL } from '../../Utilities';

const GlobalClassNames = {
  root: 'ms-FadedOverflow'
};

export const FadedOverflowStyles = (props: IFadedOverflowStyleProps): IFadedOverflowStyles => {
  const { theme, className } = props;

  const { palette } = theme;
  const classNames = getGlobalClassNames(GlobalClassNames, theme);

  const isRTL = getRTL();

  return {
    root: [
      classNames.root,
      normalize,
      {
        backgroundColor: isRTL ? palette.red : palette.blueMid
      },
      className
    ]
  };
};
