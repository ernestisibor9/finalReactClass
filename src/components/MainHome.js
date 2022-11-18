import React, { useState } from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

function MainHome({item}) {
    const[info, setInfo] = useState(false)
    const dispatch = useDispatch()

    //Create a function called addCart
    const addCart = ()=>{
        dispatch({type: "ADD_ITEM", payload: item})
    }


  return (
        <div className='card shadow p-3 mb-5 bg-body rounded'>
            <div className='card-body'>
                <Link to= {`/single-product/${item.itemName}`}>
                <img src={item.itemImage} alt='' width={250} height={220}/>
                </Link>
            
                <h5 className='card-text'>{info ? item.itemName : `${item.itemName.substring(0, 25)}`}</h5>
                <h5 className='card-text'>PRICE: &#8358;{item.itemPrice}</h5>
                <button className='btn btn-primary' onClick={addCart}>ADD TO CART <AiOutlineShoppingCart style={{fontSize: '20px'}}/></button>
            </div>
        </div>
  )
}

export default MainHome