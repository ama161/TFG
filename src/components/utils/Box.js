import React from 'react';

const Box = ({children, className}) => {
    // let classNames = "box " + (className) ? className : '';
    return(
        <div className = "box">
            <div className = "circle-box">

            </div>

            {children}
        </div>
    )
}

export default Box;