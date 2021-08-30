import React from 'react'
import loading from '../loading_spinner.gif';

const Spinner = () => {
    return (
        <div className="text-center">
            <img style={{width: "40px", height: "auto",position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}} src={loading} alt="Loading..." />
        </div>
    )
}

export default Spinner
