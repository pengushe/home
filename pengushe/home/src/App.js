import React, { Component } from 'react';
import { Image, Video, Transformation, CloudinaryContext } from 'cloudinary-react';
import FileUpload from './components/FileUpload';
import 'bootstrap/dist/css/bootstrap.css';

import { CopyToClipboard } from 'react-copy-to-clipboard';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cloudName: "pengushe-home",
      profileImg: 'https://res.cloudinary.com/pengushe-home/image/upload/v1611980538/profile_img/duizhang.png',
      publicId: '76a24be5037645dfd6e194431cc7d38c',
      width: '0.3',
      crop: 'scale',
      url: '',
      copied: false,
    };
    this.filterID = this.filterID.bind(this);
    this.changWidth = this.changWidth.bind(this);
  }
  filterID(event) {
    this.setState({ publicId: event.target.value });
    event.preventDefault();
  }
  changWidth(event) {
    this.setState({ width: event.target.value });
    event.preventDefault();
  }
  setValue(url) {
    this.setState({ url: url });
  }
  render() {
    return (
      <div>
        {/* 上传文件 */}
        <FileUpload URL={
          { setValue: this.setValue.bind(this) }
        } />
        <div>
          <div class="mb-3">
            <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"
              value={this.state.url}
              onChange={({ target: { url } }) => this.setState({ url, copied: false })} readOnly />
            <CopyToClipboard text={this.state.url}
              onCopy={() => this.setState({ copied: true })}>
              <button>复制URL</button>
            </CopyToClipboard>
            {this.state.copied ? <span style={{ color: 'red' }}>Copied.</span> : null}
          </div>
        </div>
        {/* -end- */}
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">查看已经上传的图片</span>
          </div>
          <input type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" onChange={this.filterID} />
          {/* <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">更改大小 0.5(%) 或者 200 px</span>
          </div>
          <input type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" onChange={this.changWidth} /> */}

        </div>
        <CloudinaryContext cloudName={this.state.cloudName}>

          <Image publicId={this.state.profileImg} width="0.5" crop="scale" thumbnail />
          <p> 个人头像</p>
          <Image publicId={this.state.publicId} width="300" crop="scale" thumbnail fluid/>
          <p> 查看个人作品（上传作品不超过10M）</p>
        </CloudinaryContext>

      </div>
    );
  }
}

export default App;
