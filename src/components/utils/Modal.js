import React from 'react';
import { Modal as AntModal } from 'antd';
import ClassForm from "../class/ClassForm";

class Modal extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            visible: false,
        }
    }

    render(){
        return(
            <div>
                <button onClick={() => this.setState({visible: true})}>Modal</button>
                <AntModal 
                    onOk={this.handleOk}
                    okText="New"
                    visible={this.state.visible}
                    onCancel={() => this.setState({visible: false})}
                >
                    <ClassForm/>
                </AntModal>
            </div>
        )
    }
}

export default Modal