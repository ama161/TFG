import React from 'react';

const Box = ({children, className}) => {
    // let classNames = "box " + (className) ? className : '';
    return(
        <div>
        <div className = "circle-box"></div>
        <div className = "box">
            {children}
        </div>
        </div>
    )
}

export default Box;