import React from 'react'

class HomeUser extends React.Component{
    constructor(props){
        super(props);

        this.state={

        }
    }

    render(){
        if(!this.props.user.emailVerified){
            return(
                <p>Email no verificado</p>
            )
        }
        return(
            <div>
                <h1>Welcome!!! {this.props.user.email}</h1>
            </div>
        )
    }
}

export default HomeUser;