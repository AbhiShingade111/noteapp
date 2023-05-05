import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeNote } from '../Redux/Action'
import { Link, useNavigate } from 'react-router-dom'
import './Allnote.css'

export default function Allnotes() {

  const notes = useSelector((state) => state.notes)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  console.log(notes)

  return (
    <div className='all-note-home'>
      <button className='update-note-btn' onClick={() => navigate('/')}>Add Note</button>
      <h2 className='text-center mb-4' style={{ fontFamily: "monospace" }}>ALL NOTES</h2>
      <div className='notes'>
        {
          notes.map((note, index) => {
            return (
              <>
                <div className='one-note'>
                  <p className='note-title'>{note.title}</p>
                  <p className='note-content'>{note.content}</p>
                  <div className='update-btn'>
                    <button className='update-note-btn' onClick={() => dispatch(removeNote(index))}>Delete</button>
                    <Link to={`/update/${index}`}>
                      <button className='update-note-btn'>Update</button>
                    </Link>
                  </div>

                </div>
              </>
            )
          })
        }
      </div>



    </div>
  )
}