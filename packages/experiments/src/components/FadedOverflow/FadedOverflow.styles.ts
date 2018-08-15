import { IFadedOverflowStyleProps, IFadedOverflowStyles } from './FadedOverflow.types';
import { normalize, getGlobalClassNames } from '../../Styling';
import { getRTL } from '../../Utilities';

const GlobalClassNames = {
  root: 'ms-FadedOverflow'
};

export const FadedOverflowStyles = (props: IFadedOverflowStyleProps): IFadedOverflowStyles => {
  const { theme, className, lineHeight } = props;

  const { palette } = theme;
  const classNames = getGlobalClassNames(GlobalClassNames, theme);

  const isRTL = getRTL();

  return {
    root: [
      classNames.root,
      normalize,
      {
        backgroundColor: isRTL ? palette.yellow : palette.tealLight,
        display: 'flex',
        flexWrap: 'wrap',
        overflowY: 'hidden',
        position: 'relative',
        maxHeight: lineHeight,
        selectors: {
          ':after': {
            content: '""',
            position: 'absolute',
            height: lineHeight,
            right: 0,
            bottom: lineHeight,
            width: '50px',
            background: 'linear-gradient(to right, rgba(255, 255, 255, 0), #FFFFFF)'
          }
        }
      },
      className
    ],
    content: [
      {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        flex: '1 1 auto'
      }
    ],
    trigger: [
      {
        height: lineHeight,
        width: '1px' // TODO change it to 0px after testing
      }
    ]
  };
};
