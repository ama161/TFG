import React from 'react'

class HomeAdmin extends React.Component{
    constructor(props){
        super(props);

        this.state={
            user: '',
        }
    }

    componentWillMount(){
        
    }

    render(){
        return(
            <div>
                <h1>Welcome Admin!!!</h1>
            </div>
        )
    }
}

export default HomeAdmin;