import React,{useEffect} from 'react';
import {useReactMediaRecorder} from 'react-media-recorder';
import RecordButtonIcon from './assets/svg/record-button-svgrepo-com.svg';
import stopRecordButtonIcon from './assets/svg/stop-svgrepo-com.svg';
import {recorderProps} from './Recorder'

interface reactMediaRecorder{
  
    startRecording: ()=>void,
    stopRecording: ()=>void ,
    mediaBlobUrl: string | null


}


export const RecordPlayer = ({recordStart, setRecord, setBlobUrl}: recorderProps ) =>{
  
  const {startRecording, stopRecording, mediaBlobUrl}:reactMediaRecorder = useReactMediaRecorder({video:false})
  
  
  
  const startClicked = () => {
      startRecording()
      setRecord(true)
  }

  const stopClicked = () => {
      stopRecording()
      setRecord(false)
  }


  useEffect(()=>{
   
      if(mediaBlobUrl!== null){
          setBlobUrl(mediaBlobUrl)
      } 
      
  },[mediaBlobUrl])

  return(
    <div className="record-player" aria-label="Record Player">  
        <button onClick={startClicked} aria-label="start Recording" disabled={recordStart}>
            <img alt="Record button" src={RecordButtonIcon} className="player-buttons round-border"/>
            <p className="white">Start</p>  
        </button>
        <button aria-label="stop Recording" onClick={stopClicked} disabled={!recordStart}>
            <img alt="Stop Record Button" src={stopRecordButtonIcon} className="player-buttons"/> 
            <p>Stop</p>
        </button>
    </div>
  )

}
