import React, { useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { getAllAsync, addAsync, selectProducts, delAsync } from './CRUDSlice'

const CRUD = () => {
    const dispatch = useAppDispatch();
    const products = useAppSelector(selectProducts);
    const [desc, setdesc] = useState("")
    const [price, setprice] = useState(0)
    useEffect(() => {
        dispatch(getAllAsync())
    }, [])
    
    return (
        <div>
           <h1> CRUD</h1>
            Desc<input onChange={(e)=>setdesc(e.target.value)}/>
            price<input onChange={(e)=>setprice(+e.target.value)}/>
            <button onClick={() => dispatch(addAsync({desc,price}))}>Add Data</button> 
            <button onClick={() => dispatch(getAllAsync())}>Load Data</button> 
            <hr/>
            {products.length}
            <hr/>
            {products.map((prod,ind) =>  <div key={ind}>{prod.desc} 
            <button onClick={() => dispatch(delAsync(prod.id || 0))}>Delete Data </button>
              </div> )}
        </div>
    )
}

export default CRUD
