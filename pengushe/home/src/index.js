import React, { useState } from 'react';
import ReactDom from 'react-dom';
import Axios from 'axios';
// import useCallback from 'react';
// import { useDropzone } from 'react-dropzone'
// import styles from './style/App.css';
// import Project from './components/Project';
// import Sector from './components/Sector'
// import Image1 from './img/logo.png';

function App() {
  // select the image
  const [imageSelect, setImageSelected] = useState("");
  // parameter for uploading to Cloudinary
  const uploadImage = () => {
    const formData = new FormData();
    formData.append("file", imageSelect);
    formData.append("upload_preset", "ugployuy");
    Axios.post(
      'https://api.cloudinary.com/v1_1/pengushe-home/image/upload',
      formData
    ).then((response) => { window.alert("你文件已经传送到数据库里：）") });
  }
  // // select the image in Dropzoon and upload to Cloudinary
  // const onDrop = useCallback(acceptedFiles => {
  //   const formData = new FormData();
  //   formData.append("file", acceptedFiles);
  //   formData.append("upload_preset", "ugployuy");
  //   Axios.post(
  //     'https://api.cloudinary.com/v1_1/pengushe-home/image/upload',
  //     formData
  //   ).then((response) => { window.alert("你上传的文件已经传送到数据库里！") });
  //   console.log(acceptedFiles);
  // }, [])
  // const { getRootProps, getInputProps, isDragActive } = useDropzone({
  //   onDrop,
  //   accept: "image/*",
  //   multiple: false,
  // });

  return (
    <div>
      {/* <div
        {...getRootProps()}
        className={`${styles.dropzone} ${isDragActive ? styles.active : null}`}
      >
        <input {...getInputProps()} />
        Drop Zone
      </div> */}
      <div className="form form-inline">
        <input type="file" onChange={(event) => {
          setImageSelected(event.target.files[0]);
        }} />
        <button className="btn btn-primary" onClick={uploadImage}>upload image</button>
      </div>
    </div>
  );
}

ReactDom.render(<App />, document.getElementById('root'));
