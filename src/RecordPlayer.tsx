import React,{useState, FunctionComponent} from 'react';
import {useReactMediaRecorder} from 'react-media-recorder';
import RecordButtonIcon from './assets/record-button-svgrepo-com.svg';
import stopRecordButtonIcon from './assets/stop-svgrepo-com.svg';

interface reactMediaRecorder{
  
    status: string,
    startRecording: ()=>void,
    stopRecording: ()=>void ,
    mediaBlobUrl: string | null


}


interface recorderProps {
    recordStart: boolean,
    setRecord: (recordStarted: boolean)=>void
}

export const RecordPlayer = ({recordStart, setRecord}: recorderProps ) =>{
  
  const {status, startRecording, stopRecording, mediaBlobUrl}:reactMediaRecorder = useReactMediaRecorder({video:false})
  
  
  
  const startClicked = () => {
      startRecording()
      setRecord(true)
  }

  const stopClicked = () => {
      stopRecording()
      setRecord(false)
  }

  

  return(
    <div className="" aria-label="Record Player">
        <button onClick={startClicked} aria-label="start Recording" disabled={recordStart}>:
            <img alt="Record button" src={RecordButtonIcon} className="player-buttons"/>
        </button>
        <button aria-label="stop Recording" onClick={stopClicked} disabled={!recordStart}>            <img alt="Stop Record Button" src={stopRecordButtonIcon} className="player-buttons"/> 
        </button>
    </div>
  )

}
