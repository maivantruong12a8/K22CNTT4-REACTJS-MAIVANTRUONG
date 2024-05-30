import './App.css';
import {react, useState} from 'react'
function mvtApp() {
  // mock data
  const mvt_Products = [
    {
        mvt_productId:"2210900072"      
       ,mvt_productName:"Mai Văn Trường"      
       ,mvt_quantity:15       
       ,mvt_price:1000
    },
    {
          mvt_productId:"P002"
        , mvt_productName:"IPhone 12"
        , mvt_quantity:20
        , mvt_price:1250
    },
    {
        mvt_productId:"P003"
        , mvt_productName:"IPhone 13"
        ,  mvt_quantity:10
        , mvt_price:1500
    },
]
// sử dụng hàm useStte
const[mvtListProduct, setmvtListProduct] = useState(mvt_Products)
  return (
    <div className="container borde MT-5">
      <h1>sử lí chức lăng với CRUD - HOOK</h1>
      <hr/>
      <mvtLPd />
    </div>
  );
}

export default mvtApp;
