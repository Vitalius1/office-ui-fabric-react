import * as React from 'react';

import { ExampleCard, ComponentPage, IComponentDemoPageProps, PropertiesTableSet } from '@uifabric/example-app-base';

import { FadientBasicExample } from './examples/Fadient.Basic.Example';

const FadientBasicExampleCode = require('!raw-loader!@uifabric/experiments/src/components/Fadient/examples/Fadient.Basic.Example.tsx') as string;

export class FadientPage extends React.Component<IComponentDemoPageProps, {}> {
  public render(): JSX.Element {
    return (
      <ComponentPage
        title="Fadient"
        componentName="FadientExample"
        exampleCards={
          <div>
            <ExampleCard
              title="Fadient with basic elements using the &quot;FadientElements&quot; prop"
              code={FadientBasicExampleCode}
            >
              <FadientBasicExample />
            </ExampleCard>
          </div>
        }
        propertiesTables={
          <PropertiesTableSet
            sources={[require<string>('!raw-loader!@uifabric/experiments/src/components/Fadient/Fadient.types.ts')]}
          />
        }
        overview={
          <div>
            <p>Fadient overview TODO</p>
          </div>
        }
        bestPractices={<div />}
        dos={
          <div>
            <ul>
              <li>TODO</li>
            </ul>
          </div>
        }
        donts={
          <div>
            <ul>
              <li>TOOD</li>
            </ul>
          </div>
        }
        isHeaderVisible={this.props.isHeaderVisible}
      />
    );
  }
}
