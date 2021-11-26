import React,{useState} from 'react';
import './assets/css/App.css';
import {Recorder} from './Recorder';
import {Player} from './Player';

function App() {
  

  const [recordStarted, setRecordStarted] = useState(false)

  const [blobUrl,setBlobUrl] = useState<string>("")

  
  return (
    <div className="App" title="Record player app" >
      <h1 className="title">RecordMe!</h1>
      <Recorder recordStart={recordStarted} setRecord={setRecordStarted} setBlobUrl={setBlobUrl}/>
      <Player recordStart={recordStarted} mediaBlobUrl={blobUrl} />
    </div>
  );
}




export default App;
