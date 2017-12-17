import React from 'react';
import Nav from './Nav';
import renderer from 'react-test-renderer';


it('renders with the right amount of icons', () => {
  const component = renderer.create(
      <Nav />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
