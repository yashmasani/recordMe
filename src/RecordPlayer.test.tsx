import React from 'react';
import '@testing-library/jest-dom';
import {RecordPlayer} from './RecordPlayer';
import renderer from 'react-test-renderer'

it('Record Player renders correctly at start', () => {
  
  const mockSetRecord = jest.fn(()=>{})
  const mockSetBlobUrl = jest.fn(()=>"") 
  const defaultStateRecord = false;
    
  const tree = renderer
    .create(<RecordPlayer setRecord={mockSetRecord} setBlobUrl={mockSetBlobUrl} recordStart={defaultStateRecord}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});








