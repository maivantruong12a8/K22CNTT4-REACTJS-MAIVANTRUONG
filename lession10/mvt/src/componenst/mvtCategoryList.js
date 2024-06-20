import React from 'react';

export default function mvtCategoryList({rendermvtCategories}) {
  return (
    <div className="container m-2">
      <h2>DANH SÁCH LOẠI SẢN PHẨM</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
          <th>#</th>
          <th>mã loại</th>
          <th>tên loại</th>
          <th>trạng thái</th>
          <th>chức năng</th>
          </tr>
        </thead>
        <tbody>

        </tbody>
      </table>
    </div>
  );
}

