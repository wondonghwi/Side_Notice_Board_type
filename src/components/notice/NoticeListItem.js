import React, { useCallback } from 'react';
import '../../scss/styles.scss';

const NoticeListItem = ({dataList, onRowClick}) => {

  //Row를 클릭했을때 name을 넘겨주는 함수
  const handleRowClick = useCallback((Title) => {
    if (onRowClick) {
      onRowClick(Title)
    }
  }, [onRowClick]);

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
        <tr key={index} onClick={() => handleRowClick(Title)}
            className='cursor-pointer'
        >
          <td>{No}</td>
          <td>{Title}</td>
          <td>{Kind}</td>
          <td>{Revisit}</td>
          <td>{Writer}</td>
          <td>{CreateDate}</td>
        </tr>
      )
    })
  }, [dataList, handleRowClick]);

  return (
    <>
      <table className='table table-bordered table-hover'>
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
