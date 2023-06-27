import React from 'react'

const SubTitle = (props) => {
  return (
  <div className='d-flex justify-content-between pt-4'>
  <div className='sub-title'>{props.title}</div>
  {
    props.btnTitle != null ? (<button className='btn btn-warning'>{props.btnTitle}</button>) : null
  }
  </div>
  );
};

export default SubTitle;