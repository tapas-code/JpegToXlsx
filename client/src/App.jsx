import React, { useState } from 'react';
import FolderUpload from './components/FolderUpload';
import ExcelPreview from './components/ExcelPreview';
import FileUploader from './components/FileUploader';

const App = () => {
  const [imgFiles, setImgFiles] = useState([]);

  const filesUpload = (files) => {
    setImgFiles(Array.from(files));
    console.log(files);
  };

  return (
    <>
      {/* <FolderUpload filesUpload={filesUpload} />
      <ExcelPreview imgFiles={imgFiles} /> */}
      <FileUploader/>
    </>
  );
};

export default App;
