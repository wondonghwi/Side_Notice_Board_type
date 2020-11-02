import React, { useCallback } from 'react';

const NoticeListItem = ({dataList}) => {

  //NoticeList의 list
  const NoticeLists = useCallback(() => {
    return dataList.map((list, index) => {

      const {
        No,
        Title,
        Kind,
        Revisit,
        Writer,
        CreateDate,
      } = list;

      return (
        <tr key={index}>
          <td>{No}</td>
          <td>{Title}</td>
          <td>{Kind}</td>
          <td>{Revisit}</td>
          <td>{Writer}</td>
          <td>{CreateDate}</td>
        </tr>
      )
    })
  }, [dataList]);

  return (
    <>
      <table className='table table-bordered'>
        <thead>
        <tr>
          <th scope='col'>No</th>
          <th scope='col'>Title</th>
          <th scope='col'>Kind</th>
          <th scope='col'>Revisit</th>
          <th scope='col'>Writer</th>
          <th scope='col'>Create Date</th>
        </tr>
        </thead>
        <tbody>
        {
          NoticeLists()
        }
        </tbody>
      </table>
    </>
  );
};

export default NoticeListItem;
