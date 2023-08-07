import React from 'react'
import { ProductLists } from '../Helpers/ProductLists'
import Pizza from '../components/Pizza'

const ProductMenu = () => {
  return (
  <div>
    <div className="row">
        {ProductLists.map(ProductList =>{
            return <div className='col-3 '>
                <div >
                   <Pizza ProductList={ ProductList}/>
                </div>
            </div>

        })}
    </div>
  </div>
  )
}

export default ProductMenu