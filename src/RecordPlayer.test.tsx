import React from 'react';
import '@testing-library/jest-dom';
import {RecordPlayer} from './RecordPlayer';
import renderer from 'react-test-renderer'

it('Record Player renders correctly at start', () => {
  
  const mockedSetRecord = jest.fn(()=>{})
  const mockedSetBlobUrl = jest.fn(()=>"") 
  const defaultStateRecord = false;
    
  const tree = renderer
    .create(<RecordPlayer setRecord={mockedSetRecord} setBlobUrl={mockedSetBlobUrl} recordStart={false}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});






