import React, { useState } from 'react'

const FolderUpload = ({ filesUpload }) => {
    const [files, setFiles] = useState([]);

    const handleChange = async (event) => {
        const imgFiles = await (event.target.files);
        setFiles(imgFiles);
    }

    const handleUpload = () => {
        if(files.length !== 0)
            filesUpload(files);
    }

    return (
        <>
            <input type='file' multiple onChange={handleChange} />
            <h1>Preview</h1>
            {files.length !== 0 ? Array.from(files).map((f, index)=> (
                <div key={index}>
                    <h2>{index+1}- Name: {f.name}, Size: {f.size}</h2>
                </div>
            )):<h3>No files to preview.</h3>}
            <button className='mt-4' onClick={handleUpload}>Upload</button>
        </>
    )
}

export default FolderUpload
