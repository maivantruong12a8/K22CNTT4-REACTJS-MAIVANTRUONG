import React from 'react'

export default function mvtLPd({rendermvtProducts}) {
    console.log("List Product:" ,rendermvtProducts);
    let mvtElementProduct = rendermvtProducts.map((mvtProduct, index) => {
            return(
                <> 
                <tr key={index}>
                <td>{index+1}</td>
                <td>{mvtProduct.mvt_productId}</td>
                <td>{mvtProduct.mvt_productName}</td>
                <td>{mvtProduct.mvt_quantity}</td>
                <td>{mvtProduct.mvt_price}</td>
                <td>{mvtProduct.mvt_quantity*mvtProduct.mvt_price}</td>
                <td>
                    edit | delete
                </td>
            </tr>
                </>
            )
    } )
  return (
    <div>
      <h2>danh sách sản phẩm</h2>
      <table className='table table-borderde'>
        <thead>
            <tr>
                <th>#</th>
                <th>mã sản phẩm</th>
                <th>tên sản phẩm</th>
                <th>số lượng </th>
                <th>đơn giá </th>
                <th>thành tiền</th>

            </tr>
        </thead>
        <tbody>
            {mvtElementProduct}
        </tbody>
      </table>
    </div>
  )
}
