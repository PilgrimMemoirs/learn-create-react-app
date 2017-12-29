import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import HelloWorldList from './HelloWorldList';
import AddGreeter from './AddGreeter';
import HelloWorld from './HelloWorld';

describe (HelloWorldList, () => {
  const component = shallow(
    <HelloWorldList />
  );

  it('renders and matches our snapshot', () => {
    const component = renderer.create(
      <HelloWorldList />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })
});
