import React, { useEffect, useState } from 'react'
import { Navigate, useParams } from "react-router-dom";
import Editor from '../Editor';



const EditPost = () => {
    const {id} = useParams();
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const [files, setFiles] = useState('');

    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        fetch("http://localhost:4000/post" + id)
        .then(response => {
            response.json().then(postInfo => {
                setTitle(postInfo.title);
                setSummary(postInfo.summary);
                setContent(postInfo.content);
            })
        })
    }, [])

    function updatePost(ev) {
        ev.preventDefault();
        fetch("http://localhost:4000/post", { redirect  })
    }


    if (redirect) {
        return <Navigate to={'/'} />;
    }

    return (
        <form onSubmit={updatePost}>
            <input type="title"
                placeholder={'Title'}
                value={title}
                onChange={ev => setTitle(ev.target.value)}
            />

            <input type="summary"
                placeholder={'Summary'}
                value={summary}
                onChange={ev => setSummary(ev.target.value)}
            />
            <input type="file"
                onChange={ev => setFiles(ev.target.files)}
            />
            <Editor onChange={setContent} value={content}/>
            <button style={{ marginTop: '5px' }}>Update Post</button>
        </form>
    )
}

export default EditPost