import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { updateNote } from '../Redux/Action'

export default function UpdateForm() {

    const path = useLocation()
    // console.log(path.pathname)
    const userId = path.pathname.replace("/update/", "")
    const user = useSelector((state) => state.notes[userId])
    // console.log(user)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    function handleSubmission(e) {
        e.preventDefault()
        dispatch(updateNote(userId,title, content))
        // setTitle('')
        // setContent('')
        alert("Note Updated SUccessfully")
        navigate('/all')
    }

    let [title, setTitle] = useState(user.title)
    let [content, setContent] = useState(user.content)

    return (
        // <div>
        //     <h1>Note App</h1>
        //     <form onSubmit={handleSubmission}>
        //         <input type='text' value={title} name='title' onChange={(e) => setTitle(e.target.value)} placeholder='Enter Title Here' />
        //         <input type='text' value={content} name='content' onChange={(e) => setContent(e.target.value)} placeholder='Write Text Here' />
        //         <button type='submit' >Update</button>
        //     </form>

        // </div>


<div className='container'>
            <h2 className='text-center mt-3' style={{fontFamily: "monospace"}}>NOTE APP</h2>
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
                            <button type='submit' className='add-note-btn'>Update</button>
                            <button className="add-note-btn" role="button" onClick={() => navigate('/all')}>All Notes</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}
