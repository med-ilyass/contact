import { useState } from 'react'
import './App.css'
import ContactList from './components/ContactList'

function App() {
  const [contact, setContact] = useState([])

  return (
    <>
    <ContactList />
    </>
  )
}

export default App
