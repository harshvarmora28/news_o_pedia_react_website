import React from 'react'
import loading from '../loading_spinner.gif';

const Spinner = () => {
    return (
        <div className="text-center my-3">
            {/* <img style={{width: "40px", height: "auto",position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}} src={loading} alt="Loading..." /> */}
            <img style={{width: "40px"}} src={loading} alt="Loading..." />
        </div>
    )
}

export default Spinner
