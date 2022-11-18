import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'


function SingleItem() {
    const {name} = useParams()

    const itemObj = useSelector(store=>store)
 
    const getSingleProduct = itemObj.items.find((product)=> product.itemName === name)


  return (
    <div>
        <div className='container mt-5'>
            <div className='row justify-content-center'>
                <div className='col-md-10'>
                    <div className='card shadow p-3 mb-5 bg-body rounded'>
                        <div className='card-body d-flex' style={{margin: '0 20px'}}>
                            <div>
                                <img src= {getSingleProduct.itemImage} alt={getSingleProduct.itemName} className= 'img-fluid'/>
                            </div>
                            <div>
                                <h5 className='card-text'>NAME: {getSingleProduct.itemName}</h5>
                                <h5 className='card-text'>PRICE: &#8358;{getSingleProduct.itemPrice}</h5>
                                <button className='btn btn-primary'>ADD TO CART</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SingleItem