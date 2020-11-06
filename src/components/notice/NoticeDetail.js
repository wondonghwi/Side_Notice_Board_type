import React from 'react';
import { MODE } from "../../common/CommonConst";

const NoticeDetail = ({location}) => {

  const {mode} = location.state
  const {title} = location.state

  console.log(mode)
  console.log(title)

  return (
    <>
      <div>
        <h1>{title}</h1>
      </div>
      <div className="row">
        <div className="col-4">
          Title :
        </div>
        <div className="col-8 ">
          <input type="text" className='w-50'/>
        </div>
      </div>

      <div className="row">
        <div className="col-4">
          Kind :
        </div>
        <div className="col-8 ">
          <select className='w-25'/>
        </div>
      </div>

      <div className="row">
        <div className="col-4">
          Contents :
        </div>
        <div className="col-8 ">
          <textarea className='w-50'/>
        </div>
      </div>

      <div className="row">
        <div className="col-4">
          Revisit :
        </div>
        <div className="col-8 ">
          <select className='w-25'/>
        </div>
      </div>

      {/*mode가 Edit일때만 보이도록 설정*/}
      {mode === MODE.EDIT && (
        <div className="row">
          <div className="col-4">
            Writer :
          </div>
          <div className="col-8 ">
            <input className='w-50' readOnly/>
          </div>
        </div>
      )}

      {/*mode가 Edit일때만 보이도록 설정*/}
      {mode === MODE.EDIT && (
        <div className="row">
          <div className="col-4">
            Create Date :
          </div>
          <div className="col-8 ">
            <input className='w-50' readOnly/>
          </div>
        </div>
      )}
    </>
  );
};

export default React.memo(NoticeDetail);
