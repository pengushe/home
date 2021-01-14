import React from 'react';
import ReactDom from 'react-dom';
import Project from './components/Project';
import Sector from './components/Sector'
import Image1 from './img/logo.png';
import Axios from 'axios';
const api = Axios.create({
  baseURL: 'cloudinary://696971683611278:tpGXwE_UfxnpePkKt-UbQknzG7I@pengushe-home'
});
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cloudName: "pengushe-home",
      publicId: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ publicId: event.target.value });
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <input type="text"
          value={this.state.publicId}
          onChange={this.handleChange}
        />
        <h3>{}</h3>
          <Sector id="logo">
            <Image publicId={this.state.publicId} crop="scale" />
            <Project id="logo1" imgPath={Image1} imgName="logo1" />
          </Sector>
          <Sector id="网页" className="invisible">
            <Project id={Image1} imgPath={Image1} imgName={Image1} />
          </Sector>
          <Sector id="名片" className="invisible">
            <Project id="logo1" imgPath={Image1} imgName="logo1" />
          </Sector>
          <Sector id="宣传海报" className="invisible">
            <Project id="logo1" imgPath={Image1} imgName="logo1" />
          </Sector>
          <Sector id="产品包装" className="invisible">
            <Project id="logo1" imgPath={Image1} imgName="logo1" />
          </Sector>
          <Sector id="期刊设计" className="invisible">
            <Project id="logo1" imgPath={Image1} imgName="logo1" />
          </Sector>
          <Sector id="电商设计" className="invisible">
            <Project id="logo1" imgPath={Image1} imgName="logo1" />
          </Sector>
          <Sector id="影楼后期" className="invisible">
            <Project id="logo1" imgPath={Image1} imgName="logo1" />
          </Sector>
          <Sector id="影视后期" className="invisible">
            <Project id="logo1" imgPath={Image1} imgName="logo1" />
          </Sector>

      </div>
    );
  }
}
ReactDom.render(<App />, document.getElementById('root'));

