import React from 'react';
import axios from "axios";
export default function mvtSL({rendermvtSL}) {
  console.log('data',rendermvtSL);
  let mvtElement = rendermvtSL.map((mvtstudent, index) => {
      return ( <tr key={index}>
      <th scope="row">{index+1}</th>
        <td>{mvtstudent.mvtId}</td>
        <td>{mvtstudent.mvtName}</td>
        <td>{mvtstudent.mvtAge}</td>
        <td>{mvtstudent.mvtPhone}</td>
        <td>{mvtstudent.mvtEmail}</td>
        <td>{mvtstudent.mvtCreatedAt}</td>
        <td>{mvtstudent.mvtStatus}</td>
        <td>{
        Edit/Delete }</td>
      </tr>)
  });
  return (
    <div>
      <h2> danh sách sinh viên </h2>
      <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">mã sinh viên</th>
      <th scope="col">Họ tên</th>
      <th scope="col">Tuổi</th>
      <th scope="col">Điện thoại</th>
      <th scope="col">Emai</th>
      <th scope="col">Trạng thái</th>
      <th scope="col">Chức năng</th>
    </tr>
  </thead>
  <tbody>
   {mvtElement}
  </tbody>
</table>

    </div>
  )
}
