import * as React from 'react';

import { Fadient } from '@uifabric/experiments/lib/Fadient';

export class FadientBasicExample extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props);
  }

  public render(): JSX.Element {
    return (
      <div className="FadientBasicExample-container">
        Basic Fadient
        <Fadient />
      </div>
    );
  }
}
