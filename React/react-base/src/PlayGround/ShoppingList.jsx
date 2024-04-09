import React, { useState } from 'react';
import { AddTask } from '../CustomIcon';

function ShoppingList() {

    const [items, setItems] = useState([
        {
            ItemName: "Apple",
            Quantity: 4,
            Price: 50
        },
        {
            ItemName: "Banana",
            Quantity: 6,
            Price: 20
        },
        {
            ItemName: "Cherry",
            Quantity: 5,
            Price: 70
        },
    ])

    const [InputValue, setInputValue] = useState({
        title: "watch",
        quantity: 2,
        price: 10,
    })

    // function handleItemNameChange(event) {
    //     setItemName(event.target.value)
    // }
    // function handleQuantityChange(event) {
    //     setQuantity(event.target.value)
    // }
    // function handlePriceChange(event) {
    //     setPrice(event.target.value)
    // }


    function handleSubmit(event) {
        event.preventDefault()

        let itemName = event.target.itemN.value;
        let quantity = event.target.quantityN.value;
        let price = event.target.priceN.value

        let updatedItems = [...items, { itemName, quantity, price }]
        setItems(updatedItems)

    }

    // console.log(ShoppingListObject); // no need to use index 

    return (
        <>
            <h1>Shopping List <i> » (🔴 Live Update)</i></h1>
            <div>
                {/* <span>
                    ItemName :- {ItemName} <br />
                    Quanity :- {Quantity} <br />
                    Price :- <i>Rs.</i> {Price}
                </span> */}
                <hr />
                <form onSubmit={handleSubmit}>
                    <input name='itemN' type="text" placeholder='Item Name' required />
                    <input name='quantityN' type="number" placeholder='Quantity' required />
                    <input name='priceN' type="number" placeholder='Price Rate' required />
                    <button type="sumbit" className='btn'> <AddTask /> </button>
                </form>

                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.ItemName}</td>
                                    <td>{item.Quantity}</td>
                                    <td>Rs. {item.Price}</td>
                                </tr>
                            )
                        })
                        }
                    </tbody>
                </table>


            </div>

        </>
    );
}

export default ShoppingList;