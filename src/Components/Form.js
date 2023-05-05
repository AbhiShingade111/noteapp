import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addNote } from '../Redux/Action';
import './Form.css'

export default function Form() {

    let [title, setTitle] = useState('');
    let [content, setContent] = useState('');

    const dispatch = useDispatch()
    const navigate = useNavigate()

    function handleSubmission(e) {
        e.preventDefault()
        dispatch(addNote(title, content))
        setTitle('')
        setContent('')
        alert("Note added successfully.......")
    }

    return (
        <div className='container'>
            <h2 className='text-center mt-3' style={{ fontFamily: "monospace" }}>NOTE APP</h2>
            <div className='outer'>
                <div className='mt-4 formbox'>
                    <form onSubmit={handleSubmission} className='p-5'>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Title</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" value={title} name='title' onChange={(e) => setTitle(e.target.value)} placeholder="Enter Title Here..." required />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Note </label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={content} name='content' onChange={(e) => setContent(e.target.value)} placeholder='Write Text Here' required></textarea>
                        </div>
                        <div className='add-btn'>
                            <button type='submit' className='add-note-btn' >Add Note</button>
                            <button className="add-note-btn" role="button" onClick={() => navigate('/all')}>All Notes</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}
