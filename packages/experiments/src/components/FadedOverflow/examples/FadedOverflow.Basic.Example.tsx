import * as React from 'react';

import { FadedOverflow } from '@uifabric/experiments/lib/FadedOverflow';
import { createListItems } from '@uifabric/example-app-base/lib/utilities/data';
import { DetailsList, IColumn, buildColumns, CheckboxVisibility } from 'office-ui-fabric-react/lib/DetailsList';

export interface IExampleItem {
  description: string;
  shape: string;
  location: string;
}

// tslint:disable-next-line:no-any
const _items: IExampleItem[] = createListItems(10);

const _columns: IColumn[] = _buildColumns();

export const FadedOverflowBasicExample = () => (
  <div className="FadedOverflowBasicExample-container">
    Basic FadedOverflow
    <DetailsList
      items={_items}
      columns={_columns}
      setKey="items"
      onRenderItemColumn={onRenderItemColumn}
      checkboxVisibility={CheckboxVisibility.hidden}
    />
  </div>
);

function _buildColumns(): IColumn[] {
  return buildColumns(_items, true).filter(
    // tslint:disable-next-line:typedef
    column => column.name === 'description' || column.name === 'shape' || column.name === 'location'
  );
}

// tslint:disable-next-line:no-any
function onRenderItemColumn(item: any, index: number, column: IColumn): JSX.Element {
  if (column.key === 'description') {
    return (
      <FadedOverflow lineHeight={16}>
        <span>{item.description}</span>
      </FadedOverflow>
    );
  }

  return item[column.key];
}
