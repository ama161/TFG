import React from 'react'
import Input from '../utils/Input'
import AnimalsContent from '../utils/AnimalsContent'

class ClassForm extends React.Component{
    constructor(props){
        super(props);

        this.state={
            name: ''
        }
    }

    render(){
        return(
            <div>
                <AnimalsContent/>
                <Input 
                    className="form-item"
                    value={this.state.name}
                    type="text" 
                    label="nombre de la clase" 
                    onChange={(event) => this.setState({name: event.target.value})}
                />
            </div>
        )
    }
}

export default ClassForm