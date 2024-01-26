import React from 'react'
import Fab from '@mui/material/Fab';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

let timer = 500, timeout

const Note = (props) => {

  const formatDate = (value) => {
    const date = new Date(value);
    const monthName = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Augest', 'Sept', 'Oct', 'Nov', 'Dec']
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

    let hrs = date.getHours();
    let ampm = hrs > 12? "PM":"AM";
    hrs = hrs ? hrs : "12";
    hrs = hrs > 12 ? (hrs = hrs - 12): hrs;
  
    let min = date.getMinutes();
    min = min < 10 ? "0" + min : min;
  
    const day = days[date.getDay()];
    const month = monthName[date.getMonth()];
    let d = date.getDate();
    let year = date.getFullYear();
  
    return `${day}, ${month} ${d},${year} ${hrs}:${min} ${ampm}`;
  }
    
  const debounce = (func) => {
    clearTimeout(timeout)
    timeout=setTimeout(func, timer);
  }
  
  const updateText = (text, id) => {
    debounce(() => props.updateText(text, id))
  }

  return (
    <div className='note' style={ {backgroundColor: props.note.color} }>
      <textarea name="note" defaultValue={props.note.text} onChange={(event) => updateText(event.target.value, props.note.id)}></textarea>
      <p>{formatDate(props.note.time)}</p>
      <Fab size="small" color="secondary" aria-label="add" className="icon delete" onClick={() => props.deleteNote(props.note.id)}>
        <DeleteForeverIcon fontSize='medium' />
      </Fab>
    </div>
  );
}

export default Note