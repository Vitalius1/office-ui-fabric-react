import * as React from 'react';

import { FadientBase } from './Fadient.base';
import { IStyleFunctionOrObject, IRefObject } from '../../Utilities';
import { IStyle, ITheme } from '../../Styling';

export interface IFadient {}

/**
 * Fadient component props.
 */
export interface IFadientProps extends React.Props<FadientBase> {
  /**
   * Optional callback to access the IFadient interface. Use this instead of ref for accessing
   * the public methods and properties of the component..
   */
  componentRef?: IRefObject<IFadient>;

  /**
   * Call to provide customized styling that will layer on top of the variant rules.
   */
  styles?: IStyleFunctionOrObject<IFadientStyleProps, IFadientStyles>;

  /**
   * Theme for the component.
   */
  theme?: ITheme;

  /**
   * Additional CSS class(es) to apply to the Fadient root.
   */
  className?: string;
}

/**
 * Props needed to construct styles.
 */
export interface IFadientStyleProps {
  /**
   * Theme for the component.
   */
  theme: ITheme;

  /**
   * Accept custom classNames
   */
  className?: string;
}

/**
 * Represents the stylable areas of the control.
 */
export interface IFadientStyles {
  /**
   * Style for the root element when fixed.
   */
  root?: IStyle;
}
