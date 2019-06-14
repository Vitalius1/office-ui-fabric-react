import * as React from 'react';
import { IDetailsListProps, IDetailsListStyleProps, IDetailsListStyles } from './DetailsList.types';
import { IDetailsRowProps } from './DetailsRow.types';
import { IStyle } from '../../Styling';
import { IStyleFunctionOrObject, Omit } from '../../Utilities';

/**
 * ShimmeredDetailsList props interface
 * {@docCategory DetailsList}
 */
export type IShimmeredDetailsListProps = Omit<IDetailsListProps, 'styles'> & {
  /**
   * DetailsList styles to pass through.
   */
  detailsListStyles?: IStyleFunctionOrObject<IDetailsListStyleProps, IDetailsListStyles>;

  /**
   * Boolean flag to control when to render placeholders vs real items.
   * It's up to the consumer app to know when fetching of the data is done to toggle this prop.
   */
  enableShimmer?: boolean;

  /**
   * Determines whether to remove a fading out to bottom overlay over the shimmering items
   * used to further emphasize the unknown number of items that will be fetched.
   */
  removeFadingOverlay?: boolean;

  /**
   * Custom placeholder renderer to be used when in need to override the default placeholder of a DetailsRow.
   * An argument is passed to leverage the calculated column measurements done by DetailsList.
   */
  onRenderCustomPlaceholder?: (rowProps: IDetailsRowProps) => React.ReactNode;

  /**
   * Custom styles to override the styles specific to the ShimmeredDetailsList root area.
   * @deprecated Use `styles` prop instead
   */
  shimmerOverlayStyles?: IStyleFunctionOrObject<IShimmeredDetailsListStyleProps, IShimmeredDetailsListStyles>;

  /**
   * Custom styles to override the styles specific to the ShimmeredDetailsList root area.
   */
  styles?: IStyleFunctionOrObject<IShimmeredDetailsListStyleProps, IShimmeredDetailsListStyles>;

  /**
   * Number of shimmer placeholder lines to render.
   * @defaultvalue 10
   */
  shimmerLines?: number;
};

/**
 * Defines props needed to construct styles. This represents the simplified set of immutable things which control the class names.
 * {@docCategory DetailsList}
 */
export type IShimmeredDetailsListStyleProps = Required<Pick<IShimmeredDetailsListProps, 'theme'>>;

/**
 * Represents the stylable areas of the control.
 * {@docCategory DetailsList}
 */
export interface IShimmeredDetailsListStyles {
  /**
   * Represents styles passed to the `List` component for creating a fade-out to the bottom overlay.
   */
  root: IStyle;
}
