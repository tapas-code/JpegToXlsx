import React, { useState } from "react";

const FileUploader = () => {
  const [files, setFiles] = useState([]);
  const [uploadStatus, setUploadStatus] = useState(false);

  const handleChange = (event) => {
    const uploadedFiles = Array.from(event.target.files);
    setFiles(uploadedFiles);
    setUploadStatus(true);
    previewFiles(uploadedFiles);
    console.log(uploadedFiles);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
    event.target.classList.add("border-indigo-500");
  };
  const handleDragLeave = (event) => {
    event.preventDefault();
    event.stopPropagation();
    event.target.classList.remove("border-indigo-500");
  };
  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    event.target.classList.remove("border-indigo-500");
    event.target.classList.add("border-green-700");

    const droppedFiles = Array.from(event.dataTransfer.files);
    setFiles(droppedFiles);
    setUploadStatus(true);
    previewFiles(droppedFiles);
  };
  const previewFiles = (files) => {
    // Use FileReader to read and display image previews
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        const img = document.createElement("img");
        img.src = reader.result;
        document.getElementById("preview").appendChild(img);
      };
      reader.readAsDataURL(file);
    });
  };
  const handleUpload = () => {
    console.log(files);
    document.getElementById("container").classList.remove("border-green-700");
    setUploadStatus(false);
  };

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto sm-px-6 lg:px-8">
        <div
          id="container"
          className="flex flex-col items-center px-6 py-12 border-4 border-dashed border-gray-600 rounded-xl "
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <svg
            className="w-12 h-12 text-indigo-400 mb-4"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 48 48"
          >
            <path
              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>

          <p className="text-xl text-gray-300">Drag and Drop files to upload</p>
          <p>or</p>

          {uploadStatus ? (
            <>
              <button
                className="mt-2 font-medium shadow-lg hover:shadow-sm hover:shadow-indigo-900"
                onClick={handleUpload}
              >
                Upload
              </button>
              <p className="text-xs text-neutral-400 mt-6">
                Maximum upload file size: 15MB.
              </p>
            </>
          ) : (
            <>
              <label className="mt-2 font-medium shadow-lg hover:shadow-sm hover:shadow-indigo-900">
                Select Files
                <input
                  type="file"
                  name="file"
                  multiple
                  className="sr-only"
                  onChange={handleChange}
                />
              </label>
              <p className="text-xs text-neutral-400 mt-6">
                Maximum upload file size: 15MB.
              </p>
            </>
          )}
        </div>
        <div id="preview" className="grid grid-cols-3 grif-rows-5 mt-8">
          {/* Image previews will be displayed here */}
        </div>
      </div>
    </div>
  );
};

export default FileUploader;
