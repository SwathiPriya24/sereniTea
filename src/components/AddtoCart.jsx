import React, { useState } from 'react'

function AddtoCart() {
    const [count, setcount] = useState(0)

    function add() {
        return (
            setcount((count) => count + 1)
        )
    }
    function remove() {
        if (count <= 0) {
            return (
                setcount((count) => count = 0)
            )
        }

        else {
            return (
                setcount((count) => count - 1)
            )
        }
    }

    return (
        <>
            <div className=" text-center d-flex justify-content-center align-items-center py-2">
                <div className="outerButnCont">
                    <button className='btn1' onClick={() => add()}> <span className='addicon'>+</span> </button>
                    <div className='countCont'>             
                           <h1 className='text-center d-flex align-items-center'>{count}</h1>
                           </div>
                    <button className='btn2 ' onClick={() => remove()}> <span className="addicon">-</span></button></div>
            </div>
        </>
    )
}

export default AddtoCart;