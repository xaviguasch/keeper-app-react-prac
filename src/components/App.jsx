import React from 'react'
import Card from './Card'
import Header from './Header'
import Note from './Note'
import Footer from './Footer'
import contacts from '../contacts'
import notes from '../notes'

function App(props) {
    return (
        <div>
            <Header />

            {notes.map(note => {
                return (
                    <Note
                        key={note.key}
                        title={note.title}
                        content={note.content}
                    />
                )
            })}
            <Footer />
        </div>
    )
}

export default App
