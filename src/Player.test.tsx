
import React from 'react';
import '@testing-library/jest-dom';
import {Player} from './Player';
import renderer from 'react-test-renderer'
import {render, screen} from "@testing-library/react";


it('Audio Player renders correctly at start', () => {
  
  const templateString = "test";
  const defaultStateRecord = false;

  const play = render(<Player recordStart={defaultStateRecord} mediaBlobUrl={templateString} />)
  
  expect(play).toBeTruthy()
  expect(play).toMatchSnapshot()
})
