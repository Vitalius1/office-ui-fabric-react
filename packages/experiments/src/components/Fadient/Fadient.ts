import { styled } from '../../Utilities';
import { IFadientProps, IFadientStyleProps, IFadientStyles } from './Fadient.types';
import { getStyles } from './Fadient.styles';
import { FadientBase } from './Fadient.base';

export const Fadient = styled<IFadientProps, IFadientStyleProps, IFadientStyles>(FadientBase, getStyles, undefined, {
  scope: 'Fadient'
});
