import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = (props) => {
  const {notes} = props
  const result = notes.map(note => note.content)
  return (
    <div>
      <h1>Notes</h1>
      <ul> 
     {result.map((content, index) => (
          <li key={index}>{content}</li>
        ))}
      </ul>
    </div>
    
  );
  
} 

export default App
