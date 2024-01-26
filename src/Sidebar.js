import React, { useState } from 'react'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

const Sidebar = (props) => {

  const [expand, setExpand] = useState(false)

  const colors = ["#9b5de5", "#f15bb5", "#fee440", "#00bbf9", "#00f5d4", "#fe9b72"]

  return (
    <>
      <div className='add' onClick={() => setExpand(!expand)}>
        <Fab size="medium" color="secondary" aria-label="add">
          <AddIcon fontSize='medium' />
        </Fab>
      </div>
      <div className={`colors ${expand? "active":""}`}>
        <ul>
        {
          colors.map((value, index) => {
            return (
              <li className='list-item' key={index} style={ {backgroundColor: value} } onClick={() => props.addNote(value)}></li>
            )
          })
        }
        </ul>
      </div>
    </>
  );
}

export default Sidebar