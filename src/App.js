import React, { useEffect, useState } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header'
import Sidebar from './Sidebar'
import CreateNote from './CreateNote'
import Fab from '@mui/material/Fab';
import EditNoteIcon from '@mui/icons-material/EditNote';

function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []);
  
  const addNote = (color) => {
    const tempNotes = [...notes]

    tempNotes.unshift({
      id: Date.now() + "" + Math.floor(Math.random() * 78),
      text: "",
      time: Date.now(),
      color
    });

    setNotes(tempNotes);
  }

  const deleteNote = (id) => {
    const tempNotes = [...notes]

    const index = tempNotes.findIndex((value) => value.id === id)
    if (index < 0) return;

    tempNotes.splice(index, 1)
    setNotes(tempNotes)
  }

  const updateText = (text, id) => {
    const tempNotes = [...notes]

    const index = tempNotes.findIndex((value) => value.id === id)

    tempNotes[index].text = text;
    setNotes(tempNotes)
  }

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes])

  return (
    <>
      <Header />
      <section id='main-container'>
        <div className="container">
          <div className="side-bar">
            <Sidebar addNote={addNote} />
          </div>
          <div className="note-container">
          {
            notes.length?
            <CreateNote notes={notes} deleteNote={deleteNote} updateText={updateText} />
            :<div className='no-notes'>
              <Fab size="large" className='btn'>
                <EditNoteIcon fontSize='large' />
              </Fab>
              <h2>No notes here yet</h2>
            </div>
          }
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
