import { IRefObject } from '../../Utilities';
import { IStyle } from '../../Styling';
import { IStyleableComponent, IThemedProps } from '../../Foundation';

export interface IFadedOverflow {}

/**
 * FadedOverflow component props.
 */
export interface IFadedOverflowProps extends IStyleableComponent<IFadedOverflowProps, IFadedOverflowStyles> {
  /**
   * Optional callback to access the IFadedOverflow interface. Use this instead of ref for accessing
   * the public methods and properties of the component..
   */
  componentRef?: IRefObject<IFadedOverflow>;

  /**
   * Additional CSS class(es) to apply to the FadedOverflow root.
   */
  className?: string;
}

/**
 * Props needed to construct styles.
 */
export type IFadedOverflowViewProps = Pick<IFadedOverflowProps, 'className'>;

export type IFadedOverflowStyleProps = IThemedProps<IFadedOverflowViewProps>;

/**
 * Represents the stylable areas of the control.
 */
export interface IFadedOverflowStyles {
  /**
   * Style for the root element when fixed.
   */
  root?: IStyle;
}
