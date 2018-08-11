import * as React from 'react';

import { BaseComponent, classNamesFunction } from '../../Utilities';
import { IFadientProps, IFadientStyleProps, IFadientStyles } from './Fadient.types';

const getClassNames = classNamesFunction<IFadientStyleProps, IFadientStyles>();

export class FadientBase extends BaseComponent<IFadientProps, {}> {
  private _classNames: { [key in keyof IFadientStyles]: string };

  constructor(props: IFadientProps) {
    super(props);
  }

  public render(): JSX.Element {
    const { styles, theme, className } = this.props;

    this._classNames = getClassNames(styles, { theme: theme!, className });

    return <div className={this._classNames.root}>Hello World!</div>;
  }
}
