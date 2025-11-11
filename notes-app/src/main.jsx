import ReactDOM from 'react-dom/client'
import Note from './components/Note'
import App from './App'

const notes = [
  {
    id: 1,
    content: 'HTML is very easy',
    important: true
  },
  {
    id: 2,
    content: 'Browsers can execute only JS',
    important: false
  },
  {
    id: 3,
    content: 'GET and POST are the most iimpportant methods of HTTP protocols',
    important: true
  }
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <App notes={notes} />
)