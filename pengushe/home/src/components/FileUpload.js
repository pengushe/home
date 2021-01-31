import React, { useState } from 'react';
import Axios from 'axios';
import '../style/App.css';
import Highlight from 'react-highlight';
// import useCallback from 'react';
// import { useDropzone } from 'react-dropzone'
// import Project from './components/Project';
// import Sector from './components/Sector'
// import Image1 from './img/logo.png';

var upload_preset = "work_img";
const FileUpload = (props) => {
  // display public_id and secure_url
  const [url, setURL] = useState("");
  // select the image
  const [imageSelect, setImageSelected] = useState("将这个URL送给代码组：）");
  // parameter for uploading to Cloudinary
  const uploadImage = async () => {
    try {
      const formData = new FormData();
      formData.append("file", imageSelect);
      formData.append("resource_type", "auto");
      formData.append("upload_preset", upload_preset);
      Axios.post(
        'https://api.cloudinary.com/v1_1/pengushe-home/image/upload',
        formData
      ).then(
        (response) => {
          window.alert("你的文件已经传送到数据库里：）");
          setURL(response.data.secure_url);
        });
    } catch (error) {
      window.alert("文件没有成功上传，可能是你的文件超过了10M");
    }
  }

  function changeImgType(event) {
    if (event.target.value == "option1") {
      upload_preset = "profile_img";
    }
    else {
      upload_preset = "work_img";
    }
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
      <div className="container" style={{ marginTop: "2%" }}>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"
            onChange={changeImgType} />
          <label className="form-check-label" for="inlineRadio1">上传个人图像</label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"
            onChange={changeImgType} />
          <label className="form-check-label" for="inlineRadio2">上传个人素材</label>
        </div>
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
            <button className="btn btn-sm btn-outline-secondary" type="button"
              onClick={() => props.selectValue.setValue(url)}
            >显示图片的URL</button>
          </div>
        </div>
        <div>
        </div>
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
