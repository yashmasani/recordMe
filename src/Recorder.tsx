import React,{useState, FunctionComponent} from 'react';
import {RecordPlayer} from './RecordPlayer';
import './Recorder.css';

export const Recorder:FunctionComponent =  () => {
    
  
  const [recordStarted, setRecordStarted] = useState(false)

  return(
    <div>
      {/** Progress Bar with Animation  -- keeps moving until stop button  **/}
      <div className={recordStarted ? "record-loader" : "record-no-load"} aria-label="recording in progress loader"></div>
      <RecordPlayer  recordStart={recordStarted} setRecord={setRecordStarted} />
    </div>
    
  )

}

