
import React from 'react';
import '@testing-library/jest-dom';
import {Player} from './Player';
import renderer from 'react-test-renderer'

it('Audio Player renders correctly at start', () => {
  
  const templateString = "";
  const defaultStateRecord = false;

  const tree = renderer
    .create(<Player recordStart={defaultStateRecord} mediaBlobUrl={templateString} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

