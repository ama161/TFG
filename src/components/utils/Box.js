import React from 'react';

const Box = ({children, className, type, typeIcon}) => {
    // let classNames = "box " + (className) ? className : '';
    let classNameType = (type === 'brown') ? 'box-brown' : (type === 'white') ? 'box-white' : 'box-blue';
    let classNameCircle = (type === 'brown') ? 'circle-box--brown' : (type === 'white') ? 'circle-box--white' : 'circle-box--blue';
    return(
        <div className="container-box">
            <div className={"circle-box " + classNameCircle}>
                <p className={typeIcon}></p>
            </div>
            <div className = {"box " + classNameType}>
                {children}
            </div>
        </div>
    )
}

export default Box;