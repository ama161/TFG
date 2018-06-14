import React from 'react';
import Input from '../utils/Input'
import AvatarsContent from '../utils/AvatarsContent';

class StudentForm extends React.Component{
    constructor(props){
        super(props);

        this.state={
            name: '',
            email: ''
        }
    }

    render(){
        return(
            <div>
                <AvatarsContent/>
                <Input 
                    className="form-item"
                    value={this.state.name}
                    type="text" 
                    label="nombre del alumno" 
                    onChange={(event) => this.setState({name: event.target.value})}
                />
                <Input 
                    className="form-item"
                    value={this.state.email}
                    type="text" 
                    label="email asociado" 
                    onChange={(event) => this.setState({email: event.target.value})}
                />
            </div>
        )
    }
}

export default StudentForm;