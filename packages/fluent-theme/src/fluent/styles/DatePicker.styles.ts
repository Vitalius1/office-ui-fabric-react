import { IDatePickerStyleProps } from 'office-ui-fabric-react/lib/DatePicker';
import { fluentBorderRadius } from './styleConstants';
import { Depths } from '../FluentDepths';

export const DatePickerStyles = (props: IDatePickerStyleProps) => {
  const { theme } = props;
  const { palette } = theme;
  return {
    root: {
      selectors: {
        '&.is-open .ms-TextField-fieldGroup': {
          borderColor: palette.themePrimary
        }
      }
    },
    callout: {
      border: 'none',
      borderRadius: fluentBorderRadius,
      boxShadow: Depths.depth8,
      selectors: {
        '.ms-Callout-main': { borderRadius: fluentBorderRadius }
      }
    }
  };
};
