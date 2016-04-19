import React from 'react';

const AddIndex = ({additions}) => (
  <div className="content-wrapper">
    <div className="sidebar-toggler visible-xs">
      <i className="ion-navicon"></i>
    </div>
    <div className="header">
      Addition Exercises
    </div>
    <div className="steps">
      <div className="step done">
        <div className="info">
          <span className="number">
            <i className="ion-checkmark-circled"></i>
          </span> 
          This is an example of a module that has been completed
        </div>
        <a href="#" className="disabled button">
          <span>Start</span>
        </a>
      </div>
      {
        additions.map((item, index) => (
          <div key={item._id} className="step">
            <div className="info">
              <span className="number">{index + 1}</span> 
              {item.title}
            </div>

            <a href={`/addition/${item._id}`} className="button">
              <span>Start</span>
            </a>
          </div>
        ))
      }
    </div>
  </div>
);

export default AddIndex;
