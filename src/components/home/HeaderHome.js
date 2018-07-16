import React from 'react';
import { withRouter } from 'react-router'

import Language from '../utils/LanguageContainer';
import language from '../../language/language'

class HeaderHome extends React.Component{
    constructor(props){
        super(props);

        this.state = {

        }
    }

    render(){
        let lan = localStorage.language;
        return(
            <div className="home-buttons">
                <button className="button-fill" onClick={() => this.props.history.push("/login")}>{language[lan].login}</button>
                <Language/>
            </div>
        )
    }
}

export default withRouter(HeaderHome)