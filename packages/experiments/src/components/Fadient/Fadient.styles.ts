import { IFadientStyleProps, IFadientStyles } from './Fadient.types';
import { normalize, getGlobalClassNames } from '../../Styling';
import { getRTL } from '../../Utilities';

const GlobalClassNames = {
  root: 'ms-Fadient'
};

export function getStyles(props: IFadientStyleProps): IFadientStyles {
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
}
