import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Image, Video, Transformation, CloudinaryContext } from 'cloudinary-react';
import FileUpload from './components/FileUpload';
import 'bootstrap/dist/css/bootstrap.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cloudName: "pengushe-home",
      publicId: 'sample',
      width: '0.5',
      crop: 'scale',
      value: '',
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
  setValue(value) {
    this.setState({ value: value });
  }
  render() {
    return (
      <div>
        {/* 上传文件 */}
        <FileUpload selectValue={
          { setValue: this.setValue.bind(this) }
        } />
        <div>
          <div class="mb-3">
            <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"
              value={this.state.value}
              onChange={({ target: { value } }) => this.setState({ value, copied: false })} readOnly />
            <CopyToClipboard text={this.state.value}
              onCopy={() => this.setState({ copied: true })}>
              <button>复制图片的URL</button>
            </CopyToClipboard>
          </div>


          {this.state.copied ? <span style={{ color: 'red' }}>Copied.</span> : null}
        </div>
        {/* -end- */}
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">查看已经上传的图片</span>
          </div>
          <input type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" onChange={this.filterID} />
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">更改大小 0.5(%) 或者 200 px</span>
          </div>
          <input type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" onChange={this.changWidth} />

        </div>
        <CloudinaryContext cloudName={this.state.cloudName}>
          <Image publicId={this.state.publicId} width={this.state.width} crop="scale" />
        </CloudinaryContext>
        <p> 已经上传的图片
          youyou1,youyou2,donggua1,test1,test2,test3
        </p>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
