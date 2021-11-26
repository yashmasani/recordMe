import React,{useState, useEffect} from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { SxProps } from '@mui/system';

const style:SxProps = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '70%',
  bgcolor: '#262927',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  textAlign:'center',
};


export const Player= ({recordStart, mediaBlobUrl}:{recordStart: boolean,mediaBlobUrl: string}) =>{
 
  const [recordComplete,setRecordComplete] = useState<number>(0);
  const [modalOn, setModalOn] = useState(false)
  const [parsedBlob, setParsedBlob] = useState(mediaBlobUrl)

  useEffect(()=>{
      
      setRecordComplete(recordComplete+1);
      if(recordComplete%2===0 && recordComplete>0){ 
          setModalOn(true);

      }

  },[recordStart])


  useEffect(()=>{
    setParsedBlob(mediaBlobUrl.slice(mediaBlobUrl.indexOf("0/")+2))
  },[mediaBlobUrl])



  const handleClose =()=> setModalOn(false);
  
  return(<>
    <Modal open={modalOn} onClose={handleClose} aria-describedby="Audio player"> 
      <Box sx={style}>
          <p className="fileName">{`${parsedBlob}.wav`}</p>
          <audio controls  src={mediaBlobUrl} className="audio-player"/>
      </Box>
    </Modal></>
  )

}

