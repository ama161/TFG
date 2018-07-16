import React from 'react'
import Language from './LanguageContainer';
import language from '../../language/language';

class Header extends React.Component{
    constructor(props){
        super(props);

        this.state = {}
    }

    render(){
        return (
            <div className="header">
                <button className="button-fill" onClick={() => this.handleLogout()}>{language[localStorage.language].logout}</button>                
                <Language/>
            </div>
        )
    }

}

export default Header