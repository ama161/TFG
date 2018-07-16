import React from 'react'
import language from '../../language/language'
import Header from '../utils/Header';

class HomeAdmin extends React.Component{
    constructor(props){
        super(props);

        this.handleLogout = this.handleLogout.bind(this);
        this.state={
            user: '',
            language: 0
        }
    }

    componentWillMount(){
        if(this.props.language){
            this.setState({language: this.props.language})
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.language){
            this.setState({language: nextProps.language})
        }
    }

    handleLogout(){
        this.props.logout(this.props.history)
    }

    render(){
        let lan = localStorage.language;
        return(
            <div>
                <Header/>
                <h1>Welcome Admin!!!</h1>                
                <div>
                    <button className="button-fill" onClick={() => this.props.history.push("/")}>{language[lan].addTeachers}</button>
                    <button className="button-fill" onClick={() => this.props.history.push("/")}>{language[lan].addStudents}</button>
                    <button className="button-fill" onClick={() => this.props.history.push("/")}>{language[lan].addParents}</button>  
                </div>
            </div>
        )
    }
}

export default HomeAdmin;