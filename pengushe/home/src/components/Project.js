import React from 'react';
import ReactDom from 'react-dom';
import './css/Style.css';
const Project = (props) => {
  return (
    <div>
      <div class="col-md-3 col-xs-6 works-list">
        <div class="img-box">
          {/* <!-- modal start --> */}
          <a class="button" href={"#" + props.id}>
            <div class="img-box">
              <img src={props.imgPath} alt={props.imgName} />
            </div>
          </a>
          <div class="popup" id={props.id}>
            <div class="popup-inner">
              <div class="popup__fullSize">
                <img src={props.imgPath} alt={props.imgName} />
              </div>
              <a class="popup__close" href="#work">X</a>
            </div>
          </div>
          {/* <!-- modal end --> */}
        </div>
      </div>
    </div>
  );
}
export default Project;