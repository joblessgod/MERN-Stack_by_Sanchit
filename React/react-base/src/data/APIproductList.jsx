import axios from 'axios'
import React, { useState } from 'react'

export default function APIproductList() {
    const [products, setProducts] = useState([])
    const [isLoading, setisLoading] = useState(false)

    const fetchProducts = () => {
        setisLoading(true)

        let url = "https://dummyjson.com/products"
        axios.get(url)
            .then(res => {
                // console.log(res.data.products);
                setProducts(res.data.products)
                setisLoading(false)
            })
    }


    return (
        <>      {/* NEed to fetch api automatically after loading screen */}
            <button onClick={fetchProducts}>fetch product</button>
            {
                isLoading && (<p>Loading...</p>)
            }
            <ul>
                {
                    products.map((el, idx) => {
                        return (<li key={idx}>{el.title}</li>)
                    })
                }
            </ul>


        </>

    )
}
