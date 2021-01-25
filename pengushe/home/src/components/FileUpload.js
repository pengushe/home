import React, { useState } from 'react';
import Axios from 'axios';
import '../style/App.css';
// import useCallback from 'react';
// import { useDropzone } from 'react-dropzone'
// import Project from './components/Project';
// import Sector from './components/Sector'
// import Image1 from './img/logo.png';

function FileUpload() {
  // ready for upload
  const [imageReady, setImageReady] = useState("");
  // select the image
  const [imageSelect, setImageSelected] = useState("");
  // parameter for uploading to Cloudinary
  const uploadImage = () => {
    const formData = new FormData();
    formData.append("file", imageSelect);
    formData.append("resource_type", "auto");
    formData.append("upload_preset", "ugployuy");
    Axios.post(
      'https://api.cloudinary.com/v1_1/pengushe-home/image/upload',
      formData
    ).then((response) => { window.alert("你的文件已经传送到数据库里：）") });
  }
  // // select the image in Dropzoon and upload to Cloudinary
  // const onDrop = useCallback((acceptedFiles) => {
  //   const formData = new FormData();
  //   formData.append("file", imageSelect);
  //   formData.append("upload_preset", "ugployuy");
  //   Axios.post(
  //     'https://api.cloudinary.com/v1_1/pengushe-home/image/upload',
  //     formData
  //   ).then((response) => { window.alert("你上传的文件已经传送到数据库里！") });
  // }, [])
  // const { getRootProps, getInputProps} = useDropzone({
  //   onDrop,
  //   accept: "image/*",
  //   multiple: true,
  // });

  return (
    <div>
      <h1 hidden>文件已经准备好上传，点击上传键</h1>
      <div className="input-group">
        <div className="custom-file">
          <input type="file" className="custom-file-input" id="文件上传"
            onChange={(event) => {
              setImageSelected(event.target.files[0]);
              window.alert("文件已经准备好上传，点击上传键，如果想换一个图片上传，点击OK，然后请先刷新界面");
            }}
          />
          <label className="custom-file-label" htmlFor="文件上传">选择文件</label>
        </div>
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="button"
            onClick={uploadImage}
          >点击上传</button>
        </div>
      </div>
      <div>
      </div>
    </div>
  );
  {/* <div className="form form-inline">
    <input type="file" onChange={(event) => {
      setImageSelected(event.target.files);
    }} />
    <button className="btn btn-primary btn-block" onClick={uploadImage}>点击上传</button>
  </div> */}
  {/* <div
    {...getRootProps()}
    // className={`${styles.dropzone} ${isDragActive ? styles.active : null}`}
  >
    <input {...getInputProps()} />
    <h1>Drop Zone</h1>
  </div> */}
}

export default FileUpload;
