import React from 'react';


const Sector = (props) => {
  return (
    <div>
      <div class="works-img clearfix" id={props.id}>
        {props.children}
      </div>
    </div>
  );
}
export default Sector;