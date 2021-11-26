import React from 'react';
import '@testing-library/jest-dom';
import {Recorder} from './Recorder';
import renderer from 'react-test-renderer'
import {RecordPlayer} from './RecordPlayer';


  let mockSetRecord = jest.fn(()=>{})
  let  mockSetBlobUrl = jest.fn(()=>"") 
  let defaultStateRecord = false;

it('Recorder renders correctly at start', () => {
  
  const tree = renderer
    .create(<Recorder setRecord={mockSetRecord} setBlobUrl={mockSetBlobUrl} recordStart={defaultStateRecord}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

/**
it('Idle state is rendered with start click', ()=>{

    const tree = renderer
    .create(<Recorder setRecord={mockSetRecord} setBlobUrl={mockSetBlobUrl} recordStart={defaultStateRecord}/>)
    
    const treeInstance = tree.root
    console.log(treeInstance.children)
    //expect(treeInstance.findByType()).toBe('Click Start to start Recording')


})
**/
