import React from 'react';

const NoticeDetail = ({location}) => {

  const {mode} = location.state
  const {title} = location.state

  console.log(mode)
  console.log(title)

  // const locationState = {
  //   mode: location.state.mode,
  //   title: location.state.title,
  // }

  return (
    <>
      <div>
        <h1>{title}</h1>
      </div>
      <div className="row">
        <div className="col-4">
          Title
        </div>
        <div className="col-8 ">
          <input type="text" className='w-50'/>
        </div>
      </div>

      <div className="row">
        <div className="col-4">
          Kind
        </div>
        <div className="col-8 ">
          <select className='w-25'/>
        </div>
      </div>

      <div className="row">
        <div className="col-4">
          Contents
        </div>
        <div className="col-8 ">
          <textarea className='w-50'/>
        </div>
      </div>

      <div className="row">
        <div className="col-4">
          Revisit
        </div>
        <div className="col-8 ">
          <select className='w-25'/>
        </div>
      </div>

      <div className="row">
        <div className="col-4">
          Writer
        </div>
        <div className="col-8 ">
          <input className='w-50' readOnly/>
        </div>
      </div>

      <div className="row">
        <div className="col-4">
          Create Datae
        </div>
        <div className="col-8 ">
          <input className='w-50' readOnly/>
        </div>
      </div>
    </>
  );
};

export default NoticeDetail;
