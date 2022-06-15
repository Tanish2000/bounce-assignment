import React, { useEffect , useState } from 'react';
import { Link } from 'react-router-dom';


const Invoice = ({ items, removeItems, cartItems }) => {

    const [Total, setTotal] = useState(0);


    useEffect(() => {      
        let total_sum = items.reduce((total, item) => {
            return total + parseInt(item.price);
        }, 0)
        setTotal(total_sum);
    }, [items])
    

    return (
        <div className='container'>
            <div className="row align-items-center justify-content-center">
                <div className='d-flex m-3 align-items-center'>
                    <h1 className='flex-grow-1'>Your Invoice</h1>
                    <h6>Cart({cartItems})</h6>
                    <Link to="/">
                        <button className='btn btn-sm btn-primary m-3 '>Back to Items</button>
                    </Link>
                </div>
            </div>
            {
                items.length !== 0
                ?<div className='row align-items-center m-3 p-5 rounded bg-primary text-light justify-content-center'>
                    {
                        items.map((item,idx) => {
                            return (
                                <div className='d-flex my-1' key={idx}>
                                    <button className="mx-2 btn btn-danger btn-sm rounded" onClick={() => removeItems(item.id)}>X</button>
                                    <h6 className='flex-grow-1'>{item.name}</h6>
                                    <h6 className='flex-grow-2'>${item.price}</h6>
                                </div>
                            )
                        })
                    }
                    <div style={{ border: '0.5px solid rgba(230,255,255,0.6)', margin : '10px' }}></div>
                    <div className='d-flex my-1'>
                                    <h6 className='flex-grow-1'>Total</h6>
                                    <h6 className='flex-grow-2'>${Total}</h6>
                    </div>
                </div>
                :<div className='d-flex justify-content-center'>No items Added</div>
            }
        </div>
    )
}

export default Invoice