import * as React from 'react';

import { ExampleCard, ComponentPage, IComponentDemoPageProps, PropertiesTableSet } from '@uifabric/example-app-base';

import { FadedOverflowBasicExample } from './examples/FadedOverflow.Basic.Example';

const FadedOverflowBasicExampleCode = require('!raw-loader!@uifabric/experiments/src/components/FadedOverflow/examples/FadedOverflow.Basic.Example.tsx') as string;

export class FadedOverflowPage extends React.Component<IComponentDemoPageProps, {}> {
  public render(): JSX.Element {
    return (
      <ComponentPage
        title="FadedOverflow"
        componentName="FadedOverflowExample"
        exampleCards={
          <div>
            <ExampleCard
              title="FadedOverflow with basic elements using the &quot;FadedOverflowElements&quot; prop"
              code={FadedOverflowBasicExampleCode}
            >
              <FadedOverflowBasicExample />
            </ExampleCard>
          </div>
        }
        propertiesTables={
          <PropertiesTableSet
            sources={[
              require<string>('!raw-loader!@uifabric/experiments/src/components/FadedOverflow/FadedOverflow.types.ts')
            ]}
          />
        }
        overview={
          <div>
            <p>FadedOverflow overview TODO</p>
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
