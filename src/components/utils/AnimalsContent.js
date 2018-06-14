import React from 'react'

class AnimalsContent extends React.Component{
    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);

        this.state = {
            iconSelected: ''
        }
    }

    handleClick(icon){
        let oldIcon = this.state.iconSelected;
        if(oldIcon !== ''){
            document.getElementsByClassName(oldIcon)[0].className = oldIcon;
        }
        this.setState({iconSelected: icon})
        document.getElementsByClassName(icon)[0].className = icon + " icon-selected";
    }

    render(){
        return(
            <div className="animals-content">
                <p className="icon-dog" onClick={() => this.handleClick("icon-dog")}></p>
                <p className="icon-cat" onClick={() => this.handleClick("icon-cat")}></p>
                <p className="icon-bee" onClick={() => this.handleClick("icon-bee")}></p>
                <p className="icon-owl" onClick={() => this.handleClick("icon-owl")}></p>
                <p className="icon-cow" onClick={() => this.handleClick("icon-cow")}></p>
                <p className="icon-bat" onClick={() => this.handleClick("icon-bat")}></p>
                <p className="icon-crab" onClick={() => this.handleClick("icon-crab")}></p>
                <p className="icon-elephant" onClick={() => this.handleClick("icon-elephant")}></p>
                <p className="icon-fish" onClick={() => this.handleClick("icon-fish")}></p>
                <p className="icon-pig" onClick={() => this.handleClick("icon-pig")}></p>
                <p className="icon-tiger" onClick={() => this.handleClick("icon-tiger")}></p>
                <p className="icon-toucan" onClick={() => this.handleClick("icon-toucan")}></p>
            </div>
        )
    }
}

export default AnimalsContent