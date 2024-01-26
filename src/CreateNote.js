import React from 'react'
import Note from './Note'

const CreateNote = (props) => {

  return (
    <div className='notes'>
      {
        props.notes.map((value) => {
          return (
            <Note note={value} key={value.id} deleteNote={props.deleteNote} updateText={props.updateText} />
          )
        })
      }
    </div>
  );
}

export default CreateNote