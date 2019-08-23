import { ICheckStyleProps, ICheckStyles } from './Check.types';
import { HighContrastSelector, IStyle, getGlobalClassNames, IconFontSizes } from '../../Styling';

export const CheckGlobalClassNames = {
  root: 'ms-Check',
  circle: 'ms-Check-circle',
  check: 'ms-Check-check',
  /** Must be manually applied to the parent element of the check. */
  checkHost: 'ms-Check-checkHost'
};

export const getStyles = (props: ICheckStyleProps): ICheckStyles => {
  const { height = props.checkBoxHeight || '20px', checked, className, theme } = props;

  const { semanticColors } = theme;

  const classNames = getGlobalClassNames(CheckGlobalClassNames, theme);

  const sharedCircleCheck: IStyle = {
    position: 'absolute',
    width: height,
    height: height,
    lineHeight: '1',
    borderRadius: '50%'
  };

  return {
    root: [
      classNames.root,
      {
        width: height,
        height: height,
        position: 'relative',
        userSelect: 'none',
        textAlign: 'start' // weird bug with font icons if not set
      },
      className
    ],

    circle: [
      classNames.circle,
      sharedCircleCheck,
      {
        fontSize: height,
        color: checked ? semanticColors.inputForegroundChecked : semanticColors.smallInputBorder,
        background: checked ? semanticColors.inputBackgroundChecked : semanticColors.inputBackground,
        selectors: {
          [HighContrastSelector]: {
            color: 'WindowText'
          }
        }
      }
    ],

    check: [
      classNames.check,
      sharedCircleCheck,
      {
        opacity: 0,
        color: semanticColors.inputPlaceholderText,
        textAlign: 'center',
        fontSize: IconFontSizes.medium,
        selectors: {
          ':hover': {
            opacity: 1
          },
          [HighContrastSelector]: {
            MsHighContrastAdjust: 'none'
          }
        }
      },
      checked && {
        opacity: 1,
        color: semanticColors.inputForegroundChecked,
        fontWeight: 900,
        selectors: {
          [HighContrastSelector]: {
            border: 'none',
            color: 'WindowText'
          }
        }
      }
    ],

    checkHost: classNames.checkHost
  };
};
