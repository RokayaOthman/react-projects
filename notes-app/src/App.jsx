import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = (props) => {
  const {notes} = props
  const result = notes.map(note => note.content)
  return (
   <ul>
    {
      notes.map((note,i) =>
        <li key={i}>{note.content}</li>
      )
    }
   </ul>
  );
  
} 

export default App
