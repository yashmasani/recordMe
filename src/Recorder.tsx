import React,{useState, useEffect} from 'react';
import {RecordPlayer} from './RecordPlayer';
import './assets/css/Recorder.css';

export interface recorderProps {
    recordStart: boolean,
    setRecord: (recordStart: boolean)=>void,
    setBlobUrl: (blobUrl:string)=> void
}

export const Recorder =  ({recordStart, setRecord, setBlobUrl}:recorderProps) => {
  

  return(
    <div className="recorder">
      <div className={recordStart ? "record-loader" : "record-no-load"} aria-label="recording in progress loader"></div> 
      <RecordPlayer  recordStart={recordStart} setRecord={setRecord} setBlobUrl={setBlobUrl}/>
    </div>
    
  )

}

