import React from 'react'
import { useSelector } from 'react-redux'
import Hero from './Hero'
import MainHome from './MainHome';

function Home() {
    const itemsObj = useSelector(store=>store)
    console.log(itemsObj.items);
  return (
    <div>
       <Hero/>
       <div className='container mt-5'>
        <div className='row g-5'>
            {
                itemsObj.items.map((item)=>{
                    return(
                        <div className='col-md-4'>
                            <MainHome item = {item}/>
                        </div>
                    )
                })
            }
        </div>
       </div>
    </div>
  )
}

export default Home