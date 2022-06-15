import React from 'react';
import { Link } from 'react-router-dom';

const Items = ({ items, addItems, cartItems }) => {
    

    return (

        <div className="container">

            {/* Header */}
            <div className="row align-items-center justify-content-center">
                <div className='d-flex m-3 align-items-center'>
                    <h1 className='flex-grow-1'>Items Page</h1>
                    <h6>Cart({cartItems})</h6>
                    <Link to="/invoice">
                        <button className='btn btn-sm btn-primary m-3 '>Go to Invoice</button>
                    </Link>
                </div>
            </div>  

            {/* Items List */}
            <div className='row align-items-center'>
                {
                    items.map((item) => {
                        return (
                            <div className="card m-2" style={{ width: "18rem", height: '300px' }} key={item.id}>
                                {/* <img src="..." className="card-img-top" alt="..." /> */}
                                <div className="card-body d-flex flex-column">
                                    <div className='flex-grow-1'>
                                        <h5 className="card-title">{item.name}</h5>
                                        <p className="card-text">{item.desc}</p>
                                    </div>
                                    <button
                                        className='btn btn-sm btn-primary'
                                        onClick={() => addItems(item.id)}
                                    >
                                        Add to Cart {item.price}$
                                    </button>

                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>


    )
}

export default Items;