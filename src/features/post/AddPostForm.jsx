
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectAllUsers } from '../users/userSlice';
import { addNewPost } from './postSlice';

const AddPostForm = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [userId, setUserId] = useState('')
    const [addRequest, setAddRequest] = useState('idle')

    const users = useSelector(selectAllUsers)

    const dispatch = useDispatch()
    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)
    const onAuthorChanged = e => setUserId(e.target.value)


    const canSave = [title, content, userId].every(Boolean) && addRequest === "idle";

    // function that trigger the button to save posts in postslice(addPost)
    const onSaveClick = () => {
        if (canSave) {
            try {
                setAddRequest('pending')
                dispatch(addNewPost({ title, body: content, userId })).unwrap()
                setTitle('')
                setContent('')
                setContent('')
                setUserId('')
            } catch (err) {
                console.error("failed to add")
            }
            finally {
                setAddRequest('idle')
            }
        }
    }



    // renderer map then get individual user objects
    const usersOptions = users.map(user => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ))


    return (
        <section>
            <h2>add a new post</h2>
            <form action="">
                <input
                    id='postTitle'
                    type="text"
                    name='postTitle'
                    value={title}
                    onChange={onTitleChanged}
                />
                <select name=""
                    id="postAuthor"
                    value={userId}
                    onChange={onAuthorChanged}>
                    <option value=""></option>
                    {usersOptions}
                </select>
                <textarea
                    name="postContent"
                    id="postContent"
                    value={content}
                    onChange={onContentChanged}></textarea>
                <button
                    type='button'
                    onClick={onSaveClick}
                    disabled={!canSave}> Save Post</button>
            </form>
        </section>
    )
}

export default AddPostForm