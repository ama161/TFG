import React from 'react'

class HomeUser extends React.Component{
    constructor(props){
        super(props);

        this.state={

        }
    }

    componentDidMount(){
        console.log(this.props.user);
    }

    componentWillReceiveProps(nextProps){
        console.log(nextProps.user);
    }

    render(){
        return(
            <div>
                <h1>Welcome!!!</h1>
            </div>
        )
    }
}

export default HomeUser;