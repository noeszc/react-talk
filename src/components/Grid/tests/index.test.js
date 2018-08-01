import React from 'react';
import { shallow } from 'enzyme';

import GridItem from 'components/GridItem';
import Grid from '../index';

describe('<Grid />', () => {
  it('should render the component if no items are passed', () => {
    const renderedComponent = shallow(<Grid component={GridItem} />);
    expect(renderedComponent.find(GridItem)).toBeDefined();
  });

  it('should pass all items props to rendered component', () => {
    const items = [{ id: 1, name: 'Hello' }, { id: 2, name: 'World' }];

    const component = ({ item }) => <GridItem>{item.name}</GridItem>;
    const renderedComponent = shallow(
      <Grid items={items} component={component} />
    );
    expect(renderedComponent.find(component)).toHaveLength(2);
    expect(
      renderedComponent
        .find(component)
        .at(0)
        .prop('item')
    ).toBe(items[0]);
    expect(
      renderedComponent
        .find(component)
        .at(1)
        .prop('item')
    ).toBe(items[1]);
  });
});
