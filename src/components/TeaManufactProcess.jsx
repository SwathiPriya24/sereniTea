import React from 'react'
import teaprocess from "../images/processimg.png"
const TeaManufactProcess = () => {
    return (
        <>
            <div className="container text-center teaManuSec" >
                <h2> Tea Manufacturing & Process</h2>
                <br /><br />
                <div className="row">
                    <div className="col-12">


                        <img className='img-fluid' src={teaprocess} alt="" style={{ maxHeight: "600px"}}  />
                    </div>
                </div>
            </div>
        </>
    )
}
export default TeaManufactProcess;